import { profileLinks } from "./shared";
import type { RedirectLink } from "./types";

export const redirects: RedirectLink[] = [
  // { slug: "doulovera", to: "https://me.doulovera.com" },
  { slug: "instagram", to: profileLinks.instagram },
  { slug: "github", to: profileLinks.github },
  {
    slug: "resume",
    to: "https://drive.google.com/file/d/1iiSZcfrbAfsxVZQRz7VAvkya2BZGpA1q/view"
  },
  { slug: "linkedin", to: profileLinks.linkedin }
];
