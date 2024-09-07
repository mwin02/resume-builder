import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import { SectionType, ResumeActionKind, CustomSection } from "@/app/lib/types";
import { getResumeSection } from "@/app/lib/util";
import { SortableList } from "@/app/components";
import { CustomSectionInput } from "../Input";
import { Block } from "./Block";

export default function CustomSectionBuilder() {
  const { resume } = useResumeContext();
  const { dispatch } = useResumeDispatchContext();

  const addCustomSection = (info: CustomSection) => {
    dispatch({ type: ResumeActionKind.AddCustom, payload: info });
  };

  const setCustomSection = (section: CustomSection[]) => {
    dispatch({ type: ResumeActionKind.SetCustom, payload: section });
  };

  const customSections = getResumeSection(
    resume,
    SectionType.Custom
  ) as CustomSection[];
  return (
    <div className="mt-5">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Custom Sections
        </h3>
      </div>
      <CustomSectionInput addCustomSection={addCustomSection} />
      <div className="mt-4">
        <SortableList
          items={customSections}
          onChange={setCustomSection}
          itemContent={(section) => (
            <Block
              displayText={`${section.title}`}
              id={section.sectionId}
              displayOn={section.display}
            />
          )}
          itemClassName="SortableItem"
        />
      </div>
    </div>
  );
}
