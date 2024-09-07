import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import {
  SectionType,
  ResumeActionKind,
  EducationSection,
} from "@/app/lib/types";
import { getResumeSection } from "@/app/lib/util";
import { Block } from "./Block";
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
    <div className="mt-5">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Education
        </h3>
      </div>
      <EducationInput addEducation={addEducation} />
      <div className="mt-4">
        <SortableList
          items={educations}
          onChange={setEducation}
          itemContent={(education) => {
            return (
              <Block
                displayText={`${education.major} at ${education.schoolTitle}`}
                id={education.sectionId}
                displayOn={education.display}
              />
            );
          }}
          itemClassName="SortableItem"
        />
      </div>
    </div>
  );
}
