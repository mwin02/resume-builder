import { InputProp } from "@/app/lib/types";

export const MultiLineInput = ({
  label,
  value,
  setValue,
}: InputProp<string>) => {
  return (
    <div className=" py-6">
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          name={label}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-36"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        ></textarea>
      </div>
    </div>
  );
};

export const SingleLineInput = ({
  label,
  value,
  setValue,
}: InputProp<string>) => {
  return (
    <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <label htmlFor="" className="text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <input
        className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-start-2 col-end-4"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="text"
      ></input>
    </div>
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
