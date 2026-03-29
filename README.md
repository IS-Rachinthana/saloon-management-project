# Saloon Hair Warna

Premium landing page and salon management system starter for **Saloon Hair Warna**, built as a single full-stack Next.js application for fast phase-1 delivery.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Supabase Auth and Storage planned via environment variables

## What is included

- Responsive premium landing page for the salon brand
- Dashboard shell for salon operations modules
- Route structure for appointments, customers, staff, analytics, and settings
- Initial Prisma schema for users, roles, branches, services, customers, appointments, leave, notifications, payments, and audit logs

## Project structure

- `app/` for landing page and dashboard routes
- `components/marketing/` for the customer-facing brand experience
- `components/dashboard/` for management UI shells
- `lib/data.ts` for current seed-style UI content
- `prisma/schema.prisma` for the relational data model

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and update your database and Supabase values.

3. Generate Prisma client:

```bash
npm run prisma:generate
```

4. Run the development server:

```bash
npm run dev
```

## Suggested next implementation steps

1. Add Supabase Auth integration with role-aware session handling.
2. Seed the Prisma schema with branches, service categories, and roles.
3. Build the booking engine with availability checks and temporary appointment locks.
4. Add real dashboard widgets and charts backed by PostgreSQL queries.
5. Connect feedback, notifications, and payment workflows.
