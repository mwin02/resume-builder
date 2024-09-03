import { useResumeDispatchContext } from "@/app/lib/context";

import {
  ContactDetails,
  ExperienceSection,
  PersonalDetails,
  EducationSection,
  Section,
  CustomSection,
  EmptyPersonalDetails,
  EmptyContactDetails,
  Resume,
} from "@/app/lib/types/resume";
import { ResumeActionKind } from "@/app/lib/types/util";

const sampleInfo: PersonalDetails = {
  name: "Myo Zaw Win",
  location: "San Diego, California",
  bio: "Recent graduate from University of California – San Diego, graduating Magna Cum Laude with a Bachelors in Computer Science. Currently looking for a role in software or web development, open to full stack development, backend development or front-end development. Strong educational background in software development and database systems principles along with excellent coding skills, critical thinking skills, communication skills and collaborative skills.",
};
const sampleContact: ContactDetails = {
  email: "mwin@ucsd.edu",
  phone: "8583199799",
  website: "mwin.dev",
};
const sampleExperience: ExperienceSection = {
  jobTitle: "Full Stack Engineer",
  company: "UCSD",
  jobDuty: ["full stack", "software development", "create new products"],
  startDate: new Date(),
  endDate: new Date(),
  location: "",
  id: 0,
  display: true,
};

export default function ResumeBuilder() {
  const { dispatch } = useResumeDispatchContext();
  const setInfo = (info: PersonalDetails) => {
    dispatch({ type: ResumeActionKind.SetInfo, payload: info });
  };
  const setContact = (info: ContactDetails) => {
    dispatch({ type: ResumeActionKind.SetContact, payload: info });
  };
  const addExperience = (info: ExperienceSection) => {
    dispatch({ type: ResumeActionKind.AddExperience, payload: info });
  };
  const toggleSection = (id: number) => {
    dispatch({ type: ResumeActionKind.Toggle, payload: id });
  };

  return (
    <div>
      <h3>Builder</h3>
      <button onClick={() => setInfo(sampleInfo)}>Set Info</button>
      <button onClick={() => setContact(sampleContact)}>Set Contact</button>
      <button onClick={() => addExperience(sampleExperience)}>
        Add Experience
      </button>
      <button onClick={() => toggleSection(0)}>Toggle Display</button>
    </div>
  );
}
