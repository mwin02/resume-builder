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
