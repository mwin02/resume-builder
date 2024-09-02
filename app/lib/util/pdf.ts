import { HTMLToPDFObject } from "@/app/lib/types/util";
import { Resume } from "@/app/lib/types/resume";

export const downloadPDF = (pdfInfo: HTMLToPDFObject) => {
  fetch("/api/generate-pdf", {
    method: "POST",
    body: JSON.stringify(pdfInfo),
    headers: {
      Accept: "application/pdf",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(
          "Something went wrong while generating your PDF File. Please Try Again"
        );
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${pdfInfo.filename}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    })
    .catch((err) => {
      console.log(err);
    });
};
