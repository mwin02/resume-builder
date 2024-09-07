import {
  ResumeAction,
  ResumeActionKind,
  Resume,
  SectionType,
} from "@/app/lib/types";
import { getResumeSection } from "./util";

const emptyResume: Resume = {
  personalInfo: {
    name: "",
    location: "",
    bio: "",
  },
  contactDetails: {
    email: "",
    phone: "",
    website: "",
  },
  sections: [],
  lastSectionId: 1,
};

export const reducer = (
  resume: Resume | undefined,
  action: ResumeAction
): Resume | undefined => {
  const { type, payload } = action;
  if (!resume) {
    throw new Error(
      "Unexpected Dispatch Function Call : Dispatch Function was called before resume's initial state is set"
    );
  }
  switch (type) {
    case ResumeActionKind.InitialSet: {
      return intialiseResume(payload);
    }
    case ResumeActionKind.SetInfo: {
      return resumeSetInfo(resume, payload);
    }
    case ResumeActionKind.SetContact: {
      return resumeSetContact(resume, payload);
    }
    case ResumeActionKind.AddExperience: {
      return resumeAdd(payload, resume);
    }
    case ResumeActionKind.AddEducation: {
      return resumeAdd(payload, resume);
    }
    case ResumeActionKind.AddCustom: {
      return resumeAdd(payload, resume);
    }
    case ResumeActionKind.Toggle: {
      return resumeToggle(payload, resume);
    }
    case ResumeActionKind.SetExperience: {
      return setSection(payload, resume, SectionType.Experience);
    }
    case ResumeActionKind.SetEducation: {
      return setSection(payload, resume, SectionType.Education);
    }
    case ResumeActionKind.SetCustom: {
      return setSection(payload, resume, SectionType.Custom);
    }
    case ResumeActionKind.ClearInfo: {
      return {
        ...resume,
        contactDetails: emptyResume.contactDetails,
        personalInfo: emptyResume.personalInfo,
      };
    }
  }
  return resume;
};

function intialiseResume(payload: any) {
  const updatedSections = payload.sections.map((section: any) => {
    return {
      ...section,
      startDate: section.startDate ? new Date(section.startDate) : null,
      endDate: section.endDate ? new Date(section.endDate) : null,
    };
  });
  return { ...payload, sections: updatedSections, empty: false };
}

function setSection(payload: any, resume: Resume, type: SectionType) {
  const oldSections = [...resume.sections];
  const sectionIds = getResumeSection(resume, type).map(
    (section) => section.sectionId
  );
  const otherSections = oldSections.filter(
    (section) => !sectionIds.includes(section.sectionId)
  );
  const updatedSections = [...otherSections, ...payload];
  console.log(updatedSections);
  return { ...resume, sections: updatedSections };
}

function resumeToggle(payload: any, resume: Resume) {
  const sectionIndex = resume.sections.findIndex(
    (section) => section.sectionId === payload
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

function resumeAdd(payload: any, resume: Resume) {
  const newEducation = {
    ...payload,
    sectionId: resume.lastSectionId,
    id: resume.lastSectionId,
  };
  const updatedSections = [...resume.sections, newEducation];
  return {
    ...resume,
    sections: updatedSections,
    lastSectionId: resume.lastSectionId + 1,
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
