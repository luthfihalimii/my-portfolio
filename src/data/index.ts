import { profile } from "./profile";
import { work } from "./work";
import { education } from "./education";
import { skills } from "./skills";
import { projects } from "./projects";
import { contact } from "./contact";
import { sections, navbar, sectionNavigation } from "./navigation";

export { profile, work, education, skills, projects, contact, sections, navbar, sectionNavigation };

export const DATA = {
  ...profile,
  sections,
  skills,
  navbar,
  sectionNavigation,
  contact,
  work,
  education,
  projects,
} as const;
