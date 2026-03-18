export { about } from "./about";
export { portfolioDataEs } from "./es";
export { experience } from "./experience";
export { footer } from "./footer";
export { hero } from "./hero";
export { getMePageData, mePageData } from "./me";
export { meta } from "./meta";
export { navigation } from "./navigation";
export { featuredProjects, moreProjects } from "./projects";
export { redirects } from "./redirects";
export type { SupportedLocale } from "./texts";
export type {
  AboutSectionData,
  ActionLink,
  CompactProjectEntry,
  ExperienceEntry,
  ExperienceSectionData,
  FeaturedProjectsSectionData,
  FooterData,
  HeroData,
  MeLinkCard,
  MePageData,
  MoreProjectsSectionData,
  NavItem,
  PortfolioData,
  PortfolioMeta,
  ProjectEntry,
  RedirectLink
} from "./types";

import { about } from "./about";
import { portfolioDataEs } from "./es";
import { experience } from "./experience";
import { footer } from "./footer";
import { hero } from "./hero";
import { meta } from "./meta";
import { navigation } from "./navigation";
import { featuredProjects, moreProjects } from "./projects";
import { redirects } from "./redirects";
import type { SupportedLocale } from "./texts";
import type { PortfolioData } from "./types";

export const portfolioData = {
  meta,
  navigation,
  hero,
  experience,
  featuredProjects,
  moreProjects,
  about,
  footer,
  redirects
} as const;

export function getPortfolioData(locale: SupportedLocale = "en"): PortfolioData {
  if (locale === "es") {
    return portfolioDataEs;
  }

  return portfolioData;
}
