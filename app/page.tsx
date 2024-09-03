"use client";

import ResumeDisplay from "./components/viewer/ResumeDisplay";
import ResumeBuilder from "./components/builder/ResumeBuilder";

export default function Home() {
  return (
    <main>
      <ResumeDisplay />
      <ResumeBuilder />
    </main>
  );
}
