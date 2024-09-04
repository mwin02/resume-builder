import { MutableRefObject, useRef, useState } from "react";
import { MultiLineInput, SingleLineInput } from "./Input";
import { ExperienceSection, SectionType } from "@/app/lib/types/resume";
import { useResumeContext } from "@/app/lib/context";
export default function ExperienceInput({
  addExperience,
}: {
  addExperience: (info: ExperienceSection) => void;
}) {
  const ref = useRef<HTMLDialogElement>();
  const { resume } = useResumeContext();
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobDuty, setJobDuty] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("");

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
    setJobDuty("");
    setStartDate(null);
    setEndDate(null);
    setLocation("");
  };

  const compiledExperience = {
    jobTitle,
    company,
    jobDuty,
    startDate,
    endDate,
    location,
    display: true,
    id: -1,
    type: SectionType.Experience,
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
        <SingleLineInput
          label="Title"
          value={jobTitle}
          setValue={setJobTitle}
        />
        <SingleLineInput
          label="Company"
          value={company}
          setValue={setCompany}
        />
        {/* <SingleLineInput label="startDate" value={} setValue={} />
        <SingleLineInput label="" value={} setValue={} /> */}
        <SingleLineInput
          label="Location"
          value={location}
          setValue={setLocation}
        />
        <MultiLineInput
          label="Responsibilities"
          value={jobDuty}
          setValue={setJobDuty}
        />

        <button onClick={() => addExperience(compiledExperience)}>
          Add Experience
        </button>
      </dialog>
    </div>
  );
}
