import { createContext } from "react";
import { useContext } from "react";
import { ResumeContextValue, ResumeDispatchContextValue } from "./types/util";

export const ResumeContext = createContext<ResumeContextValue | undefined>(
  undefined
);

export const ResumeDispatchContext = createContext<
  ResumeDispatchContextValue | undefined
>(undefined);

export const useResumeContext = () => {
  const resumeContext = useContext(ResumeContext);
  if (resumeContext === undefined) {
    throw new Error("useResumeContext must be inside a ResumeContextProvider");
  }
  return resumeContext;
};

export const useResumeDispatchContext = () => {
  const resumeDispatchContext = useContext(ResumeDispatchContext);
  if (resumeDispatchContext === undefined) {
    throw new Error(
      "useResumeDispatchContext must be inside a ResumeDispatchContextProvider"
    );
  }
  return resumeDispatchContext;
};
