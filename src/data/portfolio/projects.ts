import type { FeaturedProjectsSectionData, MoreProjectsSectionData } from "./types";

export const featuredProjects: FeaturedProjectsSectionData = {
  title: "Projects",
  intro:
    "",
  items: [
    {
      title: "schema.notion",
      description:
        "Create and design your Notion DBs visually and export them to your Notion workspace with a single click. Relations, properties, rollups, all with a beautiful and intuitive interface and AI assistance.",
      technologies: ["Nextjs", "TypeScript", "Drizzle", "Notion API", "AI"],
      image: "https://res.cloudinary.com/dyonw3lkf/image/upload/v1772428282/portfolio_images/schema-notion_roybor.png",
      // githubUrl: "#",
      previewUrl: "https://schema.doulovera.com/"
    },
    {
      title: "QeepeR",
      description:
        "Quickly generate static or dynamic QR codes, personalize their design, and update their destinations at any time.",
      technologies: ["Next.js", "Tailwind", "TypeScript", "Cloudflare Workers KV"],
      image: "https://res.cloudinary.com/dyonw3lkf/image/upload/v1743266796/portfolio_images/tkqtj6jyfg14ncqgewl9.png",
      githubUrl: "https://github.com/doulovera/qeeper",
      previewUrl: "https://qeeper.doulovera.com/",
    }
  ]
};

export const moreProjects: MoreProjectsSectionData = {
  title: "More Projects",
  intro:
    "",
  items: [
    {
      title: "utilities",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/doulovera/utilities",
      previewUrl: "https://utilities.doulovera.com/",
    },
    {
      title: "schema.ai",
      technologies: ["Next.js", "TypeScript", "Tailwind", "AI"],
      githubUrl: "https://github.com/synapse-xyz/schema.ai",
      previewUrl: "https://schema-ai-wine.vercel.app/",
    },
    {
      title: "Bookmarker w/ Notion",
      technologies: ["Notion API", "JavaScript", "Browser"],
      githubUrl: "https://github.com/synapse-xyz/bookmarker-extension",
    },
  ]
};
