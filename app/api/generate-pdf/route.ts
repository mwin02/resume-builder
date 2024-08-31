// import { generatePDF } from "@/app/api/helper/generate";
import { isHTMLToPDFObject } from "@/app/lib/types";
import { NextRequest } from "next/server";

import puppeteer from "puppeteer";
import { HTMLToPDFObject } from "@/app/lib/types";

export const generatePDF = async (pdfInfo: HTMLToPDFObject) => {
  const htmlContent = pdfInfo.htmlContent;
  const cssContent = pdfInfo.cssContent;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.addStyleTag(cssContent);
  const pdf = await page.pdf({ format: "A4" });
  await page.close();
  return pdf;
};

export async function POST(request: NextRequest) {
  const data = await request.json();
  if (!isHTMLToPDFObject(data)) {
    return Response.json(JSON.stringify({ success: false }), {
      status: 400,
      statusText: "Bad Request",
    });
  }
  const pdf = await generatePDF(data);
  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set(
    "Content-Disposition",
    `attachment; filename=${data.filename}.pdf`
  );

  return new Response(pdf, { status: 200, statusText: "OK", headers });
}
