import {
  CustomSection,
  EducationSection,
  ExperienceSection,
  Section,
} from "@/app/lib/types";

// TODO:: implement draggable blocks that will update order based on drag

export function Block({ section }: { section: Section }) {
  return <>{section.id}</>;
}

export function CustomBlock({
  customSection,
}: {
  customSection: CustomSection;
}) {
  return <>{customSection.title}</>;
}

export function EducationBlock({ education }: { education: EducationSection }) {
  return <>{education.schoolTitle}</>;
}

export function ExperienceBlock({
  experience,
  toggle,
}: {
  experience: ExperienceSection;
  toggle: (id: number) => void;
}) {
  return (
    <div>
      <p>
        {experience.jobTitle} at {experience.company}
      </p>
      <button onClick={() => toggle(experience.sectionId)}>Toggle</button>
    </div>
  );
}
