import { useRef } from "react";

import { useResumeContext, useResumeDispatchContext } from "@/app/lib/context";
import {
  ContactDetails,
  EmptyContactDetails,
  ExperienceSection,
  PersonalDetails,
  SectionType,
  ResumeActionKind,
} from "@/app/lib/types";

import { ContactInput, InfoInput, ExperienceBuilder } from "./components";

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
  jobDuty: `["full stack", "software development", "create new products"],`,
  startDate: new Date(),
  endDate: new Date(),
  location: "",
  id: 0,
  display: true,
  type: SectionType.Experience,
};

export function ResumeBuilder() {
  return (
    <div>
      <h3>Builder</h3>
      <InfoInput />
      <ContactInput />
      <ExperienceBuilder />
    </div>
  );
}
