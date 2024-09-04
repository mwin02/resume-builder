import {
  ContactDetails,
  CustomSection,
  EducationSection,
  ExperienceSection,
  PersonalDetails,
  Resume,
  SectionType,
  Section,
} from "@/app/lib/types";
import { Dispatch, SetStateAction } from "react";

export const getResumeSection = (
  resume: Resume,
  type: SectionType
): Section[] => {
  const targetSections = resume.sections.filter(
    (section) => section.type === type
  );
  return targetSections;
};

export const convertResumeToJSX = (resume: Resume) => {
  const { personalInfo, contactDetails } = resume;
  const experienceSections = getResumeSection(
    resume,
    SectionType.Experience
  ) as ExperienceSection[];
  const experiencesContent = experienceSections.map((experience) => {
    let content = <></>;
    if (experience.display) {
      content = (
        <>
          <p>
            {experience.jobTitle} at {experience.company}
          </p>
          {experience.jobDuty}
        </>
      );
    }
    return <div key={experience.id}>{content}</div>;
  });
  return (
    <div className="resume">
      <h2>{personalInfo?.name || "Placeholder"}</h2>
      <p>
        <span>{`${personalInfo?.location}   |`}</span>
        <span>{`${contactDetails?.email}   |`}</span>
        <span>{`${contactDetails?.phone}   |`}</span>
        <span>{`${contactDetails?.website}   |`}</span>
      </p>
      <p>{personalInfo?.bio}</p>
      {experiencesContent}
    </div>
  );
};
