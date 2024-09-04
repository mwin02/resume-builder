import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import {
  ExperienceSection,
  SectionType,
  ResumeActionKind,
} from "@/app/lib/types";
import { getResumeSection } from "@/app/lib/util";
import { ExperienceBlock } from "./Block";
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
    <div>
      <h3>Experiences</h3>
      <ExperienceInput addExperience={addExperience} />
      <SortableList
        items={experiences}
        onChange={setExperience}
        itemContent={(experience) => {
          return <>{`${experience.jobTitle} at ${experience.company}`}</>;
        }}
        itemClassName="SortableItem"
      />
    </div>
  );
}
