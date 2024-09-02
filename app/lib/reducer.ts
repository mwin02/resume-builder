"use client";

import { useReducer } from "react";
import {
  ContactDetails,
  ExperienceSection,
  PersonalDetails,
  Resume,
} from "@/app/lib/types/resume";
import { ResumeAction } from "./types/util";

import { Dispatch, SetStateAction } from "react";

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

export const reducer = (state: Resume, action: ResumeAction): Resume => {
  const { type, payload } = action;
  switch (type) {
  }
  return state;
};
