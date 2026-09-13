export type Project = {
  id: string;
  name: string;
  description: string;
  url: string;
  githubUrl?: string;
  image?: string;
  tags: string[];
  featured?: boolean;
  addedAt: string; // ISO date
};

export const projects: Project[] = [
  {
    id: "aurora-notes",
    name: "Aurora Notes",
    description:
      "A fast, offline-first note-taking app with beautiful markdown support and local-first sync.",
    url: "https://example.com/aurora-notes",
    githubUrl: "https://github.com/fabianstenka5-boop/aurora-notes",
    tags: ["Productivity", "Web App"],
    featured: true,
    addedAt: "2026-08-12",
  },
  {
    id: "pixel-forge",
    name: "Pixel Forge",
    description:
      "Generate and edit pixel art with AI-assisted tools. Export ready-to-use sprites in seconds.",
    url: "https://example.com/pixel-forge",
    githubUrl: "https://github.com/fabianstenka5-boop/pixel-forge",
    tags: ["Creative", "AI", "Tool"],
    featured: true,
    addedAt: "2026-07-28",
  },
  {
    id: "orbit-tracker",
    name: "Orbit Tracker",
    description:
      "Lightweight habit and goal tracker with streak visualization and gentle daily reminders.",
    url: "https://example.com/orbit-tracker",
    tags: ["Productivity", "Mobile"],
    featured: false,
    addedAt: "2026-06-15",
  },
  {
    id: "echo-board",
    name: "Echo Board",
    description:
      "Real-time collaborative whiteboard for remote teams. Draw, sticky notes, and live cursors.",
    url: "https://example.com/echo-board",
    githubUrl: "https://github.com/fabianstenka5-boop/echo-board",
    tags: ["Collaboration", "Web App"],
    featured: true,
    addedAt: "2026-05-03",
  },
  {
    id: "nova-metrics",
    name: "Nova Metrics",
    description:
      "Privacy-friendly analytics dashboard for indie makers. Simple, fast, and cookie-free.",
    url: "https://example.com/nova-metrics",
    tags: ["Analytics", "SaaS"],
    featured: false,
    addedAt: "2026-04-20",
  },
  {
    id: "lumen-ui",
    name: "Lumen UI",
    description:
      "A minimal component library built for dark-mode-first products. Accessible and customizable.",
    url: "https://example.com/lumen-ui",
    githubUrl: "https://github.com/fabianstenka5-boop/lumen-ui",
    tags: ["Open Source", "Design System"],
    featured: false,
    addedAt: "2026-03-11",
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
