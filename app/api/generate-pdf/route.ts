import { NextRequest } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const htmlContent = data["resume"];
  const styleContent = data["styling"];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.addStyleTag(styleContent);
  const pdf = await page.pdf({ format: "A4" });
  console.log("PDF generated successfully");
  await page.close();

  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set(
    "Content-Disposition",
    "attachment; filename=generated-resume.pdf"
  );

  return new Response(pdf, { status: 200, statusText: "OK", headers });
}
