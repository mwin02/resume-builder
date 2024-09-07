import { useEffect, useState } from "react";
import { MultiLineInput, SingleLineInput } from "./Input";
import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import { ResumeActionKind } from "@/app/lib/types";

export default function InfoInput() {
  const { resume } = useResumeContext();
  const { dispatch } = useResumeDispatchContext();
  const [name, setName] = useState(resume.personalInfo.name);
  const [bio, setBio] = useState(resume.personalInfo.bio);
  const [location, setLocation] = useState(resume.personalInfo.location);
  const [phone, setPhone] = useState(resume.contactDetails.phone);
  const [email, setEmail] = useState(resume.contactDetails.email);
  const [website, setWebsite] = useState(resume.contactDetails.website);

  const onClearButtonClick = () => {
    dispatch({
      type: ResumeActionKind.ClearInfo,
      payload: {},
    });
  };

  const onSetButtonClick = () => {
    dispatch({
      type: ResumeActionKind.SetInfo,
      payload: { name, bio, location },
    });
    dispatch({
      type: ResumeActionKind.SetContact,
      payload: { phone, email, website },
    });
  };

  useEffect(() => {
    setName(resume.personalInfo.name);
    setBio(resume.personalInfo.bio);
    setLocation(resume.personalInfo.location);
    setPhone(resume.contactDetails.phone);
    setEmail(resume.contactDetails.email);
    setWebsite(resume.contactDetails.website);
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
        <form className="divide-y divide-gray-100">
          <SingleLineInput label="Name" value={name} setValue={setName} />
          <MultiLineInput
            label="Bio"
            value={bio}
            setValue={setBio}
            lineHeight={6}
          />
          <SingleLineInput
            label="Phone Number"
            value={phone}
            setValue={setPhone}
          />
          <SingleLineInput label="Email" value={email} setValue={setEmail} />
          <SingleLineInput
            label="Location"
            value={location}
            setValue={setLocation}
          />
          <SingleLineInput
            label="Website"
            value={website}
            setValue={setWebsite}
          />
        </form>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={onClearButtonClick}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Clear
          </button>
          <button
            onClick={onSetButtonClick}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Set Info
          </button>
        </div>
      </div>
    </div>
  );
}
