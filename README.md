<div align="center">

<br />

<img src="https://img.shields.io/badge/ShowPath-Student%20Showcase-0ea5e9?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0zIDEybDItMiA0IDQgOC04IDIgMiIvPjwvc3ZnPg==" alt="ShowPath" />

# ShowPath

### A cinematic student project showcase — built from scratch, shared with the world.

<br />

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-latest-C5F74F?style=flat-square&logo=drizzle&logoColor=black)](https://orm.drizzle.team)
[![pnpm](https://img.shields.io/badge/pnpm-workspaces-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

<br />

> **"We started this showcase because we wanted one place to show the world what we've built —**  
> **not just assignments, but real projects we care about."**

<br />

</div>

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
- [Adding Your Projects](#adding-your-projects)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

ShowPath is a full-stack portfolio platform built by students, for students. It's not a template — every line of code, every design decision, and every feature was thought through and crafted by the team. The platform itself is one of our proudest projects.

Projects are presented as a **cinematic scroll-driven narrative** — not a boring grid. Visitors scroll through a "walking path" of chapters, each revealing a project with parallax motion, animated transitions, and a full case study page.

---

## Live Demo

> Deploy this project on [Replit](https://replit.com) and your live URL is ready in one click.

---

## Features

| Feature | Description |
|---|---|
| 🎬 **Walking Path** | Projects presented as a scroll narrative — each one is a chapter in your story |
| 🎨 **Cinematic Design** | Dark theme with electric blue/purple gradients, glassmorphism, and subtle noise texture |
| ✨ **Animations** | Scroll-triggered parallax and fade effects powered by Framer Motion |
| 📊 **Live Stats** | Real-time counts of projects, members, and production deployments |
| 🔗 **Team Profiles** | Each project links to its contributors with bios, roles, and social links |
| 🗂️ **Full CRUD API** | Add, edit, and remove projects and team members via REST API |
| 📱 **Responsive** | Pixel-perfect on mobile, tablet, and desktop |
| 🌐 **GitHub Integration** | Direct source code links on every page |
| 🔒 **Type-Safe E2E** | OpenAPI spec drives code generation for both client hooks and Zod validators |
| ⚡ **Monorepo** | Shared libraries, single install, consistent tooling across packages |

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero, live stats, and featured project grid |
| `/projects` | **Journey** | Scroll-driven walking path through all projects |
| `/projects/:id` | **Case Study** | Full project detail with images, description, team, and links |
| `/team` | **Team** | Student profiles with roles, bios, and social links |
| `/about` | **Our Story** | Authentic student story, values, and the ShowPath origin |

---

## Tech Stack

### 🖥️ Frontend

| Tool | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18 | UI framework |
| [Vite](https://vitejs.dev) | 7 | Dev server and build tool |
| [TypeScript](https://www.typescriptlang.org) | 5 | Static typing across the entire codebase |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations and scroll effects |
| [TanStack Query](https://tanstack.com/query) | 5 | Server state, caching, and loading states |
| [Wouter](https://github.com/molefrog/wouter) | 3 | Lightweight client-side router |
| [Lucide React](https://lucide.dev) | latest | Icon library |
| [Radix UI](https://www.radix-ui.com) | latest | Accessible headless UI primitives |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | — | Display font (headings) |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Body font |

### ⚙️ Backend

| Tool | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org) | 24 | JavaScript runtime |
| [Express](https://expressjs.com) | 5 | REST API framework |
| [PostgreSQL](https://postgresql.org) | 16 | Relational database |
| [Drizzle ORM](https://orm.drizzle.team) | latest | Type-safe SQL query builder and schema manager |
| [Zod](https://zod.dev) | 3 | Runtime schema validation |
| [Pino](https://getpino.io) | latest | Structured JSON logging |
| [pino-http](https://github.com/pinojs/pino-http) | latest | HTTP request logging middleware |

### 🛠️ Tooling & Infrastructure

| Tool | Purpose |
|---|---|
| [pnpm Workspaces](https://pnpm.io/workspaces) | Monorepo package management |
| [Orval](https://orval.dev) | OpenAPI → TypeScript + React Query codegen |
| [esbuild](https://esbuild.github.io) | Fast server-side TypeScript compilation |
| [OpenAPI 3.1](https://swagger.io/specification/) | Single source of truth for all API contracts |
| [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) | Schema migration and push tooling |
| [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) | Cross-package type checking |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Browser (React)                          │
│                                                                 │
│   ┌─────────────┐   ┌──────────────────┐   ┌────────────────┐  │
│   │  Wouter     │   │  TanStack Query  │   │ Framer Motion  │  │
│   │  (Router)   │   │  (API Hooks)     │   │ (Animations)   │  │
│   └──────┬──────┘   └────────┬─────────┘   └────────────────┘  │
│          │                   │                                  │
│          └─────────────────┬─┘                                  │
│                            │ HTTP / REST                        │
└────────────────────────────┼───────────────────────────────────┘
                             │
┌────────────────────────────▼───────────────────────────────────┐
│                   Express 5 API Server                          │
│                                                                 │
│   ┌────────────┐   ┌───────────────┐   ┌────────────────────┐  │
│   │  /projects │   │   /members    │   │  /stats            │  │
│   └──────┬─────┘   └───────┬───────┘   └──────────┬─────────┘  │
│          └─────────────────┼────────────────────────┘           │
│                            │ Drizzle ORM                        │
└────────────────────────────┼───────────────────────────────────┘
                             │
┌────────────────────────────▼───────────────────────────────────┐
│                      PostgreSQL                                 │
│                                                                 │
│     ┌──────────┐     ┌────────────┐     ┌──────────────────┐   │
│     │ members  │─────│  projects  │─────│ project_members  │   │
│     └──────────┘     └────────────┘     └──────────────────┘   │
└─────────────────────────────────────────────────────────────────┘

Code Generation Pipeline:
  lib/api-spec/openapi.yaml
         │
         ├──▶ lib/api-client-react/   (Orval → React Query hooks)
         └──▶ lib/api-zod/            (Orval → Zod validators)
```

---

## Project Structure

```
showpath/
├── artifacts/
│   ├── api-server/                # Express REST API
│   │   ├── src/
│   │   │   ├── app.ts             # Express app setup
│   │   │   ├── index.ts           # Server entry point
│   │   │   ├── routes/
│   │   │   │   ├── projects.ts    # CRUD for projects
│   │   │   │   ├── members.ts     # CRUD for team members
│   │   │   │   └── stats.ts       # Summary + featured stats
│   │   │   ├── middlewares/
│   │   │   └── lib/
│   │   └── package.json
│   │
│   └── portfolio/                 # React + Vite frontend
│       ├── src/
│       │   ├── components/
│       │   │   ├── layout.tsx     # Nav, footer, noise overlay
│       │   │   └── ui/            # Radix-based UI components
│       │   ├── pages/
│       │   │   ├── home.tsx       # Hero, stats, featured grid
│       │   │   ├── projects.tsx   # Walking path journey
│       │   │   ├── project-detail.tsx  # Case study page
│       │   │   ├── team.tsx       # Team member cards
│       │   │   └── about.tsx      # Our story + values
│       │   ├── hooks/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css          # Theme tokens + Tailwind
│       ├── index.html
│       └── vite.config.ts
│
├── lib/
│   ├── api-spec/
│   │   └── openapi.yaml           # ← Single source of truth for API
│   ├── api-client-react/          # Generated: React Query hooks
│   ├── api-zod/                   # Generated: Zod validation schemas
│   └── db/
│       └── src/
│           ├── schema/index.ts    # Drizzle table definitions
│           └── index.ts           # Database client export
│
├── package.json                   # Workspace root
└── pnpm-workspace.yaml
```

---

## API Reference

### Projects

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/projects` | List all projects (includes members) |
| `POST` | `/api/projects` | Create a new project |
| `GET` | `/api/projects/:id` | Get a single project by ID |
| `PATCH` | `/api/projects/:id` | Update a project |
| `DELETE` | `/api/projects/:id` | Delete a project |

### Members

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/members` | List all team members |
| `POST` | `/api/members` | Create a team member |
| `GET` | `/api/members/:id` | Get a single member |
| `PATCH` | `/api/members/:id` | Update a member |
| `DELETE` | `/api/members/:id` | Delete a member |

### Stats

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/stats/summary` | Returns `{ totalProjects, liveProjects, totalMembers }` |
| `GET` | `/api/stats/featured` | Returns featured projects sorted by `sortOrder` |

<details>
<summary><strong>Example: Create a Project</strong></summary>

```bash
curl -X POST https://your-api-url/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Awesome App",
    "description": "A short description of what it does.",
    "longDescription": "A longer detailed writeup for the case study page.",
    "tags": ["React", "Node.js", "PostgreSQL"],
    "status": "live",
    "featured": true,
    "sortOrder": 1,
    "externalUrl": "https://myapp.com",
    "githubUrl": "https://github.com/you/myapp",
    "imageUrl": "https://your-image-cdn.com/screenshot.png",
    "memberIds": [1, 2]
  }'
```

</details>

<details>
<summary><strong>Example: Create a Team Member</strong></summary>

```bash
curl -X POST https://your-api-url/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Your Name",
    "role": "Full-Stack Developer",
    "bio": "A short bio about yourself.",
    "avatarUrl": "https://github.com/yourusername.png",
    "githubUrl": "https://github.com/yourusername",
    "linkedinUrl": "https://linkedin.com/in/yourprofile",
    "websiteUrl": "https://yoursite.com"
  }'
```

</details>

---

## Database Schema

```sql
-- Team members
members (
  id           SERIAL PRIMARY KEY,
  name         TEXT NOT NULL,
  role         TEXT NOT NULL,
  bio          TEXT,
  avatar_url   TEXT,
  github_url   TEXT,
  linkedin_url TEXT,
  website_url  TEXT,
  created_at   TIMESTAMP DEFAULT NOW()
)

-- Projects
projects (
  id               SERIAL PRIMARY KEY,
  title            TEXT NOT NULL,
  description      TEXT NOT NULL,
  long_description TEXT,
  image_url        TEXT,
  tags             TEXT[],
  status           TEXT DEFAULT 'in_progress',  -- live | in_progress | archived
  featured         BOOLEAN DEFAULT FALSE,
  sort_order       INTEGER DEFAULT 0,
  external_url     TEXT,
  github_url       TEXT,
  created_at       TIMESTAMP DEFAULT NOW()
)

-- Project ↔ Member relationship
project_members (
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  member_id  INTEGER REFERENCES members(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, member_id)
)
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- [pnpm](https://pnpm.io) v8+
- [PostgreSQL](https://postgresql.org) v14+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Davood121/my-ai-web.git
cd my-ai-web

# 2. Install all workspace dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env
# Add your DATABASE_URL to .env

# 4. Push the database schema
pnpm --filter @workspace/db run push

# 5. (Optional) Regenerate API types from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# 6. Start both servers
pnpm --filter @workspace/api-server run dev   # API → http://localhost:3001
pnpm --filter @workspace/portfolio run dev    # Web → http://localhost:5173
```

### Environment Variables

| Variable | Description | Example |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost/showpath` |
| `PORT` | API server port (optional) | `3001` |

---

## Adding Your Projects

The fastest way to populate your showcase is via the REST API:

```bash
# Step 1: Add yourself as a team member
curl -X POST http://localhost:3001/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Davood",
    "role": "Full-Stack Developer",
    "bio": "Building things that matter.",
    "githubUrl": "https://github.com/Davood121"
  }'
# Returns: { "id": 1, ... }

# Step 2: Add your first project (use the member ID from Step 1)
curl -X POST http://localhost:3001/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "One sentence about what it does.",
    "tags": ["React", "AI", "TypeScript"],
    "status": "live",
    "featured": true,
    "sortOrder": 1,
    "githubUrl": "https://github.com/Davood121/my-project",
    "memberIds": [1]
  }'
```

> Tip: Set `"featured": true` to show a project in the Home page grid. Adjust `"sortOrder"` to control the order on the Journey page.

---

## Contributing

This is an open student project — contributions, forks, and feedback are welcome.

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes and commit: `git commit -m 'feat: add something awesome'`
4. Push to your fork: `git push origin feat/your-feature`
5. Open a Pull Request

---

## License

[MIT](LICENSE) — do whatever you want with it. Give credit if you build something cool.

---

<div align="center">

**Built with dedication by students, for the world.**

[🌐 Live Site](https://github.com/Davood121/my-ai-web) · [📁 Source Code](https://github.com/Davood121/my-ai-web) · [🐛 Issues](https://github.com/Davood121/my-ai-web/issues)

</div>
