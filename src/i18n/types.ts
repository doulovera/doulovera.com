export type Locale = "en" | "es";

export type SocialLinks = {
  resume: string;
  github: string;
  linkedin: string;
};

export type NavLabels = {
  main: string;
  experience: string;
  projects: string;
  moreProjects: string;
  about: string;
};

export type CtaLabels = {
  resume: string;
  github: string;
  linkedin: string;
  preview: string;
};

export type MainContent = {
  eyebrow: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  time: string;
  description: string;
};

export type FeaturedProject = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  github?: string;
  preview?: string;
};

export type CompactProject = {
  title: string;
  technologies: string[];
  github?: string;
  preview?: string;
};

export type AboutContent = {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export type Translations = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  nav: NavLabels;
  cta: CtaLabels;
  links: SocialLinks;
  sectionTitles: {
    experience: string;
    projects: string;
    moreProjects: string;
    about: string;
  };
  main: MainContent;
  experience: ExperienceItem[];
  featuredProjects: FeaturedProject[];
  moreProjects: CompactProject[];
  about: AboutContent;
  footerNote: string;
};
