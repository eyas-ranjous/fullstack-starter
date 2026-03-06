# Skill: Create API Endpoint

Use this skill when adding a new backend endpoint.

## Steps

1. Define request/response types in `packages/shared/src/contracts/<resource>.ts`.
2. Export the new types from `packages/shared/src/index.ts`.
3. Implement the route in `apps/api/src/routes/<resource>.ts`.
4. Register the route in `apps/api/src/server.ts` with `app.register(<resourceRoutes>)`.
5. Validate request inputs with Zod when the endpoint accepts user-supplied data.
6. Return responses that exactly match the shared type.

## Example

```text
packages/shared/src/contracts/users.ts   ← type definitions
apps/api/src/routes/users.ts             ← route implementation
apps/api/src/server.ts                   ← add app.register(usersRoutes)
```

## Rules

- Keep `server.ts` minimal — only `app.register()` calls and startup.
- Prefer small, single-resource route modules.
- Do not introduce new frameworks or change the server setup.
- Do not modify unrelated routes.
- API response shape must match the shared contract exactly.
