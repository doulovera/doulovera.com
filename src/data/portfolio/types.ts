export interface NavItem {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
}

export interface RedirectLink {
  slug: string;
  to: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  previewUrl?: string;
}

export interface CompactProjectEntry {
  title: string;
  technologies: string[];
  githubUrl?: string;
  previewUrl?: string;
}

export interface HeroData {
  name: string;
  title: string;
  description: string;
  portrait: string;
  badge?: string;
  actions: ActionLink[];
}

export interface ExperienceSectionData {
  title: string;
  intro: string;
  items: ExperienceEntry[];
}

export interface FeaturedProjectsSectionData {
  title: string;
  intro: string;
  items: ProjectEntry[];
}

export interface MoreProjectsSectionData {
  title: string;
  intro: string;
  items: CompactProjectEntry[];
}

export interface AboutSectionData {
  title: string;
  description: string;
  portrait: string;
}

export interface FooterData {
  heading: string;
  note: string;
  actions: ActionLink[];
}

export interface MeLinkCard {
  label: string;
  href: string;
  icon: "github" | "instagram" | "linkedin" | "notion" | "globe";
  external?: boolean;
}

export interface MePageData {
  title: string;
  subtitle: string;
  portrait: string;
  links: {
    github: MeLinkCard;
    instagram: MeLinkCard;
    linkedin: MeLinkCard;
    site: MeLinkCard;
  };
}

export interface PortfolioMeta {
  title: string;
  description: string;
}

export interface PortfolioData {
  meta: PortfolioMeta;
  navigation: NavItem[];
  hero: HeroData;
  experience: ExperienceSectionData;
  featuredProjects: FeaturedProjectsSectionData;
  moreProjects: MoreProjectsSectionData;
  about: AboutSectionData;
  footer: FooterData;
  redirects: RedirectLink[];
}
