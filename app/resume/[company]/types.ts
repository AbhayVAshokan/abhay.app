export interface Theme {
  primary: string;
  darkGray: string;
  gray: string;
  mediumGray: string;
  lightGray: string;
}

export interface Company {
  Id: string;
  title: string;
  profile_views: number;
}

export interface Profile {
  keywords: string;
  name: string;
  bio: string;
  avatarUrl: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  twitter: string;
  linkedin: string;
  location: string;
}

export interface Work {
  Id: string;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  startAt: Date;
  endAt: Date;
  description: string;
  summary: string;
}

export interface Education {
  Id: string;
  endAt?: Date;
  startAt: Date;
  title: string;
  cgpa: string;
  subtitle: string;
}

export interface Skill {
  skill: string;
  level: number;
}

export interface Project {
  Id: string;
  title: string;
  url: string;
  summary: string;
}

export interface Talk {
  title: string;
  subtitle: string;
  link: string;
  location: string;
  date: Date;
}

export interface Project {
  Id: string;
  title: string;
}

export interface Achievement {
  Id: string;
  title: string;
  year: number;
}

export interface OpensourceConribution {
  type: "contribution" | "volunteering";
  title: string;
}
