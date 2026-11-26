export type Chips = { role: string; period: string; tools: string[] };
export type Stat = { value: string; label: string };
export type Img = { src: string; alt: string; width: number; height: number; caption?: string };
export type Accent = "blue" | "yellow" | "orange" | "green";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  story: string;
  chips: Chips;
  stats: Stat[];
  footerLeft: string;
  footerRight: string;
  accent: Accent;
  cover: Img;
  gallery: Img[];
  featured: boolean;
  order: number;
};

export type ExperienceItem = { period: string; role: string; org: string; group: "Work" | "Organization" };
export type Service = { number: string; title: string; body: string };
