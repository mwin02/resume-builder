import {
  ContactDetails,
  ExperienceSection,
  PersonalDetails,
  Resume,
} from "@/app/lib/types/resume";
import { Dispatch, SetStateAction } from "react";

export const convertResumeToJSX = (resume: Resume) => {
  const { personalInfo, contactDetails, experience } = resume;
  const experiences = experience.map((exp) => {
    let content = <></>;
    if (exp.display) {
      content = (
        <>
          <p>
            {exp.jobTitle} at {exp.company}
          </p>
          {exp.jobDuty}
        </>
      );
    }
    return <div key={exp.id}>{content}</div>;
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
      {experiences}
    </div>
  );
};
