import type { AboutSectionData } from "./types";
import { profileAssets } from "./shared";
import type { SupportedLocale } from "./texts";
import { portfolioTexts } from "./texts";

export function getAbout(locale: SupportedLocale): AboutSectionData {
  const texts = portfolioTexts[locale].about;

  return {
    title: texts.title,
    description: texts.description,
    portrait: profileAssets.aboutPortrait
  };
}

export const about: AboutSectionData = getAbout("en");
