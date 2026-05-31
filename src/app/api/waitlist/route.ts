import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend if API key is present
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const recipientEmail = process.env.WAITLIST_RECIPIENT_EMAIL || "malidhanga@gmail.com";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    console.log(`[Waitlist] New submission: ${email}`);

    if (resend) {
      await resend.emails.send({
        from: "Tazora Waitlist <onboarding@resend.dev>",
        to: recipientEmail,
        subject: "✨ New Tazora Waitlist Registration",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #111827; background-color: #FAF8F5;">
            <div style="border-bottom: 1px solid rgba(139, 94, 60, 0.1); padding-bottom: 20px; margin-bottom: 30px;">
              <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #8B5E3C;">Tazora Operating System</span>
            </div>
            <h2 style="font-size: 24px; font-weight: 800; color: #111827; margin-bottom: 16px;">New Waitlist Request</h2>
            <p style="font-size: 15px; line-height: 1.6; color: #4B5563; margin-bottom: 24px;">
              A new user has requested an early access invitation slot to the Tazora platform.
            </p>
            <div style="background-color: #F3EEE7; padding: 24px; margin-bottom: 30px;">
              <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #8B5E3C; margin: 0 0 8px 0; font-weight: 700;">Email Address</p>
              <a href="mailto:${email}" style="font-size: 18px; font-weight: bold; color: #111827; text-decoration: none;">${email}</a>
            </div>
            <p style="font-size: 12px; color: #9CA3AF;">
              This notification was generated automatically by the Tazora production build server.
            </p>
          </div>
        `,
      });
      console.log(`[Waitlist] Notification email successfully sent to ${recipientEmail}`);
    } else {
      console.warn(
        `[Waitlist] Warning: RESEND_API_KEY environment variable is not defined. Skipping email sending.`
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to submit request.";
    console.error(`[Waitlist] Error in waitlist handler:`, error);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
