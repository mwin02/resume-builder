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
  return (
    <>
      {displayText}
      <button onClick={() => toggle(id)}>{displayOn ? "Hide" : "Show"}</button>
    </>
  );
}
