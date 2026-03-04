import type { FeaturedProjectsSectionData, MoreProjectsSectionData } from "./types";
import type { SupportedLocale } from "./texts";
import { portfolioTexts } from "./texts";

export function getProjects(locale: SupportedLocale): {
  featuredProjects: FeaturedProjectsSectionData;
  moreProjects: MoreProjectsSectionData;
} {
  const featuredTexts = portfolioTexts[locale].featuredProjects;
  const moreTexts = portfolioTexts[locale].moreProjects;

  return {
    featuredProjects: {
      title: featuredTexts.title,
      intro: featuredTexts.intro,
      items: [
        {
          title: featuredTexts.items.schemaNotion.title,
          description: featuredTexts.items.schemaNotion.description,
          technologies: ["Nextjs", "TypeScript", "Drizzle", "Notion API", "AI"],
          image: "https://res.cloudinary.com/dyonw3lkf/image/upload/v1772428282/portfolio_images/schema-notion_roybor.png",
          previewUrl: "https://schema.doulovera.com/"
        },
        {
          title: featuredTexts.items.qeeper.title,
          description: featuredTexts.items.qeeper.description,
          technologies: ["Next.js", "Tailwind", "TypeScript", "Cloudflare Workers KV"],
          image: "https://res.cloudinary.com/dyonw3lkf/image/upload/v1743266796/portfolio_images/tkqtj6jyfg14ncqgewl9.png",
          githubUrl: "https://github.com/doulovera/qeeper",
          previewUrl: "https://qeeper.doulovera.com/"
        }
      ]
    },
    moreProjects: {
      title: moreTexts.title,
      intro: moreTexts.intro,
      items: [
        {
          title: moreTexts.items.utilities,
          technologies: ["HTML", "CSS", "JavaScript"],
          githubUrl: "https://github.com/doulovera/utilities",
          previewUrl: "https://utilities.doulovera.com/"
        },
        {
          title: moreTexts.items.schemaAi,
          technologies: ["Next.js", "TypeScript", "Tailwind", "AI"],
          githubUrl: "https://github.com/synapse-xyz/schema.ai",
          previewUrl: "https://schema-ai-wine.vercel.app/"
        },
        {
          title: moreTexts.items.bookmarker,
          technologies: ["Notion API", "JavaScript", "Browser"],
          githubUrl: "https://github.com/synapse-xyz/bookmarker-extension"
        }
      ]
    }
  };
}

const projectsEn = getProjects("en");

export const featuredProjects: FeaturedProjectsSectionData = projectsEn.featuredProjects;
export const moreProjects: MoreProjectsSectionData = projectsEn.moreProjects;
