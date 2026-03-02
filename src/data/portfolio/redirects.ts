import { hero } from "./hero";
import type { RedirectLink } from "./types";

function getHeroActionHref(label: string): string {
  const action = hero.actions.find((item) => item.label === label);

  if (!action) {
    throw new Error(`Missing hero action for "${label}" redirect.`);
  }

  return action.href;
}

export const redirects: RedirectLink[] = [
  // { slug: "doulovera", to: "https://me.doulovera.com" },
  { slug: "instagram", to: "https://instagram.com/doulovera" },
  { slug: "github", to: getHeroActionHref("GitHub") },
  {
    slug: "resume",
    to: "https://drive.google.com/file/d/1iiSZcfrbAfsxVZQRz7VAvkya2BZGpA1q/view"
  },
  { slug: "linkedin", to: getHeroActionHref("LinkedIn") },
];
