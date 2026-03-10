---
name: create-react-feature
description: add a new frontend feature.
---

# Create React Feature

Use this skill when adding a new frontend feature.

## Steps

1. Create a component in `apps/web/src/<feature>/`.
2. Create an `api.ts` in the same folder with typed fetch functions that use `import.meta.env.VITE_API_BASE_URL`.
3. Create a `use<Feature>.ts` hook that calls `useQuery` from TanStack Query, using the `api.ts` function as `queryFn`.
4. Use shared types from `@fullstack-starter/shared` for request/response shapes.
5. Render loading and error states from the query result (`isPending`, `isError`).

## Example structure

```text
apps/web/src/users/
  UsersPage.tsx      ← component, consumes useUsers()
  useUsers.ts        ← useQuery({ queryKey: ['users'], queryFn: fetchUsers })
  api.ts             ← fetchUsers(): Promise<UsersResponse>
```

## Data fetching pattern

```ts
// api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export async function fetchUsers(): Promise<UsersResponse> {
  const res = await fetch(`${API_BASE_URL}/users`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

// useUsers.ts
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./api";

export function useUsers() {
  return useQuery({ queryKey: ["users"], queryFn: fetchUsers });
}
```

## Rules

- Always use TanStack Query (`useQuery`) for data fetching — do not use raw `useEffect`.
- Keep components small and focused.
- Avoid deep folder hierarchies.
- Do not hardcode API URLs — always read from `import.meta.env.VITE_API_BASE_URL`.
- Do not introduce global abstractions unless they are clearly reusable across features.
- Avoid adding dependencies unless necessary.
