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
  note: string;
  actions: ActionLink[];
}

export interface PortfolioMeta {
  title: string;
  description: string;
}
