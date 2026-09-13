export type Project = {
  id: string;
  name: string;
  description: string;
  url: string;
  githubUrl?: string;
  downloadUrl?: string;
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
  {
    id: "tung-tung-sahere-totem",
    name: "Tung Tung Sahere Totem",
    description:
      "Replaces the Totem of Undying with Tung Tung Sahere and plays his custom sound whenever it saves you from death. Minecraft Java 1.21.11 resource pack.",
    url: "https://modrinth.com/resourcepack/tung-tung-sahere-totem",
    tags: ["Minecraft", "Resource Pack", "Meme"],
    featured: true,
    addedAt: "2026-08-13",
  },
  {
    id: "funky-ehh-swords",
    name: "Funky Ehh Swords",
    description:
      "Makes all the swords Funky Ehh. Cursed 256x Minecraft resource pack.",
    url: "https://modrinth.com/resourcepack/funky-ehh-swords",
    tags: ["Minecraft", "Resource Pack", "Cursed"],
    featured: false,
    addedAt: "2026-08-10",
  },
  {
    id: "wizox-ban-this-guy",
    name: "Wizox Ban This Guy",
    description:
      "Minecraft resource pack that replaces in-game music with the Wizox Ban This Guy track. Pack format 75.",
    url: "https://modrinth.com/user/TTFabianstenq",
    downloadUrl: "/WizoxBanThisGuy.zip",
    tags: ["Minecraft", "Resource Pack", "Music"],
    featured: false,
    addedAt: "2026-09-12",
  },
  {
    id: "tiki-tiki-phonk",
    name: "Tiki Tiki Phonk",
    description:
      "Minecraft resource pack that replaces in-game music with a Tiki Tiki Phonk loop. Pack format 75.",
    url: "https://modrinth.com/user/TTFabianstenq",
    downloadUrl: "/TikiTikiPhonk.zip",
    tags: ["Minecraft", "Resource Pack", "Music"],
    featured: false,
    addedAt: "2026-09-11",
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
