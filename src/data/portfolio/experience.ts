import type { ExperienceSectionData } from "./types";
import type { SupportedLocale } from "./texts";
import { portfolioTexts } from "./texts";

export function getExperience(locale: SupportedLocale): ExperienceSectionData {
  const texts = portfolioTexts[locale].experience;

  return {
    title: texts.title,
    intro: texts.intro,
    items: [
      {
        company: "Rhinolabs",
        role: texts.items.rhinolabs.role,
        period: texts.items.rhinolabs.period,
        description: texts.items.rhinolabs.description
      },
      {
        company: "Notion Peru",
        role: texts.items.notion.role,
        period: texts.items.notion.period,
        description: texts.items.notion.description
      }
    ]
  };
}

export const experience: ExperienceSectionData = getExperience("en");
