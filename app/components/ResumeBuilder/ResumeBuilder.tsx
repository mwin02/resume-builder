import {
  ContactInput,
  InfoInput,
  ExperienceBuilder,
  EducationBuilder,
  CustomSectionBuilder,
} from "./components";

export function ResumeBuilder() {
  return (
    <div className="basis-1/2 max-h-screen overflow-scroll p-7">
      <h3>Builder</h3>
      <InfoInput />
      <ContactInput />
      <ExperienceBuilder />
      <EducationBuilder />
      <CustomSectionBuilder />
    </div>
  );
}
