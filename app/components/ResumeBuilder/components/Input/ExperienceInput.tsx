import { MutableRefObject, useRef, useState } from "react";
import { MultiLineInput } from "./Input";
import {
  BulletPointItem,
  ExperienceSection,
  SectionType,
} from "@/app/lib/types";
import { SortableList } from "@/app/components";
import { buildInput, InputBuilder, InputForm, InputType } from "./InputForm";

export default function ExperienceInput({
  addExperience,
}: {
  addExperience: (info: ExperienceSection) => void;
}) {
  const ref = useRef<HTMLDialogElement>();
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("");

  const [jobDuty, setJobDuty] = useState<BulletPointItem[]>([]);
  const [newDuty, setNewDuty] = useState("");
  const [curId, setCurId] = useState(1);

  const closeModal = () => {
    clearState();
    ref.current?.close();
  };

  const openModal = () => {
    clearState();
    ref.current?.showModal();
  };

  const clearState = () => {
    setJobTitle("");
    setCompany("");
    setJobDuty([]);
    setNewDuty("");
    setStartDate(null);
    setEndDate(null);
    setLocation("");
    setCurId(1);
  };

  const InputFormBuildInfo: InputBuilder<any>[] = [
    buildInput(InputType.Single, "Job Title", jobTitle, setJobTitle),
    buildInput(InputType.Single, "Company", company, setCompany),
    buildInput(InputType.Single, "Location", location, setLocation),
    buildInput(InputType.Date, "Start Date", startDate, setStartDate),
    buildInput(InputType.Date, "End Date", endDate, setEndDate),
  ];

  const compiledExperience: ExperienceSection = {
    jobTitle,
    company,
    jobDuty: jobDuty.map((duty) => duty.content),
    startDate,
    endDate,
    location,
    display: true,
    id: -1,
    sectionId: -1,
    type: SectionType.Experience,
  };

  const addJobDuty = (duty: string) => {
    setJobDuty([...jobDuty, { id: curId, content: duty }]);
    setCurId(curId + 1);
    setNewDuty("");
  };

  const onAddButtonClick = () => {
    addExperience(compiledExperience);
    closeModal();
  };

  return (
    <div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={openModal}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Experience
        </button>
      </div>
      <dialog
        ref={ref as MutableRefObject<HTMLDialogElement>}
        onCancel={closeModal}
      >
        <div className="min-w-[600px] p-8 rounded-md border-1 max-h-[700px]">
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Experience
            </h3>
            <div className="flex items-cent justify-end gap-x-6 col-start-3">
              <button
                className="rounded-md bg-gray-200 px-3 py-2 text-sm font-semibol shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                onClick={closeModal}
              >
                x
              </button>
            </div>
          </div>
          <InputForm inputs={InputFormBuildInfo} />
          <div>
            <MultiLineInput
              label="Responsibilities"
              value={newDuty}
              setValue={setNewDuty}
              lineHeight={2}
            />
            <div className="flex items-center justify-end gap-x-6">
              <button
                onClick={() => addJobDuty(newDuty)}
                className="rounded-full p-2 bg-green-500 hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <img src="/button/plus.svg" width={"15px"} height={"15px"} />
              </button>
            </div>
            <div className="mt-4">
              <SortableList
                items={jobDuty}
                onChange={setJobDuty}
                itemContent={(item) => {
                  return <>{item.content}</>;
                }}
                itemClassName="SortableItem"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={onAddButtonClick}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Experience
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
