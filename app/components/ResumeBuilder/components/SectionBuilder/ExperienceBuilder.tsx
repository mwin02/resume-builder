import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import {
  ExperienceSection,
  SectionType,
  ResumeActionKind,
} from "@/app/lib/types";
import { formateDateString, getResumeSection } from "@/app/lib/util";
import { Block } from "./Block";
import { ExperienceInput } from "../Input";
import { SortableList } from "@/app/components/SortableList";
// TODO:: create a section builder for all sections

export default function ExperienceBuilder() {
  const { resume } = useResumeContext();
  const { dispatch } = useResumeDispatchContext();
  const toggleSection = (id: number) => {
    dispatch({ type: ResumeActionKind.Toggle, payload: id });
  };
  const addExperience = (info: ExperienceSection) => {
    dispatch({ type: ResumeActionKind.AddExperience, payload: info });
  };
  const setExperience = (experiences: ExperienceSection[]) => {
    dispatch({ type: ResumeActionKind.SetExperience, payload: experiences });
  };

  const experiences = getResumeSection(
    resume,
    SectionType.Experience
  ) as ExperienceSection[];

  return (
    <div className="mt-5">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Experience
        </h3>
      </div>
      <ExperienceInput addExperience={addExperience} />
      <div className="mt-4">
        <SortableList
          items={experiences}
          onChange={setExperience}
          itemContent={(experience) => {
            const displayText =
              `${experience.jobTitle} ${
                experience.company ? `at ${experience.company}` : "No Job Title"
              } | ` +
              `Date: ${
                experience.startDate
                  ? `${formateDateString(experience.startDate)} - `
                  : ""
              }` +
              `${
                experience.endDate
                  ? `${formateDateString(experience.endDate)}    `
                  : ""
              }`;
            return (
              <Block
                displayText={displayText}
                id={experience.sectionId}
                displayOn={experience.display}
              />
            );
          }}
          itemClassName="SortableItem"
        />
      </div>
    </div>
  );
}
