# ProjectSangar

# Setup Project

## Prerequisites

- Node.js 20+
- PostgreSQL
- npm

## Installation

Install dependencies:

```bash
npm install
```

## Create Database

Masuk terminal postgre dulu dgn mengetik:
psql

Lalu Create PostgreSQL database:

```sql
CREATE DATABASE furnito;
```

## Environment Variables

Create `.env` file in project root:
cp .env.example .env

```env
DATABASE_URL="postgresql://postgres:password@127.0.0.1:5432/furnito"
```

Adjust:

- username
- password
- database name

according to your local PostgreSQL configuration.

## Generate Prisma Client

```bash
npx prisma generate
```

## Create Database Tables

```bash
npx prisma db push
```

This command synchronizes the database schema with `prisma/schema.prisma`.

## Run Application

```bash
npm run dev
```

Application will run at:

```txt
http://localhost:3000
```

## Verify Database Connection

Open:

```txt
http://localhost:3000/api/stores
```

If configuration is correct, API should return a JSON response.
