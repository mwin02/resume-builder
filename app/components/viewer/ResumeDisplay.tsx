import { downloadPDF } from "@/app/lib/pdf_utils";
import { convertResumeToJSX } from "@/app/lib/resume_utils";
import { HTMLToPDFObject, Resume } from "@/app/lib/types";
import ReactDOMServer from "react-dom/server";

export default function ResumeDisplay({ resume }: { resume: Resume }) {
  const resumeHTML = convertResumeToJSX(resume);
  const resumeString = ReactDOMServer.renderToStaticMarkup(resumeHTML);

  const pdfInfo: HTMLToPDFObject = {
    filename: "new_resume.pdf",
    htmlContent: resumeString,
    cssContent: {
      content: `.resume {
  font-family: initial;
  font-size: 12px;
  padding: 50px;
  color: black;
  background: white;
}`,
    },
  };

  console.log(resumeString);

  return (
    <div>
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
