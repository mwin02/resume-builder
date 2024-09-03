import { downloadPDF } from "@/app/lib/util/pdf";
import { convertResumeToJSX } from "@/app/lib/util/resume";
import { HTMLToPDFObject } from "@/app/lib/types/util";
import ReactDOMServer from "react-dom/server";
import { useResumeContext } from "@/app/lib/context";

export default function ResumeDisplay() {
  const { resume } = useResumeContext();
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
