import {
  ContactDetails,
  ExperienceSection,
  PersonalDetails,
  Resume,
} from "@/app/lib/types";
import { Dispatch, SetStateAction } from "react";

export const convertResumeToJSX = (resume: Resume) => {
  const { personalInfo, contactDetails, experience } = resume;
  const experiences = experience.map((exp) => {
    return (
      <div key={exp.id}>
        <p>{exp.jobTitle}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>{personalInfo?.name || "Placeholder"}</h2>
      <p>
        <span>{`${personalInfo?.location}   |`}</span>
        <span>{`${contactDetails?.email}   |`}</span>
        <span>{`${contactDetails?.phone}   |`}</span>
        <span>{`${contactDetails?.website}   |`}</span>
      </p>
      <p>{personalInfo?.bio}</p>
      {experiences}
    </div>
  );
};

const createObjectCopy = (obj: any) => {
  return { ...obj };
};

export const setResumePersonalInfo = (
  newInfo: PersonalDetails,
  setResume: Dispatch<SetStateAction<Resume>>
) => {
  setResume((resume) => {
    resume.personalInfo = { ...resume.personalInfo, ...newInfo };
    return createObjectCopy(resume);
  });
};

export const setResumeContactDetails = (
  newInfo: ContactDetails,
  setResume: Dispatch<SetStateAction<Resume>>
) => {
  setResume((resume) => {
    resume.contactDetails = { ...resume.contactDetails, ...newInfo };
    return createObjectCopy(resume);
  });
};

export const addResumeExperience = (
  newInfo: ExperienceSection,
  setResume: Dispatch<SetStateAction<Resume>>
) => {
  setResume((resume) => {
    const newExperience = { ...newInfo };
    resume.allSections.push(newExperience);
    resume.experience.push(newExperience);
    return createObjectCopy(resume);
  });
};

export const toggleDisplay = (
  sectionId: number,
  setResume: Dispatch<SetStateAction<Resume>>
) => {
  setResume((resume) => {
    console.log(`toggling section ${sectionId}`);
    const section = resume.allSections.find(
      (section) => section.id === sectionId
    );
    if (section) {
      section.display = !section.display;
      console.log("succeeded");
    }
    return createObjectCopy(resume);
  });
};
