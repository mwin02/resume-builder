import {
  ContactInput,
  InfoInput,
  ExperienceBuilder,
  EducationBuilder,
  CustomSectionBuilder,
} from "./components";

export function ResumeBuilder() {
  return (
    <div>
      <h3>Builder</h3>
      <InfoInput />
      <ContactInput />
      <ExperienceBuilder />
      <EducationBuilder />
      <CustomSectionBuilder />
    </div>
  );
}
