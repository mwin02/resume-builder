"use client";

import { useEffect, useReducer } from "react";
import { Resume, ResumeActionKind } from "@/app/lib/types";
import { reducer } from "./reducer";
import { ResumeContext, ResumeDispatchContext } from "./context";

const sampleInfo = {
  name: "Myo Zaw Win",
  location: "San Diego, California",
  bio: "Recent graduate from University of California – San Diego, graduating Magna Cum Laude with a Bachelors in Computer Science. Currently looking for a role in software or web development, open to full stack development, backend development or front-end development. Strong educational background in software development and database systems principles along with excellent coding skills, critical thinking skills, communication skills and collaborative skills.",
};
const sampleContact = {
  email: "mwin@ucsd.edu",
  phone: "8583199799",
  website: "mwin.dev",
};

const testResume: Resume = {
  personalInfo: sampleInfo,
  contactDetails: sampleContact,
  sections: [],
  lastSectionId: 1,
};

const emptyResume: Resume = {
  personalInfo: {
    name: "",
    location: "",
    bio: "",
  },
  contactDetails: {
    email: "",
    phone: "",
    website: "",
  },
  sections: [],
  lastSectionId: 1,
  empty: true,
};

export function Providers({ children }: any) {
  // TODO:: Get an initial resume that is saved somewhere and save to that resume on every dispatch
  const [resume, dispatch] = useReducer(reducer, emptyResume);
  useEffect(() => {
    console.log(resume);
    if (resume?.empty) {
      // if initial load and resume is not initialized, retrieve it
      const storedResume = localStorage.getItem("resume");
      // const storedResume = undefined;
      const initialResume = storedResume
        ? JSON.parse(storedResume)
        : { ...emptyResume };
      console.log(initialResume);
      dispatch({
        type: ResumeActionKind.InitialSet,
        payload: initialResume,
      });
      console.log("Resume has been initialized");
    } else {
      // if resume is changed, then save the new resume
      localStorage.setItem("resume", JSON.stringify(resume));
      console.log("Resume has been changed. Save New Resume");
      console.log(resume);
    }
  }, [resume]);
  return (
    <ResumeContext.Provider value={{ resume: resume || emptyResume }}>
      <ResumeDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ResumeDispatchContext.Provider>
    </ResumeContext.Provider>
  );
}
