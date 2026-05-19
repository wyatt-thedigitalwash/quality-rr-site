import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting: IP -> { count, resetTime }
const rateMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 5 * 60 * 1000; // 5 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  // Rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please wait a few minutes." },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { success: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const recipientEmails = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
  if (recipientEmails.length === 0) {
    console.error("CONTACT_TO_EMAIL is not configured");
    return NextResponse.json(
      { success: false, error: "Recipient email not configured." },
      { status: 500 }
    );
  }

  let body: {
    fullName?: string;
    phone?: string;
    email?: string;
    projectType?: string;
    message?: string;
    source?: string;
    website?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: silently return success if filled
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const { fullName, phone, email, projectType, message, source } = body;

  // Validation with length limits
  if (!fullName || !fullName.trim() || fullName.length > 100) {
    return NextResponse.json(
      { success: false, error: "Full name is required (max 100 characters)." },
      { status: 400 }
    );
  }

  if (!email || !email.trim() || email.length > 254) {
    return NextResponse.json(
      { success: false, error: "Email is required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, error: "Email format is invalid." },
      { status: 400 }
    );
  }

  if (phone && phone.length > 30) {
    return NextResponse.json(
      { success: false, error: "Phone number is too long." },
      { status: 400 }
    );
  }

  if (projectType && projectType.length > 100) {
    return NextResponse.json(
      { success: false, error: "Project type is too long." },
      { status: 400 }
    );
  }

  const isLandingPageSource = source && source.startsWith("landing-page-");

  if (!isLandingPageSource && (!message || !message.trim())) {
    return NextResponse.json(
      { success: false, error: "Message is required." },
      { status: 400 }
    );
  }

  if (message && message.length > 2000) {
    return NextResponse.json(
      { success: false, error: "Message is too long (max 2000 characters)." },
      { status: 400 }
    );
  }

  // Sanitize all inputs for HTML email body
  const safeName = sanitize(fullName.trim());
  const safePhone = sanitize((phone || "").trim());
  const safeEmail = sanitize(email.trim());
  const safeProjectType = sanitize((projectType || "").trim());
  const safeMessage =
    sanitize((message || "").trim()).replace(/\n/g, "<br>") ||
    "No message provided";

  const subject = isLandingPageSource
    ? `New Landing Page Lead from ${safeName} (via ${source})`
    : `New Contact Form Submission from ${safeName}`;
  const heading = isLandingPageSource
    ? "New Landing Page Lead"
    : "New Contact Form Submission";

  const htmlBody = `
    <h2 style="font-family: sans-serif; color: #024B7D; margin-bottom: 24px;">${heading}</h2>
    ${source ? `<p style="font-family: sans-serif; font-size: 12px; color: #72665A; margin-bottom: 16px;">Source: ${sanitize(source)}</p>` : ""}
    <table style="font-family: sans-serif; font-size: 14px; color: #252525; border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee; font-weight: 600; width: 140px; vertical-align: top;">Name</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee;">${safeName}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Phone</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee;">${safePhone || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Email</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee;">${safeEmail}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Project Type</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #eee;">${safeProjectType || "Not specified"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; font-weight: 600; vertical-align: top;">Message</td>
        <td style="padding: 12px 16px;">${safeMessage}</td>
      </tr>
    </table>
  `;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Quality Restoration & Renovations <noreply@quality-rr.com>",
      to: recipientEmails,
      replyTo: email.trim(),
      subject,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
