import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Returns true if the string looks like random gibberish (bot-generated)
function looksLikeGibberish(str: string): boolean {
  if (!str || str.length < 8) return false;
  // Flag strings with no spaces that are long and have alternating upper/lower (typical bot random strings)
  const hasNoSpaces = !str.includes(" ");
  const hasMixedCase = /[A-Z]/.test(str) && /[a-z]/.test(str);
  const hasNoVowelSequences = !/[aeiouAEIOU]{1}[a-zA-Z]{1,3}[aeiouAEIOU]{1}/.test(str);
  return hasNoSpaces && hasMixedCase && hasNoVowelSequences && str.length > 12;
}

export async function POST(request: Request) {
  const data = await request.json();
  const { name, company, email, services, aiTool, message, fileName, _hp } = data;

  // Honeypot check — bots fill hidden fields, humans don't
  if (_hp && _hp.length > 0) {
    return NextResponse.json({ success: true }); // Silent accept so bots don't retry
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // Gibberish detection — block obvious bot random-string submissions
  if (looksLikeGibberish(name) || (company && looksLikeGibberish(company)) || (aiTool && looksLikeGibberish(aiTool))) {
    return NextResponse.json({ success: true }); // Silent accept
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const serviceList = Array.isArray(services) && services.length
    ? services.join(", ")
    : "Not specified";

  const html = `
    <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; color: #0a0a0a;">
      <div style="padding: 40px 0; border-bottom: 1px solid #e5e5e5;">
        <p style="font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #737373; margin: 0 0 8px;">
          New Project Inquiry
        </p>
        <h1 style="font-size: 28px; font-weight: 700; margin: 0; letter-spacing: -0.03em;">
          ${name}
        </h1>
        ${company ? `<p style="margin: 4px 0 0; color: #737373; font-size: 14px;">${company}</p>` : ""}
      </div>

      <div style="padding: 32px 0; border-bottom: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Email</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #0a0a0a;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">Services</td>
            <td style="padding: 8px 0; font-size: 14px;">${serviceList}</td>
          </tr>
          ${aiTool ? `<tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">AI Tool</td>
            <td style="padding: 8px 0; font-size: 14px;">${aiTool}</td>
          </tr>` : ""}
          ${fileName ? `<tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">File</td>
            <td style="padding: 8px 0; font-size: 14px;">${fileName}</td>
          </tr>` : ""}
        </table>
      </div>

      ${message ? `
      <div style="padding: 32px 0; border-bottom: 1px solid #e5e5e5;">
        <p style="font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px;">Project Details</p>
        <p style="font-size: 15px; line-height: 1.6; margin: 0; color: #404040;">${message.replace(/\n/g, "<br>")}</p>
      </div>` : ""}

      <div style="padding: 24px 0;">
        <p style="font-size: 11px; color: #b4b4b4; margin: 0;">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Evoke Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Evoke Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your brief — Evoke",
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 520px; margin: 0 auto; color: #0a0a0a;">
          <div style="padding: 40px 0 24px;">
            <p style="font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #737373; margin: 0 0 16px;">Evoke Studio</p>
            <h1 style="font-size: 26px; font-weight: 700; margin: 0; letter-spacing: -0.03em; line-height: 1.2;">Brief received, ${name.split(" ")[0]}.</h1>
          </div>
          <p style="font-size: 15px; line-height: 1.7; color: #404040; margin: 0 0 24px;">
            We've got your project inquiry and will review it within one business day.
            You'll hear back with a clear brief and quote — no fluff.
          </p>
          <p style="font-size: 13px; color: #737373; line-height: 1.6; margin: 0 0 32px; padding: 20px; background: #f5f5f5;">
            <strong style="color: #0a0a0a;">Services requested:</strong> ${serviceList}<br>
            ${aiTool ? `<strong style="color: #0a0a0a;">AI tool:</strong> ${aiTool}<br>` : ""}
          </p>
          <p style="font-size: 13px; color: #737373; margin: 0;">
            Questions? Reply to this email or reach us directly at
            <a href="mailto:work@madebyevoke.com" style="color: #0a0a0a;">work@madebyevoke.com</a>
          </p>
          <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
            <p style="font-size: 11px; color: #b4b4b4; margin: 0; letter-spacing: 0.05em;">Evoke Studio — From pixel-locked AI concepts to infinite vector authority.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
