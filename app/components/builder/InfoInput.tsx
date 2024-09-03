import { useEffect, useState } from "react";
import { MultiLineInput, SingleLineInput } from "./Input";
import { PersonalDetails } from "@/app/lib/types/resume";
import { useResumeContext } from "@/app/lib/context";

export default function InfoInput({
  setInfo,
}: {
  setInfo: (info: PersonalDetails) => void;
}) {
  const { resume } = useResumeContext();
  const [name, setName] = useState(resume.personalInfo.name);
  const [bio, setBio] = useState(resume.personalInfo.bio);
  const [location, setLocation] = useState(resume.personalInfo.location);
  useEffect(() => {
    setName(resume.personalInfo.name);
    setBio(resume.personalInfo.bio);
    setLocation(resume.personalInfo.location);
  }, [resume]);
  return (
    <div>
      <h3>Personal Info</h3>
      <SingleLineInput label="Name" value={name} setValue={setName} />
      <MultiLineInput label="Bio" value={bio} setValue={setBio} />
      <SingleLineInput
        label="Location"
        value={location}
        setValue={setLocation}
      />
      <button onClick={() => setInfo({ name, bio, location })}>Set Info</button>
    </div>
  );
}
