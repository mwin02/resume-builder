"use client";
import { ResumeBuilder, ResumeDisplay } from "@/app/components";

export default function Home() {
  return (
    <main className="flex">
      <ResumeDisplay />
      <ResumeBuilder />
    </main>
  );
}
