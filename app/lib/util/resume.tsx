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
  if (!date) {
    return;
  }
  console.log(date);

  return `${months[date.getMonth()]}/${date.getFullYear()}`;
};

export const getResumeSection = (
  resume: Resume,
  type: SectionType
): Section[] => {
  if (!resume.sections) {
    return [];
  }
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
        <div className="text-xs mt-2">
          <p>
            {experience.jobTitle} at {experience.company}
          </p>
          <ul>
            {experience.jobDuty.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </div>
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
        <div className="text-xs">
          <p>
            {education.degree} in {education.major} at {education.schoolTitle}
          </p>
          <ul>
            {education.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
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
    <div className="w-[584px] h-[700px] overflow-scroll border-2 border-black px-6 py-8  font-serif">
      <h3 className="text-lg font-semibold leading-7 text-gray-900">
        {personalInfo?.name || "Placeholder"}
      </h3>

      <p className="mb-1.5 text-xs">
        <span>{`${personalInfo?.location} | `}</span>
        <span>{`${contactDetails?.email} | `}</span>
        <span>{`${contactDetails?.phone} | `}</span>
        <span>{`${contactDetails?.website} | `}</span>
      </p>
      <p className="text-xxs mb-1.5">{personalInfo?.bio}</p>
      <div>
        <h3 className="text-xs border-b border-b-black font-semibold leading-4">
          Experience
        </h3>
        {experiencesContent}
      </div>
      <h3 className="text-xs border-b border-b-black font-semibold leading-4">
        Education
      </h3>
      {educationContent}
      {customContent}
    </div>
  );
};
