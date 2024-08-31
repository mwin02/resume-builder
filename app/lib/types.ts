export interface Resume {
  personalInfo: PersonalDetails;
  contactDetails: ContactDetails;
  experience: ExperienceSection[];
  education: EducationSection[];
  customSections: CustomSection[];
  allSections: Section[];
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
  email: string | null;
  phone: string | null;
  website: string | null;
}

export const EmptyContactDetails: ContactDetails = {
  email: null,
  phone: null,
  website: null,
};

export interface Section {
  id: number;
  display: boolean;
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

export interface HTMLToPDFObject {
  filename: string;
  htmlContent: string;
  cssContent: any;
}

export function isHTMLToPDFObject(obj: any): obj is HTMLToPDFObject {
  return (
    typeof obj.filename === "string" &&
    typeof obj.htmlContent === "string" &&
    obj.hasOwnProperty("cssContent")
  );
}
