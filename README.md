# Project Hub

A sleek, modern directory for all projects — the central launchpad to discover and visit everything being built.

**Not a portfolio.** This is a product-style project directory.

## Live

- GitHub: https://github.com/fabianstenka5-boop/project-hub

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new project

Edit `src/data/projects.ts` and append an object to the `projects` array:

```ts
{
  id: "my-new-project",          // unique slug
  name: "My New Project",
  description: "Short, clear description of what it does.",
  url: "https://your-live-url.com",
  githubUrl: "https://github.com/you/repo", // optional
  tags: ["Category", "Another"],
  featured: true,                // optional — shows “Featured” badge
  addedAt: "2026-09-13",         // ISO date for sorting
}
```

Save. The project appears automatically on the homepage (search + filters included).

## Features

- Dark, premium UI with subtle glow and hover effects
- Search + tag filtering
- Featured projects prioritized
- Responsive layout
- Accessible buttons and focus states
- SEO metadata

## Current projects

- [BotDeck](https://fabianbotdeck.vercel.app/) – Discord bot dashboard
- [Six Farts On Teddy](https://sixfartsonteddy.vercel.app/) – Night-shift survival game
