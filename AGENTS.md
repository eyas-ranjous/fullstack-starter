# Agent Guide (fullstack-starter)

## Repo layout
- apps/api: Fastify API (TypeScript)
- apps/web: React + Vite (TypeScript)
- packages/shared: shared types/contracts (TS)
- skills/: reusable playbooks for agents

## Setup
pnpm install

## Dev
Run everything:
pnpm dev

Run API only:
pnpm --filter @apps/api dev

Run Web only:
pnpm --filter @apps/web dev

## Rules
- Prefer small diffs.
- No new deps unless necessary.
- Validate API inputs with Zod.
- Shared request/response types live in packages/shared.
- Web should call API via Vite proxy (no hardcoded localhost URLs).
