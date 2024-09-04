import { SortableBaseItem } from "./util";

export interface Resume {
  personalInfo: PersonalDetails;
  contactDetails: ContactDetails;
  sections: Section[];
  lastSectionId: number;
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
  display: boolean;
  type: SectionType;
}

export interface EducationSection extends Section {
  schoolTitle: string;
  completed: boolean;
  startDate: string | null;
  endDate: Date | null;
  major: Date;
  degree: string;
  gpa: number;
}

export interface ExperienceSection extends Section {
  jobTitle: string;
  company: string;
  jobDuty: string;
  startDate: Date | null;
  endDate: Date | null;
  location: string;
}

export interface CustomSection extends Section {
  title: string;
  subsection: CustomSection | string | null;
}
