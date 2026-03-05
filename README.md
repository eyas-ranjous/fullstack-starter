# fullstack-starter

Minimal fullstack TypeScript monorepo.

## Structure

```text
fullstack-starter
├── apps
│   ├── api
│   │   ├── src
│   │   │   └── server.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── web
│       ├── src
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
│       │   └── index.ts
│       └── package.json
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

## Purpose

A minimal fullstack starter designed to be extended by developers or AI agents.
