/**
 * Repara Internal Server Error por .next corrupto:
 * cierra procesos en 3000–3009, limpia caché y arranca un solo next dev.
 */
const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const isWin = process.platform === "win32";

function killDevPorts() {
  if (isWin) {
    try {
      execSync(
        'powershell -NoProfile -Command "' +
          "3000..3009 | ForEach-Object { " +
          "Get-NetTCPConnection -LocalPort $_ -ErrorAction SilentlyContinue | " +
          "ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }" +
          '}"',
        { stdio: "ignore" }
      );
    } catch {
      /* ignore */
    }
  } else {
    try {
      execSync("lsof -ti:3000-3009 | xargs kill -9 2>/dev/null || true", { stdio: "ignore", shell: true });
    } catch {
      /* ignore */
    }
  }
}

function clean() {
  try {
    fs.unlinkSync(path.join(root, ".next-dev.lock"));
  } catch {
    /* ignore */
  }
  try {
    fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });
  } catch {
    /* ignore */
  }
  try {
    fs.rmSync(path.join(root, "node_modules", ".cache"), { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}

console.log("[dev:repair] Cerrando servidores en 3000–3009 y limpiando caché…");
killDevPorts();
clean();

const child = spawn("node", ["scripts/next-dev.cjs"], {
  cwd: root,
  stdio: "inherit",
  shell: isWin,
  env: process.env
});

child.on("exit", (code) => process.exit(code ?? 0));
