"use client";
import Image from "next/image";

const ReactDOMServer = require("react-dom/server");

const sampleResume = (
  <html>
    <head></head>
    <body>
      <h2>Myo Zaw Win</h2>
      <p>
        San Diego, California | (858) 319-9799 | mwin@ucsd.edu |
        https://www.mwin.dev
      </p>
      <p>
        Recent graduate from University of California – San Diego, graduating
        Magna Cum Laude with a Bachelors in Computer Science. Currently looking
        for a role in software or web development, open to full stack
        development, backend development or front-end development. Strong
        educational background in software development and database systems
        principles along with excellent coding skills, critical thinking skills,
        communication skills and collaborative skills.
      </p>
      <h3>EDUCATION</h3>
      <p>University of California, San Diego</p>
      <h3>WORK EXPERIENCE</h3>
      <p>
        University of California San Diego, Computer Science & Engineering Tutor
      </p>
      <ul>
        <li>
          Provided instructional assistance for an upper division C++ Data
          Structures and Algorithms course with over 300 enrolled students,
          boosting student average grade by a grade level
        </li>
      </ul>
      <ul>
        <li>
          Tested and optimized course material and assignments, finding and
          helping debug several bugs in the course’s programming assignments
        </li>
      </ul>
    </body>
  </html>
);

export default function Home() {
  const downloadPDF = () => {
    const pdfString = ReactDOMServer.renderToString(sampleResume);

    fetch("/api/generate-pdf", {
      method: "POST",
      body: JSON.stringify({
        resume: pdfString,
        styling: { content: "body {padding: 40px}" },
      }),
      headers: {
        Accept: "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "generated-resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      });
  };

  return (
    <main>
      Test Page
      <button onClick={downloadPDF}>Download Resume</button>
    </main>
  );
}
