import { useEffect, useState } from "react";
import { MultiLineInput, SingleLineInput } from "./Input";
import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import { ResumeActionKind, PersonalDetails } from "@/app/lib/types";

export default function InfoInput() {
  const { resume } = useResumeContext();
  const { dispatch } = useResumeDispatchContext();
  const [name, setName] = useState(resume.personalInfo.name);
  const [bio, setBio] = useState(resume.personalInfo.bio);
  const [location, setLocation] = useState(resume.personalInfo.location);
  const setInfo = (info: PersonalDetails) => {
    dispatch({ type: ResumeActionKind.SetInfo, payload: info });
  };
  useEffect(() => {
    setName(resume.personalInfo.name);
    setBio(resume.personalInfo.bio);
    setLocation(resume.personalInfo.location);
  }, [resume]);
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal Details and Contact Information.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <SingleLineInput label="Name" value={name} setValue={setName} />
          <MultiLineInput label="Bio" value={bio} setValue={setBio} />
          <SingleLineInput
            label="Location"
            value={location}
            setValue={setLocation}
          />
          <button onClick={() => setInfo({ name, bio, location })}>
            Set Info
          </button>
        </dl>
      </div>
    </div>
  );
}
