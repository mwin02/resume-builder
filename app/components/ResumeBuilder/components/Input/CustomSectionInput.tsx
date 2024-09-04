import { MutableRefObject, useRef, useState } from "react";
import { DateInput, MultiLineInput, SingleLineInput } from "./Input";
import {
  BulletPointItem,
  CustomSection,
  EducationSection,
  ExperienceSection,
  SectionType,
} from "@/app/lib/types";
import { useResumeContext } from "@/app/lib/context";
import { SortableList } from "@/app/components";
import { buildInput, InputBuilder, InputForm, InputType } from "./InputForm";

export default function CustomSectionInput({
  addCustomSection,
}: {
  addCustomSection: (info: CustomSection) => void;
}) {
  const ref = useRef<HTMLDialogElement>();
  const [title, setTitle] = useState("");

  const [content, setContent] = useState<BulletPointItem[]>([]);
  const [newContent, setNewContent] = useState("");
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
    setTitle("");
    setContent([]);
    setNewContent("");
    setCurId(1);
  };

  const compiledSection: CustomSection = {
    display: true,
    id: -1,
    sectionId: -1,
    type: SectionType.Custom,
    title,
    content: content.map((point) => point.content),
  };

  const addContent = (contentToAdd: string) => {
    setContent([...content, { id: curId, content: contentToAdd }]);
    setCurId(curId + 1);
    setNewContent("");
  };

  const onAddButtonClick = () => {
    addCustomSection(compiledSection);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add Custom Section</button>
      <dialog
        ref={ref as MutableRefObject<HTMLDialogElement>}
        onCancel={closeModal}
      >
        <h3>Custom</h3>
        <button onClick={closeModal}>X</button>
        <SingleLineInput label="Title" value={title} setValue={setTitle} />
        <div>
          <SingleLineInput
            label="Content"
            value={newContent}
            setValue={setNewContent}
          />
          <button onClick={() => addContent(newContent)}>Add</button>
          <SortableList
            items={content}
            onChange={setContent}
            itemContent={(item) => {
              return <>{item.content}</>;
            }}
            itemClassName="SortableItem"
          />
        </div>
        <button onClick={onAddButtonClick}>Add Section</button>
      </dialog>
    </div>
  );
}
