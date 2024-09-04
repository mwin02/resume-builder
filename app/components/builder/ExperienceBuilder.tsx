import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import { ExperienceSection, SectionType } from "@/app/lib/types/resume";
import { getResumeSection } from "@/app/lib/util/resume";
import { ExperienceBlock } from "./Block";
import { ResumeActionKind } from "@/app/lib/types/util";
import ExperienceInput from "./ExperienceInput";
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
  const experiences = getResumeSection(
    resume,
    SectionType.Experience
  ) as ExperienceSection[];
  const ExperienceBlocks = experiences.map((experience) => (
    <ExperienceBlock
      experience={experience}
      key={experience.id}
      toggle={toggleSection}
    />
  ));
  return (
    <div>
      <h3>Experiences</h3>
      <ExperienceInput addExperience={addExperience} />
      {ExperienceBlocks}
    </div>
  );
}
