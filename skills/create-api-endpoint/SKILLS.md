# Skill: Create API Endpoint

Use this skill when adding a new backend endpoint.

Steps:

1. Define request/response types in `packages/shared/src/contracts`.
2. Export the types from `packages/shared/src/index.ts`.
3. Implement the route in `apps/api/src/routes`.
4. Register the route from `server.ts`.
5. Validate inputs with Zod when necessary.
6. Return responses matching the shared types.

Example structure:

```text
packages/shared/src/contracts/users.ts
apps/api/src/routes/users.ts
```

Rules:

* Keep `server.ts` minimal.
* Prefer small route modules.
* Do not introduce new frameworks.
* Avoid modifying unrelated endpoints.
* API responses must match shared contracts.
