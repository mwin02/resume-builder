import { InputProp } from "@/app/lib/types";

export const MultiLineInput = ({
  label,
  value,
  setValue,
}: InputProp<string>) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></input>
    </>
  );
};

export const SingleLineInput = ({
  label,
  value,
  setValue,
}: InputProp<string>) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></input>
    </>
  );
};

export const DateInput = ({
  label,
  value,
  setValue,
}: InputProp<Date | null>) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      {/* <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></input> */}
    </>
  );
};

export const BooleanInput = ({
  label,
  value,
  setValue,
}: InputProp<boolean>) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      {/* <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></input> */}
    </>
  );
};
