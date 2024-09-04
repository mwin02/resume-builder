import {
  ContactInput,
  InfoInput,
  ExperienceBuilder,
  EducationBuilder,
} from "./components";

export function ResumeBuilder() {
  return (
    <div>
      <h3>Builder</h3>
      <InfoInput />
      <ContactInput />
      <ExperienceBuilder />
      <EducationBuilder />
    </div>
  );
}
