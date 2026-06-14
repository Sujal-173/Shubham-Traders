import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const formData = await request.formData();
  const lead = Object.fromEntries(formData.entries());
  const required = ["name", "phone"];

  if (required.some((key) => !String(lead[key] || "").trim())) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || "Shubhamsolarau@gmail.com";

  if (resendKey) {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: "Shubham Traders Website <leads@shubhamtraderssolar.com>",
      to,
      subject: `New solar lead: ${lead.name}`,
      text: Object.entries(lead).map(([key, value]) => `${key}: ${value}`).join("\n")
    });
  } else {
    console.log("Lead received without RESEND_API_KEY", lead);
  }

  return NextResponse.json({ ok: true });
}
