# Agent Guide — fullstack-starter

This repository is a minimal fullstack TypeScript monorepo.

## Stack

- `apps/api` — Fastify 5 API server (Node.js, TypeScript, Zod)
- `apps/web` — React 18 + Vite frontend (TanStack Query for data fetching)
- `packages/shared` — shared TypeScript contracts between API and web

## Setup

Install dependencies:

```
pnpm install
```

Copy environment variables:

```
cp .env.example .env
```

Run both apps:

```
pnpm dev
```

Run individually:

```
pnpm dev:api
pnpm dev:web
```

## Local development

API runs at `http://localhost:3000`

Web runs at `http://localhost:5173`

The frontend reads `VITE_API_BASE_URL` from `.env` to reach the API. Default is `http://localhost:3000`.

## Conventions

### API

- Routes live in `apps/api/src/routes/` — one file per resource
- Register routes in `server.ts` via `app.register()`
- Keep `server.ts` minimal — only plugin registration and startup
- Validate inputs with Zod for non-trivial endpoints
- API responses must match the types in `packages/shared`

### Web

- UI code lives in `apps/web/src/`
- Use TanStack Query (`useQuery`) for all data fetching — do not use raw `useEffect` for fetching
- API call functions live in `api.ts` files alongside their feature; use `VITE_API_BASE_URL` from `import.meta.env`
- Keep components small and focused
- Prefer feature folders as the UI grows (e.g. `src/users/UsersPage.tsx`)

### Shared

Reusable libraries live in `packages/`.

Currently:

- `packages/shared` — shared TypeScript types and API contracts

Rules:

- Shared types live in `packages/shared/src/contracts/`
- Export them from `packages/shared/src/index.ts`
- API responses must match shared types
- Do not place server logic or React components in `shared`

Other packages may be added to `packages/` as needed:

- `packages/ui` — shared React components
- `packages/db` — database schema or ORM layer
- `packages/config` — shared tooling configuration

## Rules

- Prefer small changes over large refactors
- Do not add dependencies unless necessary
- Do not modify unrelated files
- If API response shapes change, update the shared type first

## Verification

After changes:

1. Run `pnpm typecheck` — must pass with no errors
2. Run `pnpm dev`
3. Open http://localhost:5173
4. Confirm the frontend can reach the API

## Skills

Reusable workflows are stored in `skills/`. Use a skill when the task matches.

Available skills:

- `skills/create-api-endpoint` — adding a new backend route
- `skills/create-react-feature` — adding a new frontend feature
