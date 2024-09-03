export interface Resume {
  personalInfo: PersonalDetails;
  contactDetails: ContactDetails;
  sections: Section[];
}

export interface PersonalDetails {
  name: string;
  location: string;
  bio: string;
}

export const EmptyPersonalDetails: PersonalDetails = {
  name: "",
  location: "",
  bio: "",
};

export interface ContactDetails {
  email: string;
  phone: string;
  website: string;
}

export const EmptyContactDetails: ContactDetails = {
  email: "",
  phone: "",
  website: "",
};

export enum SectionType {
  Education = "EDUCATION",
  Experience = "EXPERIENCE",
  Custom = "CUSTOM",
}

export interface Section {
  id: number;
  display: boolean;
  type: SectionType;
}

export interface EducationSection extends Section {
  schoolTitle: string;
  completed: boolean;
  startDate: string;
  endDate: string | null;
  major: string;
  degree: string;
  gpa: number;
}

export interface ExperienceSection extends Section {
  jobTitle: string;
  company: string;
  jobDuty: string[];
  startDate: Date;
  endDate: Date;
  location: string;
}

export interface CustomSection extends Section {
  title: string;
  subsection: CustomSection | string | null;
}
