import { InputProp } from "@/app/lib/types/util";

export const MultiLineInput = ({ label, value, setValue }: InputProp) => {
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

export const SingleLineInput = ({ label, value, setValue }: InputProp) => {
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
