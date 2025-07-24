# Homepage Plan (College Edition 🧑‍💻)

## 🚀 System Architecture Overview

### 🎨 Frontend Setup
- **Framework**: React 18 + TypeScript (because why not!)
- **Styling**: Tailwind CSS + custom CSS variables for themes
- **UI Library**: shadcn/ui (built on top of Radix UI — accessibility FTW!)
- **State Management**: TanStack Query (React Query, basically)
- **Routing**: Wouter — minimal and fast
- **Build Tool**: Vite for that lightning-speed dev experience ⚡

### 🛠️ Backend Setup (coming soon...)
- **Framework**: Express.js + TypeScript
- **Database**: PostgreSQL using Drizzle ORM (type-safe is life)
- **DB Hosting**: Neon Database (serverless & chill)
- **Sessions**: Stored in PostgreSQL via `connect-pg-simple`
- **Dev Runtime**: Using `tsx` for smooth TypeScript execution

### 📁 Project Structure (monorepo style!)
- `client/` — frontend React app
- `server/` — backend Express app (WIP)
- `shared/` — shared types & schemas (Zod ❤️)
- `migrations/` — DB migration stuff

## 🧩 Key Components

### 💻 Frontend Pages
- **Navigation**: Sticky header w/ smooth scroll
- **Hero**: Eye-catching landing section
- **About**: Short bio + fun stats
- **Skills**: Categorized icons for tech stack
- **Portfolio**: Filterable project gallery
- **Contact**: Validated form + toast feedback
- **Footer**: Socials & site links

### 🧱 UI System
- Full shadcn/ui setup
- Uses Radix UI primitives for accessibility
- CSS custom properties for theme consistency
- Dark mode/light mode — automatic!

### 🧠 Backend System (TBD)
- Modular route registration
- Abstracted storage (currently in-memory)
- Error-handling middleware
- Request/response logging for debugging

## 🔄 Data Flow

### ✅ Frontend State (implemented)
- TanStack Query for all API stuff
- Custom hooks for fetching
- Toasts to show what’s happening
- Forms handled via React Hook Form

### 🗃️ DB Schema (coming)
- User table (username + password-based auth)
- Drizzle ORM for all DB ops
- PostgreSQL used as main DB
- Schema validation w/ Zod

### 🌐 API Design (coming)
- REST-style endpoints under `/api`
- JSON input/output only
- Proper HTTP error codes
- CORS + session handling ready

## 📦 External Dependencies

### ✨ Frontend
- **Styling/UI**: Tailwind, Radix UI, Lucide Icons
- **State/Form**: TanStack Query, React Hook Form
- **Utils**: date-fns, clsx, class-variance-authority
- **Dev**: Vite, TypeScript, PostCSS

### 🧪 Backend (TBD)
- **Core**: Express, TypeScript (`tsx`)
- **DB**: Drizzle ORM, Neon DB, PostgreSQL session store
- **Validation**: Zod
- **Build**: esbuild (super fast)

---

---

## 🧪 Local Dev: Quickstart Guide

Want to check things out locally? Super easy.

```bash
# 1. Clone the repo (if you haven’t already)
git clone https://github.com/your-username/your-project.git
cd your-project

# 2. Install dependencies
npm install

# 3. Start the frontend dev server
npm run dev:client
```


## 🔜 Coming Soon!!

> Backend magic and full-stack glory — stay tuned! 🎉
