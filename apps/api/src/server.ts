// apps/api/src/server.ts
import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => ({
  ok: true,
  uptimeMs: Math.round(process.uptime() * 1000),
}));

await app.listen({ port: 3000, host: "0.0.0.0" });
