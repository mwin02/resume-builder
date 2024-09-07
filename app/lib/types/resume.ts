import { SortableBaseItem } from "./util";

export interface Resume {
  personalInfo: PersonalDetails;
  contactDetails: ContactDetails;
  sections: Section[];
  lastSectionId: number;
  empty?: boolean;
}

export interface PersonalDetails {
  name: string;
  location: string;
  bio: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  website: string;
}

export enum SectionType {
  Education = "EDUCATION",
  Experience = "EXPERIENCE",
  Custom = "CUSTOM",
}

export interface Section extends SortableBaseItem {
  sectionId: number;
  display: boolean;
  type: SectionType;
}

export interface EducationSection extends Section {
  schoolTitle: string;
  completed: boolean;
  startDate: Date | null;
  endDate: Date | null;
  major: string;
  degree: string;
  gpa: string;
  achievements: string[];
}

export interface ExperienceSection extends Section {
  jobTitle: string;
  company: string;
  jobDuty: string[];
  startDate: Date | null;
  endDate: Date | null;
  location: string;
}

// TODO:: extend customSection to be a title + Mini Sections
export interface CustomSection extends Section {
  title: string;
  content: string[];
}
