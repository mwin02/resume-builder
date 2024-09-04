import { InputProp } from "@/app/lib/types";
import {
  BooleanInput,
  DateInput,
  MultiLineInput,
  SingleLineInput,
} from "./Input";
import { Dispatch, SetStateAction } from "react";

interface InputFormProp {
  inputs: InputBuilder<any>[];
}

export enum InputType {
  Single = "SINGLE",
  Multi = "MULTI",
  Date = "DATE",
  Bool = "BOOLEAN",
}

export interface InputBuilder<T> {
  type: InputType;
  label: string;
  value: T;
  setValue: (newValue: T) => void;
}

function renderStringInput(info: InputBuilder<string>, key: number) {
  switch (info.type) {
    case InputType.Single: {
      const { value, label, setValue } = info;
      return (
        <SingleLineInput
          value={value}
          label={label}
          setValue={setValue}
          key={key}
        />
      );
    }
    case InputType.Multi: {
      const { value, label, setValue } = info;
      return (
        <MultiLineInput
          value={value}
          label={label}
          setValue={setValue}
          key={key}
        />
      );
    }
  }
}

function renderDateInput(info: InputBuilder<Date | null>, key: number) {
  const { value, label, setValue } = info;
  return (
    <DateInput value={value} label={label} setValue={setValue} key={key} />
  );
}

function renderBoolInput(info: InputBuilder<boolean>, key: number) {
  const { value, label, setValue } = info;
  return (
    <BooleanInput value={value} label={label} setValue={setValue} key={key} />
  );
}

function renderInput<T>(input: InputBuilder<T>, key: number) {
  if (input.type === InputType.Single || input.type === InputType.Multi)
    return renderStringInput(input as any as InputBuilder<string>, key);
  if (input.type === InputType.Date)
    return renderDateInput(input as any as InputBuilder<Date | null>, key);
  if (input.type === InputType.Bool)
    return renderBoolInput(input as any as InputBuilder<boolean>, key);
}

export function buildInput<T>(
  type: InputType,
  label: string,
  value: T,
  setValue: Dispatch<SetStateAction<T>>
): InputBuilder<T> {
  return { type, label, value, setValue };
}

export const InputForm = ({ inputs }: InputFormProp) => {
  const inputElements = inputs.map((input, index) => renderInput(input, index));
  return <form>{inputElements}</form>;
};
