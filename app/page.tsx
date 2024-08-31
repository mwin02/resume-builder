"use client";
import Image from "next/image";
import {
  ContactDetails,
  ExperienceSection,
  HTMLToPDFObject,
  PersonalDetails,
  EducationSection,
  Section,
  CustomSection,
  EmptyPersonalDetails,
  EmptyContactDetails,
} from "@/app/lib/types";

import { downloadPDF } from "@/app/lib/pdf_utils";
import { convertResumeToJSX } from "@/app/lib/resume_utils";
import { useState } from "react";

const ReactDOMServer = require("react-dom/server");

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
  company: "",
  jobDuty: [],
  startDate: new Date(),
  endDate: new Date(),
  location: "",
  id: 0,
  display: false,
};

export default function Home() {
  // TODO:: Create a Custom Provider and move state information to the provider
  // Provider will also give access to resume_util functions that modify the resume
  const [personalInfo, setPersonalInfo] = useState<PersonalDetails>(sampleInfo);
  const [contactDetails, setContactDetails] =
    useState<ContactDetails>(sampleContact);
  const [experience, setExperience] = useState<ExperienceSection[]>([]);
  const [education, setEducation] = useState<EducationSection[]>([]);
  const [customSections, setCustomSections] = useState<CustomSection[]>([]);
  const [allSections, setAllSections] = useState<Section[]>([]);

  const resumeHTML = convertResumeToJSX({
    personalInfo,
    contactDetails,
    experience,
    education,
    customSections,
    allSections,
  });
  const resumeString = ReactDOMServer.renderToString(resumeHTML);

  const pdfInfo: HTMLToPDFObject = {
    filename: "new_resume.pdf",
    htmlContent: resumeString,
    cssContent: { content: "body {padding: 40px}" },
  };

  return (
    <main>
      <div id="content-id">{resumeHTML}</div>
      <button onClick={() => downloadPDF(pdfInfo)}>Download Resume</button>
    </main>
  );
}
