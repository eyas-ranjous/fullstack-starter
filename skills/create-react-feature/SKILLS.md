# Skill: Create React Feature

Use this skill when adding a new frontend feature.

Steps:

1. Create a component inside `apps/web/src`.
2. Place hooks or API helpers next to the component when needed.
3. Fetch backend data from `http://localhost:3000`.
4. Use shared types from `packages/shared`.

Example structure:

```text
apps/web/src/users/UsersPage.tsx
apps/web/src/users/useUsers.ts
```

Optional helpers may live alongside the component:

```text
apps/web/src/users/
  UsersPage.tsx
  useUsers.ts
  api.ts
```

Rules:

* Components should drive the structure.
* Keep components small and focused.
* Avoid deep folder hierarchies.
* Do not introduce global abstractions unless they are clearly reusable.
* Avoid adding dependencies unless necessary.
