# Searchable Knowledge Archive System

A knowledge ingestion, enrichment, indexing, and retrieval platform.

## Project Structure

- `apps/`
  - `web/`: Next.js frontend
  - `api/`: API services
  - `workers/`: Background workers
- `packages/`
  - `auth/`: Authentication logic and providers
  - `database/`: Database schema and client
  - `permissions/`: RBAC and access control
  - `security/`: Rate limiting and security utilities
  - `shared/`: Shared types and utilities
- `agents/`
  - `builder-agent/`: Autonomous build orchestration

## Getting Started

1. Copy `.env.example` to `.env`
2. Run `docker-compose up -d`
3. Install dependencies: `npm install`
4. Start development: `npm run dev`

## Builder Agent

The Builder Agent is responsible for reading `docs/plan.md` and generating the application modules.
To start the build process:
```bash
npm run build:autonomous
```
