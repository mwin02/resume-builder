import { HTMLToPDFObject } from "@/app/lib/types";
import puppeteer from "puppeteer";
export const generatePDF = async (pdfInfo: HTMLToPDFObject) => {
  const htmlContent = pdfInfo.htmlContent;
  const cssContent = pdfInfo.cssContent;

  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.addStyleTag(cssContent);
  await page.emulateMediaType("print");
  const pdf = await page.pdf({ format: "A4" });
  // await page.close();
  return pdf;
};
