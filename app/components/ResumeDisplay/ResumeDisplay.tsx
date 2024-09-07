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
    <div className="basis-1/2 max-h-screen overflow-scroll p-7">
      <button
        onClick={() => {
          downloadPDF(pdfInfo);
        }}
      >
        Download Resume
      </button>
      <div className="resume-container">{resumeHTML}</div>
    </div>
  );
}
