import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: "*",
});

app.get("/health", async () => ({
  ok: true,
  uptimeMs: Math.round(process.uptime() * 1000),
}));

await app.listen({ port: 3000, host: "0.0.0.0" });
