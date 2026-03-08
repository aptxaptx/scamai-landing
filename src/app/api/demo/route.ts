import { NextResponse } from "next/server";
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Sanitize user input: strip newlines (prevents email header injection) and limit length
function sanitize(str: string | undefined, fallback: string, maxLength = 500): string {
  if (!str || typeof str !== 'string') return fallback;
  return str.replace(/[\r\n]/g, ' ').trim().slice(0, maxLength);
}

// Simple rate limiting: max 5 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.resetTime < now) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    // Rate limit by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
    }

    // Sanitize all user inputs
    const name = sanitize(body.name as string, 'Not provided');
    const company = sanitize(body.company as string, 'Not provided');
    const email = sanitize(body.email as string, 'Not provided');
    const timezone = sanitize(body.timezone as string, 'Not provided');
    const useCase = sanitize(body.useCase as string, 'Not specified');
    const volume = sanitize(body.volume as string, 'Not specified');
    const notes = sanitize(body.notes as string, 'No additional notes', 2000);

    // Log to console for debugging
    console.log("[Demo Request] -> sales@get-reality.com", { name, company, email, useCase });

    // Send email via Resend (only if configured)
    if (!resend) {
      console.log("[Demo Request] Resend not configured, logging request only");
      return NextResponse.json({
        ok: true,
        message: "Request logged successfully (email service not configured)"
      });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'ScamAI Website <noreply@test.get-reality.com>',
        to: ['sales@get-reality.com'],
        cc: ['dennisng@scam.ai', 'benren@scam.ai', 'neo@get-reality.com'],
        subject: `New Demo Request - ${company} - ${useCase}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Demo Request</h2>

            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Timezone:</strong> ${timezone}</p>
            </div>

            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Project Details</h3>
              <p><strong>Primary Use Case:</strong> ${useCase}</p>
              <p><strong>Expected Volume:</strong> ${volume}</p>
              <p><strong>Requirements:</strong> ${notes}</p>
            </div>

            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Next Steps</h3>
              <p>This lead has been submitted through the website demo form. Please follow up to schedule a discovery call.</p>
              <p><strong>Source:</strong> Website Demo Form</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                This email was automatically generated from the ScamAI website demo form.
              </p>
            </div>
          </div>
        `,
        text: `
New Demo Request

Contact Information:
- Name: ${name}
- Company: ${company}
- Email: ${email}
- Timezone: ${timezone}

Project Details:
- Primary Use Case: ${useCase}
- Expected Volume: ${volume}
- Requirements: ${notes}

Next Steps:
This lead has been submitted through the website demo form. Please follow up to schedule a discovery call.

Source: Website Demo Form
Submitted: ${new Date().toLocaleString()}

This email was automatically generated from the ScamAI website demo form.
        `
      });

      if (error) {
        console.error('[Resend] Email failed to send:', error);
        return NextResponse.json({ ok: false, error: 'Failed to send email. Please try again later.' }, { status: 500 });
      }

      console.log('[Resend] Email sent successfully:', data);
      return NextResponse.json({ ok: true, messageId: data?.id });

    } catch (emailError) {
      console.error('[Resend] Error sending email:', emailError);
      return NextResponse.json({ ok: false, error: 'Email service error' }, { status: 500 });
    }

  } catch (err) {
    console.error('[API] Error processing request:', err);
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}