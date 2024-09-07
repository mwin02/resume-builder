import { InputProp, MultiLineInputProp } from "@/app/lib/types";

export const MultiLineInput = ({
  label,
  value,
  setValue,
  lineHeight,
}: MultiLineInputProp<string>) => {
  return (
    <div className=" py-3">
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          name={label}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-${
            6 * lineHeight
          }`}
          rows={lineHeight}
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
    <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
    <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <label
        htmlFor={"date"}
        className="text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input
        name="date"
        type="date"
        className="rounded-md mx-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-start-2 col-end-4"
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          setValue(newDate);
        }}
      ></input>
    </div>
  );
};

export const BooleanInput = ({
  label,
  value,
  setValue,
}: InputProp<boolean>) => {
  return (
    <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <label htmlFor="" className="text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <input
        className="rounded-md mx-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-start-2 col-end-4"
        type="checkbox"
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      ></input>
    </div>
  );
};
