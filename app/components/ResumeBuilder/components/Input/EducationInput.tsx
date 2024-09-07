import { MutableRefObject, useRef, useState } from "react";
import { MultiLineInput, SingleLineInput } from "./Input";
import {
  BulletPointItem,
  EducationSection,
  SectionType,
} from "@/app/lib/types";
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

  const InputFormBuildInfo: (InputBuilder<any> | undefined)[] = [
    buildInput(InputType.Single, "School", schoolTitle, setSchoolTitle),
    buildInput(InputType.Single, "Major", major, setMajor),
    buildInput(InputType.Single, "Degree", degree, setDegree),
    buildInput(InputType.Single, "GPA", gpa, setGPA),
    buildInput(InputType.Date, "Start Date", startDate, setStartDate),
    buildInput(InputType.Bool, "Completed", completed, setCompleted),
    completed
      ? buildInput(InputType.Date, "End Date", endDate, setEndDate)
      : undefined,
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
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={openModal}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Education
        </button>
      </div>
      <dialog
        ref={ref as MutableRefObject<HTMLDialogElement>}
        onCancel={closeModal}
      >
        <div className="min-w-[600px] max-w-[800px] p-8 rounded-md border-1 max-h-[700px]">
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Education
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
              label="Achievements"
              value={newAchievement}
              setValue={setNewAchievement}
              lineHeight={1}
            />
            <div className="flex items-center justify-end gap-x-6">
              <button
                onClick={() => addAchievement(newAchievement)}
                className="rounded-full p-2 bg-green-500 hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <img src="/button/plus.svg" width={"15px"} height={"15px"} />
              </button>
            </div>
            <div className="mt-4">
              <SortableList
                items={achievements}
                onChange={setAchievements}
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
              Add Education
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
