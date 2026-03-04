import { getAbout } from "./about";
import { getExperience } from "./experience";
import { getFooter } from "./footer";
import { getHero } from "./hero";
import { getMeta } from "./meta";
import { getNavigation } from "./navigation";
import { getProjects } from "./projects";
import { redirects } from "./redirects";
import type { PortfolioData } from "./types";

const projects = getProjects("es");

export const portfolioDataEs: PortfolioData = {
  meta: getMeta("es"),
  navigation: getNavigation("es"),
  hero: getHero("es"),
  experience: getExperience("es"),
  featuredProjects: projects.featuredProjects,
  moreProjects: projects.moreProjects,
  about: getAbout("es"),
  footer: getFooter("es"),
  redirects
};
