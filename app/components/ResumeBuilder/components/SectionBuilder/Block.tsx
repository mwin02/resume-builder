import { useResumeDispatchContext } from "@/app/lib/context";
import { ResumeActionKind } from "@/app/lib/types";

// TODO:: implement draggable blocks that will update order based on drag

export function Block({
  displayText,
  id,
  displayOn,
}: {
  displayText: string;
  id: number;
  displayOn: boolean;
}) {
  const { dispatch } = useResumeDispatchContext();
  const toggle = (id: number) => {
    dispatch({ type: ResumeActionKind.Toggle, payload: id });
  };
  const remove = (id: number) => {
    dispatch({ type: ResumeActionKind.DelSection, payload: id });
  };
  const edit = (id: number) => {};
  return (
    <div className="sm:grid sm:grid-cols-4 w-full sm:gap-4 sm:px-0">
      <div className="flex content-center col-start-1 col-end-4">
        <p>{displayText}</p>
      </div>
      <div className="col-start-4 flex flex-row justify-evenly">
        <button
          className="rounded-md bg-yellow-200 px-3 py-2 text-sm font-semibol shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          onClick={() => edit(id)}
        >
          <img src="/button/edit.svg" width={"25px"} height={"25px"} />
        </button>
        <button
          className="rounded-md bg-red-200 px-3 py-2 text-sm font-semibol shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          onClick={() => remove(id)}
        >
          <img src="/button/delete.svg" width={"25px"} height={"25px"} />
        </button>
        <button
          className="rounded-md bg-gray-200 px-3 py-2 text-sm font-semibol shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          onClick={() => toggle(id)}
        >
          <img
            src={`/button/${displayOn ? "hide" : "show"}.svg`}
            width={"25px"}
            height={"25px"}
          />
        </button>
      </div>
    </div>
  );
}
