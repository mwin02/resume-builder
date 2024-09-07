import { MutableRefObject, useRef, useState } from "react";
import { MultiLineInput, SingleLineInput } from "./Input";
import { BulletPointItem, CustomSection, SectionType } from "@/app/lib/types";

import { SortableList } from "@/app/components";

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
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={openModal}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Custom Section
        </button>
      </div>
      <dialog
        ref={ref as MutableRefObject<HTMLDialogElement>}
        onCancel={closeModal}
      >
        <div className="min-w-[600px] p-8 max-w-[800px] rounded-md border-1 max-h-[700px]">
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              {title === "" ? "Custom Section" : title}
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
          <SingleLineInput label="Title" value={title} setValue={setTitle} />
          <div>
            <MultiLineInput
              label="Content"
              value={newContent}
              setValue={setNewContent}
              lineHeight={4}
            />
            <div className="flex items-center justify-end gap-x-6">
              <button
                onClick={() => addContent(newContent)}
                className="rounded-full p-2 bg-green-500 hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <img src="/button/plus.svg" width={"15px"} height={"15px"} />
              </button>
            </div>
            <SortableList
              items={content}
              onChange={setContent}
              itemContent={(item) => {
                return <>{item.content}</>;
              }}
              itemClassName="SortableItem"
            />
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={onAddButtonClick}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Section
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
