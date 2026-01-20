import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  captchaToken: string;
}

// Generate HTML email template (UNCHANGED)
function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #8b5cf6, #6366f1); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">from Muenot Website</p>
      </div>
      <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div style="font-weight: 600; color: #6366f1; font-size: 12px; text-transform: uppercase;">Full Name</div>
          <div>${data.name}</div>
        </div>
        <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div style="font-weight: 600; color: #6366f1; font-size: 12px; text-transform: uppercase;">Email</div>
          <div><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div style="font-weight: 600; color: #6366f1; font-size: 12px; text-transform: uppercase;">Phone</div>
          <div>${data.phone}</div>
        </div>
        ${data.company ? `
        <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div style="font-weight: 600; color: #6366f1; font-size: 12px; text-transform: uppercase;">Company</div>
          <div>${data.company}</div>
        </div>` : ""}
        <div style="margin-bottom: 20px;">
          <div style="font-weight: 600; color: #6366f1; font-size: 12px; text-transform: uppercase;">Message</div>
          <div style="white-space: pre-wrap;">${data.message}</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message, captchaToken } = body;

    if (!name || !email || !phone || !subject || !message || !captchaToken) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // 🔐 ENV VALIDATION (Type-safe)
    const {
      RESEND_API_KEY,
      RESEND_FROM_EMAIL,
      CONTACT_EMAIL,
    } = process.env;

    const missingVars = [];
    if (!RESEND_API_KEY) missingVars.push("RESEND_API_KEY");
    if (!RESEND_FROM_EMAIL) missingVars.push("RESEND_FROM_EMAIL");
    if (!CONTACT_EMAIL) missingVars.push("CONTACT_EMAIL");

    if (missingVars.length > 0) {
      console.error("Missing environment variables:", missingVars.join(", "));
      return NextResponse.json(
        { error: `Server misconfiguration: ${missingVars.join(", ")}` },
        { status: 500 }
      );
    }

    // ✅ From here on, TS knows these are strings
    const resend = new Resend(RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `${subject} - from ${name}`,
      html: generateEmailHTML(body),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

