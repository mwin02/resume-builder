// import { generatePDF } from "@/app/api/helper/generate";
import { isHTMLToPDFObject } from "@/app/lib/types";
import { NextRequest } from "next/server";

import { HTMLToPDFObject } from "@/app/lib/types";

// const chromium = require("@sparticuz/chromium");
import puppeteer from "puppeteer";

const generatePDF = async (pdfInfo: HTMLToPDFObject) => {
  const htmlContent = pdfInfo.htmlContent;
  const cssContent = pdfInfo.cssContent;

  // const browser = await puppeteer.launch({
  //   args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
  //   defaultViewport: chromium.defaultViewport,
  //   executablePath: await chromium.executablePath(),
  //   headless: chromium.headless,
  //   ignoreHTTPSErrors: true,
  // });
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.addStyleTag(cssContent);
  const pdf = await page.pdf({ format: "A4" });
  await page.close();
  return pdf;
};

export async function POST(request: NextRequest) {
  // const data = await request.json();
  // if (!isHTMLToPDFObject(data)) {
  //   return Response.json(JSON.stringify({ success: false }), {
  //     status: 400,
  //     statusText: "Bad Request",
  //   });
  // }
  // const pdf = await generatePDF(data);
  // const headers = new Headers();
  // headers.set("Content-Type", "application/pdf");
  // headers.set(
  //   "Content-Disposition",
  //   `attachment; filename=${data.filename}.pdf`
  // );
  const data = await request.json();
  if (!isHTMLToPDFObject(data)) {
    return Response.json(JSON.stringify({ success: false }), {
      status: 400,
      statusText: "Bad Request",
    });
  }
  const htmlContent = data.htmlContent;
  const cssContent = data.cssContent;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.addStyleTag(cssContent);
  const pdf = await page.pdf({ format: "A4" });
  console.log("PDF generated successfully");
  await page.close();

  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set(
    "Content-Disposition",
    `attachment; filename=${data.filename}.pdf`
  );

  return new Response(pdf, { status: 200, statusText: "OK", headers });
}
