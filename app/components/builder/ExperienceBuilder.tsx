import { useResumeContext } from "@/app/lib/context";
import { ExperienceSection, SectionType } from "@/app/lib/types/resume";
import { getResumeSection } from "@/app/lib/util/resume";

function ExperienceBlock({ experience }: { experience: ExperienceSection }) {
  return <>{experience.jobTitle}</>;
}

export default function ExperienceBuilder() {
  const { resume } = useResumeContext();
  const experiences = getResumeSection(
    resume,
    SectionType.Experience
  ) as ExperienceSection[];
  const ExperienceBlocks = experiences.map((experience) => (
    <ExperienceBlock experience={experience} key={experience.id} />
  ));
  return <>{ExperienceBlocks}</>;
}
