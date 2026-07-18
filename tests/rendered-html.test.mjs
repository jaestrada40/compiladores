import assert from "node:assert/strict";
import test from "node:test";

test("CompilaLab renderiza la experiencia académica", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(new Request("http://localhost/"), {ASSETS:{fetch:async()=>new Response("Not found",{status:404})}}, {waitUntil(){},passThroughOnException(){}});
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /CompilaLab/);
  assert.match(html, /Del código fuente/);
  assert.match(html, /21 semanas/);
  assert.match(html, /laboratorios/i);
  assert.match(html, /Cuatro ideas, en palabras simples/);
  assert.match(html, /Repaso y examen/);
  assert.match(html, /Análisis léxico válido/);
  assert.match(html, /El resultado se actualiza automáticamente/);
  assert.doesNotMatch(html, /codex-preview/);
});
