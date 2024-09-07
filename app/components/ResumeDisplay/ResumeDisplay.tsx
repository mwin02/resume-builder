import { convertResumeToJSX, downloadPDF } from "@/app/lib/util";
import { HTMLToPDFObject } from "@/app/lib/types";
import ReactDOMServer from "react-dom/server";
import { useResumeContext } from "@/app/lib/context";
import { useEffect, useState } from "react";

const EmptyHTML = <></>;
const EmptyPDFInfo: HTMLToPDFObject = {
  filename: "",
  htmlContent: "",
  cssContent: undefined,
};
export function ResumeDisplay() {
  const { resume } = useResumeContext();

  // const [resumeHTML, setResumeHTML] = useState(EmptyHTML);
  // const [pdfInfo, setPDFInfo] = useState(EmptyPDFInfo);

  // useEffect(() => {
  //   const newResumeHTML = convertResumeToJSX(resume);
  //   setResumeHTML(newResumeHTML);
  //   const resumeString = ReactDOMServer.renderToStaticMarkup(resumeHTML);
  //   const newPDFInfo: HTMLToPDFObject = {
  //     filename: "new_resume.pdf",
  //     htmlContent: resumeString,
  //     cssContent: {
  //       content: `.resume {font-family: initial;font-size: 12px; padding: 50px;color: black;background: white;}`,
  //     },
  //   };
  //   setPDFInfo(newPDFInfo);
  // }, [resume]);

  const resumeHTML = convertResumeToJSX(resume);
  const resumeString = ReactDOMServer.renderToStaticMarkup(resumeHTML);
  const pdfInfo: HTMLToPDFObject = {
    filename: "new_resume.pdf",
    htmlContent: resumeString,
    cssContent: {
      content: `.resume {font-family: initial;font-size: 12px; padding: 50px;color: black;background: white;}`,
    },
  };

  return (
    <div className="basis-1/2 h-screen overflow-scroll p-7 flex flex-col justify-center items-center">
      <button
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-3"
        onClick={() => {
          downloadPDF(pdfInfo);
        }}
      >
        Download Resume
      </button>
      {resumeHTML}
    </div>
  );
}
