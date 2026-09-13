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
    id: "botdeck",
    name: "BotDeck",
    description:
      "A clean Discord bot dashboard. Manage servers, view chat, members, and presence with privileged intents support.",
    url: "https://fabianbotdeck.vercel.app/",
    githubUrl: "https://github.com/TTFabianstenq/discord-dashboard",
    tags: ["Discord", "Dashboard", "Tool"],
    featured: true,
    addedAt: "2026-09-01",
  },
  {
    id: "six-farts-on-teddy",
    name: "Six Farts On Teddy",
    description:
      "A tense night-shift survival experience at Teddy's Toyworks. Manage doors, lights, cameras, and power until 6 AM.",
    url: "https://sixfartsonteddy.vercel.app/",
    tags: ["Game", "Horror", "Interactive"],
    featured: true,
    addedAt: "2026-08-20",
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
