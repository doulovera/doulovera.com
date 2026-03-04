import type { NavItem } from "./types";
import type { SupportedLocale } from "./texts";
import { portfolioTexts } from "./texts";

const NAV_ITEMS = ["experience", "projects", "about"] as const;

export function getNavigation(locale: SupportedLocale): NavItem[] {
  const labels = portfolioTexts[locale].navigation;

  return NAV_ITEMS.map((item) => ({
    label: labels[item],
    href: `#${item}`
  }));
}

export const navigation: NavItem[] = getNavigation("en");
