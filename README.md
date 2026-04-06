# Project Showcase — Walking Path Portfolio

A cinematic, dark-themed project showcase website for presenting team projects as an immersive journey. Built with a full React frontend and Express backend.

## Live Demo

Deploy this project to get your own live URL using the Replit deploy button.

## Features

- **Walking Path Experience** — Projects are presented as a scroll-driven narrative journey, not just a grid
- **Team Collaboration** — Each project links to its contributors with profiles and social links
- **Real-time Stats** — Live counts of projects, team members, and project statuses
- **Full CRUD API** — Add, edit, and remove projects and team members via REST API
- **Dark Cinematic Design** — Electric blue/purple gradient theme with Framer Motion animations
- **Responsive** — Looks great on all screen sizes

## Pages

| Route | Description |
|---|---|
| `/` | Hero landing with stats and featured projects |
| `/projects` | Walking path scroll experience through all projects |
| `/projects/:id` | Deep-dive project detail with contributors and links |
| `/team` | Team member cards with roles, bios, and social links |
| `/about` | Team story and mission |

## Tech Stack

### Frontend
- **React** + **Vite** — Fast development and builds
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll-triggered animations
- **TanStack Query** — Data fetching and caching
- **Wouter** — Lightweight client-side routing

### Backend
- **Node.js** + **Express 5** — REST API server
- **PostgreSQL** — Relational database
- **Drizzle ORM** — Type-safe database queries
- **Zod** — Runtime validation
- **Pino** — Structured logging

### Tooling
- **pnpm workspaces** — Monorepo package management
- **Orval** — OpenAPI → TypeScript codegen
- **esbuild** — Fast server builds

## Project Structure

```
├── artifacts/
│   ├── api-server/        # Express REST API
│   └── portfolio/         # React + Vite frontend
├── lib/
│   ├── api-client-react/  # Generated React Query hooks
│   ├── api-spec/          # OpenAPI spec (source of truth)
│   ├── api-zod/           # Generated Zod validation schemas
│   └── db/                # Drizzle schema + database client
└── scripts/               # Utility scripts
```

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/projects` | List all projects |
| POST | `/api/projects` | Create a project |
| GET | `/api/projects/:id` | Get a single project |
| PATCH | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |
| GET | `/api/members` | List all team members |
| POST | `/api/members` | Create a team member |
| GET | `/api/members/:id` | Get a single member |
| GET | `/api/stats/summary` | Portfolio stats |
| GET | `/api/stats/featured` | Featured projects |

## Database Schema

- **members** — Team member profiles (name, role, avatar, bio, social links)
- **projects** — Projects (title, description, tags, status, featured flag, links)
- **project_members** — Junction table linking projects to contributors

## Getting Started

This project runs on [Replit](https://replit.com). Clone it and all dependencies install automatically.

```bash
# Install dependencies
pnpm install

# Push database schema
pnpm --filter @workspace/db run push

# Regenerate API types from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# Run the API server
pnpm --filter @workspace/api-server run dev

# Run the frontend
pnpm --filter @workspace/portfolio run dev
```

## Adding Your Projects

Add your real projects via the API:

```bash
curl -X POST /api/members \
  -H "Content-Type: application/json" \
  -d '{"name": "Your Name", "role": "Your Role", "bio": "About you"}'

curl -X POST /api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "What it does",
    "tags": ["React", "Node.js"],
    "status": "live",
    "featured": true,
    "sortOrder": 1,
    "externalUrl": "https://yourproject.com",
    "memberIds": [1]
  }'
```

## License

MIT
