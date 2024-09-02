import { createContext } from "react";
import { useContext } from "react";
import { ResumeContextValue } from "./types/util";

export const ResumeContext = createContext<ResumeContextValue | undefined>(
  undefined
);

export const useResumeContext = () => {
  const resumeContext = useContext(ResumeContext);
  if (resumeContext === undefined) {
    throw new Error("useResumeContext must be inside a SelectedMoviesProvider");
  }
  return ResumeContext;
};
