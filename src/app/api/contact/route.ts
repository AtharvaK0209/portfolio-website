import { NextResponse } from "next/server";
import { createRateLimiter, getClientIp } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory sliding window rate limiter: 5 requests per 10 minutes per IP
const contactRateLimiter = createRateLimiter({
  limit: 5,
  windowMs: 10 * 60 * 1000,
});

export async function POST(req: Request) {
  try {
    // 0. Rate limiting check (5 req/10min per IP)
    const ip = getClientIp(req);
    const rateLimit = contactRateLimiter.check(ip);
    if (!rateLimit.success) {
      const retryAfterSeconds = Math.max(1, Math.ceil((rateLimit.resetTime - Date.now()) / 1000));
      return NextResponse.json(
        {
          error:
            "Rate limit exceeded. You have submitted several messages recently. Please wait before submitting another message or contact Atharva directly at atharvak0209@gmail.com.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": retryAfterSeconds.toString(),
            "X-RateLimit-Limit": rateLimit.limit.toString(),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid Content-Type. Expected application/json." },
        { status: 400 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Malformed JSON payload." },
        { status: 400 }
      );
    }

    // 1. Honeypot check for spam mitigation
    if (body.hp_website && typeof body.hp_website === "string" && body.hp_website.trim().length > 0) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Extract and sanitize fields
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // 3. Field validation
    if (!name || name.length < 1 || name.length > 100) {
      return NextResponse.json(
        { error: "Name is required and must be between 1 and 100 characters." },
        { status: 400 }
      );
    }

    if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!subject || subject.length < 1 || subject.length > 150) {
      return NextResponse.json(
        { error: "Subject is required and must be between 1 and 150 characters." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    // 4. Provider configuration check
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "atharvak0209@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      // Credentials not configured. Fail explicitly rather than faking delivery.
      return NextResponse.json(
        {
          error: "The contact delivery service is not configured with an email provider. Please contact Atharva directly at atharvak0209@gmail.com.",
        },
        { status: 503 }
      );
    }

    // 5. Dispatch email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio Inquiry] ${subject}`,
        text: `From: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("Failed to send email via Resend API status:", resendResponse.status, errorData?.message || "");
      return NextResponse.json(
        {
          error: "Email delivery service encountered an issue. Please reach out directly to atharvak0209@gmail.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error in /api/contact:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      { error: "Internal server error. Please try again later or email directly." },
      { status: 500 }
    );
  }
}
