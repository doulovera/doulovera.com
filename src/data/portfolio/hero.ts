import type { HeroData } from "./types";
import { profileAssets, profileIdentity, profileLinks } from "./shared";
import type { SupportedLocale } from "./texts";
import { portfolioTexts } from "./texts";

export function getHero(locale: SupportedLocale): HeroData {
  const texts = portfolioTexts[locale].hero;

  return {
    name: profileIdentity.name,
    title: texts.title,
    description: texts.description,
    portrait: profileAssets.heroPortrait,
    actions: [
      { label: texts.actions.resume, href: profileLinks.resume },
      { label: texts.actions.github, href: profileLinks.github },
      { label: texts.actions.linkedin, href: profileLinks.linkedin }
    ]
  };
}

export const hero: HeroData = getHero("en");
