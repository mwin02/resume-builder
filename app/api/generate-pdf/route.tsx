import { generatePDF } from "@/app/api/helper/generate";
import { isHTMLToPDFObject } from "@/app/lib/types";
import { NextRequest } from "next/server";

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
