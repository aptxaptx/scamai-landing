import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: Integrate real email provider (e.g., Resend, SendGrid, SES)
    // For now, log payload to server console as a placeholder for an email to ceo@scam.ai
    console.log("[Demo Request] -> ceo@scam.ai", body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}