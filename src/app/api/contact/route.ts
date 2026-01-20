import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

/* ---------- Types ---------- */

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  captchaToken: string;
}

/* ---------- Helpers ---------- */

// ✅ Type-safe env resolver (THIS fixes the build issue)
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Generate HTML email template
function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; color:#333; max-width:600px; margin:auto;">
      <h2>📬 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <pre>${data.message}</pre>
    </body>
    </html>
  `;
}

/* ---------- API Route ---------- */

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message, captchaToken } = body;

    // Basic validation
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

    // 🔐 ENV VARIABLES (TypeScript guaranteed strings)
    const RESEND_API_KEY = requireEnv("RESEND_API_KEY");
    const RESEND_FROM_EMAIL = requireEnv("RESEND_FROM_EMAIL");
    const CONTACT_EMAIL = requireEnv("CONTACT_EMAIL");

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
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
