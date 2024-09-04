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

export default function EducationBuilder() {
  const { dispatch } = useResumeDispatchContext();

  const addEducation = (info: EducationSection) => {
    dispatch({ type: ResumeActionKind.AddEducation, payload: info });
  };
  return (
    <div>
      <h3>Education</h3>
      <EducationInput addEducation={addEducation} />
    </div>
  );
}
