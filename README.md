# Furnito

A furniture marketplace web application built with Next.js, Drizzle ORM, and PostgreSQL.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (radix-nova)
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL running locally

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
DATABASE_URL="postgresql://postgres:<password>@localhost:5432/furnito"
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
furnito/
├── app/
│   ├── (public)/          # Public pages (home, login, about)
│   └── (auth)/            # Authenticated pages
│       ├── admin/         # Admin dashboard
│       ├── seller/        # Seller dashboard
│       └── user/          # User dashboard
├── components/
│   ├── app-sidebar.tsx    # Role-aware sidebar
│   └── ui/                # shadcn components
├── config/
│   └── navigation.ts     # Role-based navigation config
├── db/
│   ├── index.ts          # Drizzle client instance
│   ├── schema.ts         # Database schema definitions
│   └── migrations/       # SQL migrations
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Database

### Schema

7 tables: **Users**, **Stores**, **Products**, **Categories**, **Review**, **RefreshTokens**, **PasswordReset**

Enums: `user_role` (admin/seller/user), `status_product` (Active/Draft/Inactive), `rating_int` (1-5)

### Database Commands

```bash
# Push schema changes to database
npm run db:push

# Pull schema from existing database
npm run db:pull

# Open Drizzle Studio (visual DB browser)
npm run db:studio
```

### Connecting to the Database

The database connection is configured in `db/index.ts`:

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });
```

### Using Drizzle in Your Code

Import the `db` instance from `@/db` to query the database:

```ts
import { db } from "@/db";
import { users, products } from "@/db/schema";
import { eq } from "drizzle-orm";

// SELECT - find all users
const allUsers = await db.select().from(users);

// SELECT with WHERE
const user = await db.select().from(users).where(eq(users.id, "some-uuid"));

// INSERT
await db.insert(users).values({
  email: "john@example.com",
  password: "hashed-password",
  passwordHash: "bcrypt-hash",
  role: "user",
  createdAt: new Date().toISOString(),
  updatedAt: "12:00:00+07",
  telephoneNumber: "+628123456789",
});

// UPDATE
await db.update(users)
  .set({ isActive: false })
  .where(eq(users.id, "some-uuid"));

// DELETE
await db.delete(users).where(eq(users.id, "some-uuid"));

// JOIN - get products with store info
const productsWithStore = await db
  .select()
  .from(products)
  .innerJoin(stores, eq(products.storesId, stores.id));
```

### Drizzle Config

`drizzle.config.ts` at the project root:

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

## Database Schema Reference

### Users

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Auto-generated |
| email | varchar(50) | User email |
| password | varchar(50) | Password |
| passwordHash | text | Hashed password |
| role | user_role | admin / seller / user |
| createdAt | timestamptz | Account creation date |
| updatedAt | timetz | Last update time |
| isActive | boolean | Account status |
| telephoneNumber | varchar(15) | Phone number |

### Stores

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Auto-generated |
| userId | uuid (FK) | Owner (Users) |
| storesName | varchar | Store name |
| storesAddress | text | Store address |
| isVerified | boolean | Verification status |
| storesDescription | varchar | Store description |
| storesInstagram | varchar | Instagram handle |
| storesNumber | varchar(15) | Contact number |
| openingHour | time | Opening hour |
| closingHour | time | Closing hour |

### Products

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Auto-generated |
| storesId | uuid (FK) | Store (Stores) |
| name | varchar | Product name |
| description | text | Product description |
| prices | numeric | Product price |
| materials | varchar | Material type |
| color | varchar | Product color |
| weight | integer | Weight in grams |
| dimension | integer | Dimension in cm |
| status | status_product | Active / Draft / Inactive |
| viewCount | integer | View counter |
| categoriesId | uuid (FK) | Category (Categories) |
| guarantee | varchar | Guarantee info |
| sku | varchar(15) | SKU code |

### Categories

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Auto-generated |
| name | varchar | Category name |

### Review

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Auto-generated |
| productsId | uuid (FK) | Product (Products) |
| usersId | uuid (FK) | Reviewer (Users) |
| rating | rating_int | 1 to 5 |

### RefreshTokens

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Auto-generated |
| token | text | Refresh token |
| usersId | uuid (FK) | User (Users) |
| expiresAt | timestamptz(3) | Expiration time |

### PasswordReset

| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Auto-generated |
| usersId | uuid (FK) | User (Users) |
| token | text | Reset token |
| expiresAt | timestamptz(3) | Expiration time |
| usedAt | timestamptz(3) | When token was used |

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run db:pull` | Pull schema from database |

## License

Private
