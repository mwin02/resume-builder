import { Resume } from "@/app/lib/types/resume";
import { ResumeAction, ResumeActionKind } from "./types/util";

const createObjectCopy = (obj: any) => {
  return { ...obj };
};

export const reducer = (resume: Resume, action: ResumeAction): Resume => {
  const { type, payload } = action;
  switch (type) {
    case ResumeActionKind.SetInfo: {
      const newPersonalInfp = { ...resume.personalInfo, ...payload };
      return { ...resume, personalInfo: newPersonalInfp };
    }
    case ResumeActionKind.SetContact: {
      const newContactDetails = { ...resume.contactDetails, ...payload };
      return { ...resume, contactDetails: newContactDetails };
    }
    case ResumeActionKind.AddExperience: {
      const newExperience = { ...payload };
      const updatedSections = [...resume.sections, newExperience];
      return {
        ...resume,
        sections: updatedSections,
      };
    }
    case ResumeActionKind.AddEducation: {
      const newEducation = { ...payload };
      const updatedSections = [...resume.sections, newEducation];
      return {
        ...resume,
        sections: updatedSections,
      };
    }
    case ResumeActionKind.Toggle: {
      const sectionIndex = resume.sections.findIndex(
        (section) => section.id === payload
      );
      if (sectionIndex === -1) {
        return resume;
      }
      const updatedSection = { ...resume.sections[sectionIndex] };
      updatedSection.display = !updatedSection.display;
      const updatedSections = [...resume.sections];
      updatedSections[sectionIndex] = updatedSection;
      return { ...resume, sections: updatedSections };
    }
  }
  return resume;
};
