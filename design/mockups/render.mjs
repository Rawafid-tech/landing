// Renders the landing-page images from the HTML mock-ups in this folder with headless Chrome.
// Usage: node design/mockups/render.mjs   (set CHROME_PATH to override the browser binary)
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const assets = resolve(here, "../../src/assets");
const chrome =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function shoot(page, query, out, { width, height, scale }) {
  const url = `${pathToFileURL(join(here, page)).href}?${new URLSearchParams(query)}`;
  mkdirSync(dirname(out), { recursive: true });
  execFileSync(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      `--force-device-scale-factor=${scale}`,
      `--window-size=${width},${height}`,
      "--virtual-time-budget=3000",
      `--screenshot=${out}`,
      url,
    ],
    { stdio: "ignore" },
  );
  console.log("wrote", out);
}

// Hero: 1280x720 CSS px at 1.4x -> 1792x1008 (16:9), one per locale and theme.
for (const lang of ["ar", "en"]) {
  for (const theme of ["light", "dark"]) {
    shoot("hero.html", { lang, theme }, join(assets, "hero", `hero-${lang}-${theme}.png`), {
      width: 1280,
      height: 720,
      scale: 1.4,
    });
  }
}

// Problem cards: 960x600 CSS px at 1.875x -> 1800x1125 (16:10).
for (const scene of ["dashboards", "tracking", "returns", "manual", "pricing", "hidden-costs"]) {
  shoot("problems.html", { scene }, join(assets, "problems", `${scene}.png`), {
    width: 960,
    height: 600,
    scale: 1.875,
  });
}
