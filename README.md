# Game Tracker

A full-stack game tracking application built with NestJS, MikroORM, PostgreSQL and React.

## Tech Stack

### Backend

- NestJS 11
- MikroORM 7
- PostgreSQL
- Docker

### Frontend

- React
- TypeScript

## Project structure

```text
game-tracker-app/
├── backend/
├── frontend/
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Node.js 24+
- Docker
- Docker Compose

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd game-tracker-app
```

Install dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

## Environment variables

Create a `.env` file inside `backend/` from `.env.example`.

## Start PostgreSQL

```bash
docker compose up -d
```

## Run the backend

```bash
cd backend
npm run start:dev
```

## Database migrations

Create a migration:

```bash
npm run migration:create
```

Apply migrations:

```bash
npm run migration:up
```

Rollback the last migration:

```bash
npm run migration:down
```

## License

MIT