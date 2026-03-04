import { getHero } from "./hero";
import type { SupportedLocale } from "./texts";
import { portfolioTexts } from "./texts";
import type { FooterData } from "./types";

export function getFooter(locale: SupportedLocale): FooterData {
  const texts = portfolioTexts[locale].footer;

  return {
    heading: texts.heading,
    note: texts.note,
    actions: getHero(locale).actions
  };
}

export const footer: FooterData = getFooter("en");
