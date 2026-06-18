// Build-time prerenderer (Vite SSG).
//
// After `vite build` (client) and `vite build --ssr src/entry-server.tsx`, this
// script renders each route to static HTML and writes it into dist/, so search
// engines that don't execute JavaScript (notably Yandex) see the real page text
// and per-page <head> tags. The client bundle still hydrates/renders normally.

import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

// Minimal browser-storage shim. The auto-generated Supabase client references
// `localStorage` at module load; in Node that global doesn't exist. We leave
// `window` undefined on purpose so Supabase keeps its server-side guards.
const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};
globalThis.localStorage ??= noopStorage;
globalThis.sessionStorage ??= noopStorage;

// Supabase constructs a Realtime client (needs a WebSocket constructor) when the
// client module loads. Prerender never opens a connection, so an inert stub is
// enough to get past construction.
globalThis.WebSocket ??= class {
  close() {}
  send() {}
  addEventListener() {}
  removeEventListener() {}
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const abs = (p) => resolve(__dirname, p);

// Keep in sync with src/AppRoutes.tsx (only the static, public routes).
const routes = ["/", "/whatsapp-cloud"];

const template = readFileSync(abs("dist/index.html"), "utf-8");
const { render } = await import("./dist-ssr/entry-server.js");

for (const url of routes) {
  const { html, head } = render(url);

  const page = template
    .replace("<!--app-head-->", head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outDir = url === "/" ? abs("dist") : abs(`dist${url}`);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), page, "utf-8");

  console.log(`prerendered ${url} -> ${outDir.replace(__dirname, ".")}/index.html`);
}

console.log(`✓ prerendered ${routes.length} route(s)`);
