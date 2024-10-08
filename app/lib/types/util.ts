import { Dispatch, SetStateAction } from "react";
import { ContactDetails, Resume } from "./resume";
import { UniqueIdentifier } from "@dnd-kit/core";

export interface SortableBaseItem {
  id: UniqueIdentifier;
}

export interface BulletPointItem extends SortableBaseItem {
  content: string;
}

export interface MultiLineInputProp<T> extends InputProp<T> {
  lineHeight: number;
}

export interface InputProp<T> {
  label: string;
  value: T;
  setValue: (newValue: T) => void;
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
  AddCustom = "ADDCUSTOM",
  Toggle = "TOGGLE",
  SetExperience = "SETEXPERIENCE",
  SetEducation = "SETEDUCATION",
  SetCustom = "SETCUSTOM",
  ClearInfo = "CLEARINFO",
  DelSection = "DELSECTION",
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
