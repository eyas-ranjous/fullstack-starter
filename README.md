# fullstack-starter

Minimal fullstack TypeScript monorepo.

## Structure

```text
fullstack-starter
├── apps
│   ├── api
│   │   ├── src
│   │   │   ├── routes
│   │   │   │   └── health.ts
│   │   │   └── server.ts
│   │
│   └── web
│       ├── src
│       │   ├── api.ts
│       │   ├── useHealth.ts
│       │   ├── main.tsx
│       │   └── App.tsx
│       │   └── index.css
│       ├── index.html
│
├── packages
│   └── shared
│       ├── src
│       │   ├── contracts
│       │   │   └── health.ts
│       ├── index.ts
│
├── skills
│   ├── create-api-endpoint
│   │   └── SKILL.md
│   └── create-react-feature
│       └── SKILL.md
│
├── AGENTS.md
├── README.md
```

## Setup

Install dependencies:

```bash
pnpm install
```

Run development servers:

```bash
pnpm dev
```

Run individually:

```bash
pnpm dev:api
pnpm dev:web
```

## Local Development

API runs at:

```
http://localhost:3000
```

Web runs at:

```
http://localhost:5173
```
