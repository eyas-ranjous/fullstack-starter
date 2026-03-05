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
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── web
│       ├── src
│       │   ├── api.ts
│       │   ├── useHealth.ts
│       │   ├── main.tsx
│       │   └── App.tsx
│       ├── index.html
│       ├── vite.config.ts
│       ├── package.json
│       └── tsconfig.json
│
├── packages
│   └── shared
│       ├── src
│       │   ├── contracts
│       │   │   └── health.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── skills
│   ├── create-api-endpoint
│   │   └── SKILL.md
│   └── create-react-feature
│       └── SKILL.md
│
├── AGENTS.md
├── README.md
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
└── .editorconfig
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
