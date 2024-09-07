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

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const formateDateString = (date: Date) => {
  return `${months[date.getMonth()]}/${date.getFullYear()}`;
};

export const getResumeSection = (
  resume: Resume,
  type: SectionType
): Section[] => {
  const targetSections = resume.sections.filter(
    (section) => section.type === type
  );
  return targetSections;
};

const renderExperiences = (experienceSections: ExperienceSection[]) => {
  return experienceSections.map((experience) => {
    let content = <></>;
    if (experience.display) {
      content = (
        <>
          <p>
            {experience.jobTitle} at {experience.company}
          </p>
          <ul>
            {experience.jobDuty.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </>
      );
    }
    return <div key={experience.id}>{content}</div>;
  });
};

const renderEducation = (educationSections: EducationSection[]) => {
  return educationSections.map((education) => {
    let content = <></>;
    if (education.display) {
      content = (
        <>
          <p>
            {education.degree} in {education.major} at {education.schoolTitle}
          </p>
          <ul>
            {education.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </>
      );
    }
    return <div key={education.id}>{content}</div>;
  });
};

const renderCustom = (customSections: CustomSection[]) => {
  return customSections.map((custom) => {
    let content = <></>;
    if (custom.display) {
      content = (
        <>
          <h3>{custom.title}</h3>
          <ul>
            {custom.content.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </>
      );
    }
    return <div key={custom.id}>{content}</div>;
  });
};

export const convertResumeToJSX = (resume: Resume) => {
  const { personalInfo, contactDetails } = resume;
  const experienceSections = getResumeSection(
    resume,
    SectionType.Experience
  ) as ExperienceSection[];
  const educationSections = getResumeSection(
    resume,
    SectionType.Education
  ) as EducationSection[];
  const customSections = getResumeSection(
    resume,
    SectionType.Custom
  ) as CustomSection[];
  console.log(customSections);

  const experiencesContent = renderExperiences(experienceSections);

  const educationContent = renderEducation(educationSections);

  const customContent = renderCustom(customSections);

  return (
    <div className="bg-sky-50 ">
      <h3>{personalInfo?.name || "Placeholder"}</h3>
      <p>
        <span>{`${personalInfo?.location}   |`}</span>
        <span>{`${contactDetails?.email}   |`}</span>
        <span>{`${contactDetails?.phone}   |`}</span>
        <span>{`${contactDetails?.website}   |`}</span>
      </p>
      <p>{personalInfo?.bio}</p>
      <h3>Experience</h3>
      {experiencesContent}
      <h3>Education</h3>
      {educationContent}
      {customContent}
    </div>
  );
};
