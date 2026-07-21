import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.YOUR_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New Portfolio Message</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p style="color: #334155; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Reply directly to this email to respond to ${name} at ${email}
          </p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}