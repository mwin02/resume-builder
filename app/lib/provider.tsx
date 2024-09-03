"use client";

import { useReducer } from "react";
import { Resume } from "./types/resume";
import { reducer } from "./reducer";

import { ResumeContext, ResumeDispatchContext } from "./context";

const emptyResume: Resume = {
  personalInfo: {
    name: "",
    location: "",
    bio: "",
  },
  contactDetails: {
    email: null,
    phone: null,
    website: null,
  },
  sections: [],
};

export function Providers({ children }: any) {
  const [resume, dispatch] = useReducer(reducer, emptyResume);
  return (
    <ResumeContext.Provider value={{ resume }}>
      <ResumeDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ResumeDispatchContext.Provider>
    </ResumeContext.Provider>
  );
}
