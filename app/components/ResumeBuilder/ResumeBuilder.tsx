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
      <h2 className="text-lg font-semibold leading-7 text-gray-900">
        Resume Builder
      </h2>
      <InfoInput />
      <ExperienceBuilder />
      <EducationBuilder />
      <CustomSectionBuilder />
    </div>
  );
}
