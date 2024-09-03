import { Resume } from "@/app/lib/types/resume";
import { ResumeAction, ResumeActionKind } from "./types/util";

export const reducer = (
  resume: Resume | undefined,
  action: ResumeAction
): Resume | undefined => {
  const { type, payload } = action;
  if (!resume) {
    if (type === ResumeActionKind.InitialSet) {
      return { ...payload };
    }
    throw new Error(
      "Unexpected Dispatch Function Call : Dispatch Function was called before resume's initial state is set"
    );
  }
  switch (type) {
    case ResumeActionKind.SetInfo: {
      return resumeSetInfo(resume, payload);
    }
    case ResumeActionKind.SetContact: {
      return resumeSetContact(resume, payload);
    }
    case ResumeActionKind.AddExperience: {
      return resumeAddExperience(payload, resume);
    }
    case ResumeActionKind.AddEducation: {
      return resumeAddEducation(payload, resume);
    }
    case ResumeActionKind.Toggle: {
      return resumeToggle(payload, resume);
    }
  }
  return resume;
};

function resumeToggle(payload: any, resume: Resume) {
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

function resumeAddEducation(payload: any, resume: Resume) {
  const newEducation = { ...payload };
  const updatedSections = [...resume.sections, newEducation];
  // TODO:: Generate unique id for new education
  return {
    ...resume,
    sections: updatedSections,
  };
}

function resumeAddExperience(payload: any, resume: Resume) {
  const newExperience = { ...payload };
  const updatedSections = [...resume.sections, newExperience];
  // TODO:: Generate unique id for new education
  return {
    ...resume,
    sections: updatedSections,
  };
}

function resumeSetContact(resume: Resume, payload: any) {
  const newContactDetails = { ...resume.contactDetails, ...payload };
  return { ...resume, contactDetails: newContactDetails };
}

function resumeSetInfo(resume: Resume, payload: any) {
  const newPersonalInfo = { ...resume.personalInfo, ...payload };
  return { ...resume, personalInfo: newPersonalInfo };
}
