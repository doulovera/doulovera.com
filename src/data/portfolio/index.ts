export { about } from "./about";
export { experience } from "./experience";
export { footer } from "./footer";
export { hero } from "./hero";
export { meta } from "./meta";
export { navigation } from "./navigation";
export { featuredProjects, moreProjects } from "./projects";
export { redirects } from "./redirects";
export type {
  AboutSectionData,
  ActionLink,
  CompactProjectEntry,
  ExperienceEntry,
  ExperienceSectionData,
  FeaturedProjectsSectionData,
  FooterData,
  HeroData,
  MoreProjectsSectionData,
  NavItem,
  PortfolioMeta,
  ProjectEntry,
  RedirectLink
} from "./types";

import { about } from "./about";
import { experience } from "./experience";
import { footer } from "./footer";
import { hero } from "./hero";
import { meta } from "./meta";
import { navigation } from "./navigation";
import { featuredProjects, moreProjects } from "./projects";
import { redirects } from "./redirects";

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
