# Agent Guide — fullstack-starter

This repository is a minimal fullstack TypeScript monorepo.

Structure:

- `apps/api` — Fastify API server
- `apps/web` — React + Vite frontend
- `packages/shared` — shared TypeScript contracts

## Setup

Install dependencies:

pnpm install

Run both apps:

pnpm dev

Run individually:

pnpm dev:api
pnpm dev:web

## Local development

API runs at:

http://localhost:3000

Web runs at:

http://localhost:5173

The frontend calls the API directly using:

http://localhost:3000

## Conventions

### API
- Implement routes inside `apps/api/src`
- Keep `server.ts` minimal
- Extract route logic into modules as the API grows
- Validate inputs with Zod for non-trivial endpoints

### Web
- UI code lives in `apps/web/src`
- Keep components small and focused
- Prefer feature folders if the UI grows

### Shared
- Shared types live in `packages/shared/src`
- Export them from `packages/shared/src/index.ts`
- API responses should match shared types

## Rules

- Prefer small changes over large refactors
- Do not add dependencies unless necessary
- Do not modify unrelated files
- If API responses change, update shared types

## Verification

After changes:

1. Run `pnpm dev`
2. Open http://localhost:5173
3. Confirm the frontend can reach the API

## Skills

Reusable workflows are stored in:

skills/

Agents should use these skills when implementing features.

