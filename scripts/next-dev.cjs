/**
 * Arranque de desarrollo tolerante a Windows:
 * - Un solo `next dev` a la vez (lock + puertos 3000–3009).
 * - Borra .next solo si no hay otro servidor activo (evita Internal Server Error).
 */
const net = require("net");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = process.cwd();
const nextOut = path.join(root, ".next");
const lockFile = path.join(root, ".next-dev.lock");
const DEV_PORT_MIN = 3000;
const DEV_PORT_MAX = 3009;

function portFree(port) {
  return new Promise((resolve) => {
    const s = net.createServer();
    s.once("error", () => resolve(false));
    s.listen(port, () => {
      s.close(() => resolve(true));
    });
  });
}

async function findOccupiedDevPort() {
  for (let p = DEV_PORT_MIN; p <= DEV_PORT_MAX; p++) {
    if (!(await portFree(p))) return p;
  }
  return null;
}

function readLock() {
  try {
    const raw = fs.readFileSync(lockFile, "utf8").trim();
    const pid = Number.parseInt(raw, 10);
    if (!Number.isFinite(pid)) return null;
    return pid;
  } catch {
    return null;
  }
}

function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return e && e.code === "EPERM";
  }
}

function writeLock(pid) {
  try {
    fs.writeFileSync(lockFile, String(pid), "utf8");
  } catch {
    /* ignore */
  }
}

function removeLock() {
  try {
    fs.unlinkSync(lockFile);
  } catch {
    /* ignore */
  }
}

function clearDevCache() {
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
}

async function pickPort() {
  for (let p = DEV_PORT_MIN; p <= DEV_PORT_MAX; p++) {
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
  const occupied = await findOccupiedDevPort();
  const lockPid = readLock();

  if (lockPid != null && isProcessAlive(lockPid)) {
    const portHint = occupied != null ? `http://localhost:${occupied}` : "el puerto en uso";
    console.log(`[dev] Ya corre un servidor (PID ${lockPid}). Abre ${portHint}`);
    console.log("[dev] Para reiniciar: Ctrl+C en esa terminal, o ejecuta npm run dev:repair");
    process.exit(0);
  }

  if (occupied != null) {
    removeLock();
    console.log(`[dev] Ya hay un servidor en http://localhost:${occupied}`);
    console.log("[dev] Usa esa URL. Si ves Internal Server Error, ejecuta: npm run dev:repair");
    process.exit(0);
  }

  if (wanted != null) {
    if (!(await portFree(wanted))) {
      console.error(
        `[dev] El puerto ${wanted} (PORT/NEXT_DEV_PORT) no está libre. Cierra el proceso que lo usa.`
      );
      process.exit(1);
    }
  }

  removeLock();
  clearDevCache();

  let port;
  if (wanted != null) {
    port = wanted;
  } else {
    port = await pickPort();
    if (port == null) {
      console.error("[dev] No hay puerto libre entre 3000 y 3009. Cierra otros servidores.");
      process.exit(1);
    }
  }

  console.log(`[dev] http://localhost:${port}`);

  const isWin = process.platform === "win32";
  const child = spawn("npx", ["next", "dev", "-p", String(port)], {
    cwd: root,
    stdio: "inherit",
    shell: isWin,
    env: process.env
  });

  writeLock(child.pid);

  const cleanup = () => {
    removeLock();
  };

  child.on("exit", (code) => {
    cleanup();
    process.exit(code ?? 0);
  });

  process.on("SIGINT", () => {
    cleanup();
    child.kill("SIGINT");
  });
  process.on("SIGTERM", () => {
    cleanup();
    child.kill("SIGTERM");
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
