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
      const updatedAllSections = [...resume.allSections, newExperience];
      const updatedExperience = [...resume.experience, newExperience];
      return {
        ...resume,
        allSections: updatedAllSections,
        experience: updatedExperience,
      };
    }
    case ResumeActionKind.AddEducation: {
      const newEducation = { ...payload };
      const updatedAllSections = [...resume.allSections, newEducation];
      const udatedEducation = [...resume.experience, newEducation];
      return {
        ...resume,
        allSections: updatedAllSections,
        education: udatedEducation,
      };
    }
    case ResumeActionKind.Toggle: {
      const updatedResume = { ...resume };
      const section = updatedResume.allSections.find(
        (section) => section.id === payload
      );
      if (section) {
        section.display = !section.display;
      }
      console.log(updatedResume.experience[0].display);

      return { ...updatedResume };
    }
  }
  return resume;
};
