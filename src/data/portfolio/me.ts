import { profileAssets, profileIdentity, profileLinks } from "./shared";
import { portfolioTexts } from "./texts";
import type { MePageData } from "./types";

export function getMePageData(): MePageData {
  return {
    title: profileIdentity.name,
    subtitle: portfolioTexts.en.hero.title,
    portrait: profileAssets.heroPortrait,
    links: {
      github: {
        label: "GitHub",
        href: profileLinks.github,
        icon: "github",
        external: true
      },
      instagram: {
        label: "Instagram",
        href: profileLinks.instagram,
        icon: "instagram",
        external: true
      },
      linkedin: {
        label: "LinkedIn",
        href: profileLinks.linkedin,
        icon: "linkedin",
        external: true
      },
      site: {
        label: "Website",
        href: profileLinks.site,
        icon: "globe"
      }
    }
  };
}

export const mePageData = getMePageData();
