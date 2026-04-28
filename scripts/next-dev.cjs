/**
 * Arranque de desarrollo tolerante a Windows:
 * - Borra toda la carpeta .next (evita manifest/build corrupto → pantalla 500 en el navegador).
 * - Puerto: si PORT o NEXT_DEV_PORT es un número válido, usa ese (debe estar libre).
 *   Si no, busca el primero libre entre 3000 y 3009 (3300 no entra aquí; usa PORT=3300 si lo necesitas).
 */
const net = require("net");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = process.cwd();
const nextOut = path.join(root, ".next");
try {
  fs.rmSync(nextOut, { recursive: true, force: true });
} catch {
  /* ignore */
}
try {
  fs.rmSync(path.join(root, "node_modules", ".cache"), { recursive: true, force: true });
} catch {
  /* ignore */
}
console.log("[dev] .next y node_modules/.cache limpiados; el primer compile puede tardar un poco.");

function portFree(port) {
  return new Promise((resolve) => {
    const s = net.createServer();
    s.once("error", () => resolve(false));
    // Sin host: igual que Next (IPv4 + IPv6). Solo 127.0.0.1 daba falsos "libres" en Windows.
    s.listen(port, () => {
      s.close(() => resolve(true));
    });
  });
}

async function pickPort() {
  for (let p = 3000; p <= 3009; p++) {
    if (await portFree(p)) return p;
  }
  return null;
}

function requestedPort() {
  const raw = process.env.NEXT_DEV_PORT ?? process.env.PORT;
  if (raw == null || String(raw).trim() === "") return null;
  const n = Number.parseInt(String(raw), 10);
  if (!Number.isFinite(n) || n < 1 || n > 65535) {
    console.error("[dev] PORT / NEXT_DEV_PORT debe ser un entero entre 1 y 65535.");
    process.exit(1);
  }
  return n;
}

async function main() {
  const wanted = requestedPort();
  let port;
  if (wanted != null) {
    if (!(await portFree(wanted))) {
      console.error(
        `[dev] El puerto ${wanted} (PORT/NEXT_DEV_PORT) no está libre. Cierra el proceso que lo usa o elige otro.`
      );
      process.exit(1);
    }
    port = wanted;
  } else {
    port = await pickPort();
    if (port == null) {
      console.error("[dev] No hay puerto libre entre 3000 y 3009. Cierra otros `next dev` o servidores.");
      process.exit(1);
    }
  }

  if (wanted != null) {
    console.log(`[dev] Puerto fijado (PORT/NEXT_DEV_PORT): http://localhost:${port}`);
  } else if (port !== 3000) {
    console.log(`[dev] Puerto 3000 ocupado; abriendo en http://localhost:${port}`);
  } else {
    console.log("[dev] http://localhost:3000");
  }

  const isWin = process.platform === "win32";
  const child = spawn("npx", ["next", "dev", "-p", String(port)], {
    cwd: root,
    stdio: "inherit",
    shell: isWin,
    env: process.env
  });

  child.on("exit", (code) => process.exit(code ?? 0));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
