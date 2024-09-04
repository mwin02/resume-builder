import { MutableRefObject, useRef, useState } from "react";
import { DateInput, MultiLineInput, SingleLineInput } from "./Input";
import {
  BulletPointItem,
  EducationSection,
  ExperienceSection,
  SectionType,
} from "@/app/lib/types";
import { useResumeContext } from "@/app/lib/context";
import { SortableList } from "@/app/components";
import { buildInput, InputBuilder, InputForm, InputType } from "./InputForm";

export default function EducationInput({
  addEducation,
}: {
  addEducation: (info: EducationSection) => void;
}) {
  const ref = useRef<HTMLDialogElement>();
  const [schoolTitle, setSchoolTitle] = useState("");
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState("");
  const [gpa, setGPA] = useState("");
  const [completed, setCompleted] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [achievements, setAchievements] = useState<BulletPointItem[]>([]);
  const [newAchievement, setNewAchievement] = useState("");
  const [curId, setCurId] = useState(1);

  const closeModal = () => {
    clearState();
    ref.current?.close();
  };

  const openModal = () => {
    clearState();
    ref.current?.showModal();
  };

  const InputFormBuildInfo: InputBuilder<any>[] = [
    buildInput(InputType.Single, "School", schoolTitle, setSchoolTitle),
    buildInput(InputType.Single, "Major", major, setMajor),
    buildInput(InputType.Single, "Degree", degree, setDegree),
    buildInput(InputType.Single, "GPA", gpa, setGPA),
    buildInput(InputType.Date, "Start Date", startDate, setStartDate),
    buildInput(InputType.Date, "End Date", endDate, setEndDate),
    buildInput(InputType.Bool, "Completed", completed, setCompleted),
  ];

  const clearState = () => {
    setSchoolTitle("");
    setMajor("");
    setDegree("");
    setGPA("");
    setStartDate(null);
    setEndDate(null);
    setCompleted(false);
    setCurId(1);
  };

  const compiledEducation: EducationSection = {
    schoolTitle,
    major,
    achievements: achievements.map((achievement) => achievement.content),
    startDate,
    endDate,
    gpa,
    display: true,
    id: -1,
    sectionId: -1,
    type: SectionType.Education,
    completed: false,
    degree,
  };

  const addAchievement = (achievement: string) => {
    setAchievements([...achievements, { id: curId, content: achievement }]);
    setCurId(curId + 1);
    setNewAchievement("");
  };

  const onAddButtonClick = () => {
    addEducation(compiledEducation);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add Education</button>
      <dialog
        ref={ref as MutableRefObject<HTMLDialogElement>}
        onCancel={closeModal}
      >
        <h3>Education</h3>
        <button onClick={closeModal}>X</button>
        <InputForm inputs={InputFormBuildInfo} />
        <div>
          <SingleLineInput
            label=""
            value={newAchievement}
            setValue={setNewAchievement}
          />
          <button onClick={() => addAchievement(newAchievement)}>Add</button>
          <SortableList
            items={achievements}
            onChange={setAchievements}
            itemContent={(item) => {
              return <>{item.content}</>;
            }}
            itemClassName="SortableItem"
          />
        </div>
        <button onClick={onAddButtonClick}>Add Education</button>
      </dialog>
    </div>
  );
}
