import { downloadPDF } from "@/app/lib/util/pdf";
import { convertResumeToJSX } from "@/app/lib/util/resume";
import { Resume } from "@/app/lib/types/resume";
import { HTMLToPDFObject } from "@/app/lib/types/util";
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
