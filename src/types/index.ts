export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  navLinks: NavLink[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    scholar?: string;
    email: string;
  };
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingTime: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  timeline?: string;
  featured?: boolean;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  link?: string;
}

export interface Patent {
  title: string;
  inventors: string;
  patentNumber?: string;
  status: 'granted' | 'pending' | 'provisional';
  year: number;
  link?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  year?: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'career' | 'education' | 'personal' | 'achievement';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Book {
  title: string;
  image: string;
  rating: number;
  comment: string;
  year: number;
}
