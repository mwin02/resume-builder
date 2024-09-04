import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import {
  ExperienceSection,
  SectionType,
  ResumeActionKind,
  EducationSection,
} from "@/app/lib/types";
import { getResumeSection } from "@/app/lib/util";
import { ExperienceBlock } from "./Block";
import { ExperienceInput } from "../Input";
import EducationInput from "../Input/EducationInput";
import { SortableList } from "@/app/components";

export default function EducationBuilder() {
  const { resume } = useResumeContext();
  const { dispatch } = useResumeDispatchContext();

  const addEducation = (info: EducationSection) => {
    dispatch({ type: ResumeActionKind.AddEducation, payload: info });
  };

  const setEducation = (education: EducationSection[]) => {
    dispatch({ type: ResumeActionKind.SetEducation, payload: education });
  };

  const educations = getResumeSection(
    resume,
    SectionType.Education
  ) as EducationSection[];
  return (
    <div>
      <h3>Education</h3>
      <EducationInput addEducation={addEducation} />
      <SortableList
        items={educations}
        onChange={setEducation}
        itemContent={(education) => {
          return <>{`${education.major} at ${education.schoolTitle}`}</>;
        }}
        itemClassName="SortableItem"
      />
    </div>
  );
}
