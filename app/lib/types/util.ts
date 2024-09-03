import { Dispatch, SetStateAction } from "react";
import { ContactDetails, Resume } from "./resume";

export interface InputProp {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export interface ResumeContextValue {
  resume: Resume;
}

export interface ResumeDispatchContextValue {
  dispatch: Dispatch<ResumeAction>;
}

export enum ResumeActionKind {
  InitialSet = "INITIALSET",
  SetInfo = "SETINFO",
  SetContact = "SETCONTACT",
  AddExperience = "ADDEXPEREINCE",
  AddEducation = "ADDEDUCATION",
  Toggle = "TOGGLE",
}

export interface ResumeAction {
  type: ResumeActionKind;
  payload: any;
}

export interface HTMLToPDFObject {
  filename: string;
  htmlContent: string;
  cssContent: any;
}

export function isHTMLToPDFObject(obj: any): obj is HTMLToPDFObject {
  return (
    typeof obj.filename === "string" &&
    typeof obj.htmlContent === "string" &&
    obj.hasOwnProperty("cssContent")
  );
}
