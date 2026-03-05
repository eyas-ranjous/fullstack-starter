# Skill: Create API Endpoint

Use this skill when adding a new backend endpoint.

Steps:

1. Define request/response types in `packages/shared/src`.
2. Implement the route in `apps/api/src`.
3. Validate inputs with Zod when necessary.
4. Return responses matching the shared types.
5. Keep `server.ts` minimal; extract logic into route modules if needed.

Rules:

- Do not introduce new frameworks.
- Prefer small functions.
- Do not modify unrelated endpoints.
