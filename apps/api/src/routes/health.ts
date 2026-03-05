import { FastifyInstance } from "fastify";
import { HealthResponse } from "@fullstack-starter/shared";

export async function healthRoutes(app: FastifyInstance) {
  app.get("/health", async (): Promise<HealthResponse> => {
    return {
      status: "ok",
      service: "api",
      timestamp: Date.now(),
    };
  });
}
