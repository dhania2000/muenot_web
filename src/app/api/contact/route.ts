import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

/* -------------------------------------------------
   🔐 ENV HELPER (REQUIRED – fixes your build error)
-------------------------------------------------- */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

/* -------------------------------------------------
   Types
-------------------------------------------------- */
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  captchaToken: string;
}

/* -------------------------------------------------
   reCAPTCHA Verification
-------------------------------------------------- */
async function verifyCaptcha(token: string): Promise<boolean> {
  const secret = requireEnv("RECAPTCHA_SECRET_KEY");

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

/* -------------------------------------------------
   Email Template
-------------------------------------------------- */
function generateEmailHTML(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
  <h2>📬 New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Phone:</strong> ${data.phone}</p>
  ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
  <p><strong>Subject:</strong> ${data.subject}</p>
  <p><strong>Message:</strong></p>
  <p>${data.message.replace(/\n/g, "<br />")}</p>
</body>
</html>
`;
}

/* -------------------------------------------------
   POST Handler
-------------------------------------------------- */
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

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    /* -------------------------------------------------
       Email Config
    -------------------------------------------------- */
    const resend = new Resend(requireEnv("RESEND_API_KEY"));

    const { error } = await resend.emails.send({
      from: requireEnv("RESEND_FROM_EMAIL"),
      to: [requireEnv("CONTACT_EMAIL")],
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
