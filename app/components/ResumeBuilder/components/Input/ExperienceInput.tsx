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
      <button onClick={openModal}>Add Experience</button>
      <dialog
        ref={ref as MutableRefObject<HTMLDialogElement>}
        onCancel={closeModal}
      >
        <h3>Experience</h3>
        <button onClick={closeModal}>X</button>
        <InputForm inputs={InputFormBuildInfo} />
        <div>
          <MultiLineInput label="" value={newDuty} setValue={setNewDuty} />
          <button onClick={() => addJobDuty(newDuty)}>Add</button>
          <SortableList
            items={jobDuty}
            onChange={setJobDuty}
            itemContent={(item) => {
              return <>{item.content}</>;
            }}
            itemClassName="SortableItem"
          />
        </div>
        <button onClick={onAddButtonClick}>Add Experience</button>
      </dialog>
    </div>
  );
}
