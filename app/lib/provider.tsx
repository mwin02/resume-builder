"use client";

import { useReducer } from "react";
import { Resume } from "./types/resume";
import { reducer } from "./reducer";

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
  experience: [],
  education: [],
  customSections: [],
  allSections: [],
};

export function Provider({ children }: any) {
  const [resume, dispatch] = useReducer(reducer, emptyResume);
}
