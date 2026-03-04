import type { PortfolioMeta } from "./types";
import type { SupportedLocale } from "./texts";
import { portfolioTexts } from "./texts";

export function getMeta(locale: SupportedLocale): PortfolioMeta {
  return { ...portfolioTexts[locale].meta };
}

export const meta: PortfolioMeta = getMeta("en");
