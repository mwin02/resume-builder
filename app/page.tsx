"use client";

import { ResumeBuilder } from "@/app/components";
import { ResumeDisplay } from "@/app/components";

export default function Home() {
  return (
    <main>
      <ResumeDisplay />
      <ResumeBuilder />
    </main>
  );
}
