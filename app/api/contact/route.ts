import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripCRLF(str: string): string {
  return str.replace(/[\r\n]/g, " ").trim();
}

function looksLikeGibberish(str: string): boolean {
  if (!str || str.length < 8) return false;
  const hasNoSpaces = !str.includes(" ");
  const hasMixedCase = /[A-Z]/.test(str) && /[a-z]/.test(str);
  const hasNoVowelSequences = !/[aeiouAEIOU]{1}[a-zA-Z]{1,3}[aeiouAEIOU]{1}/.test(str);
  return hasNoSpaces && hasMixedCase && hasNoVowelSequences && str.length > 12;
}

export async function POST(request: Request) {
  const data = await request.json();
  const { name, company, email, services, aiTool, message, fileName, _hp } = data;

  if (_hp && _hp.length > 0) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (looksLikeGibberish(name) || (company && looksLikeGibberish(company)) || (aiTool && looksLikeGibberish(aiTool))) {
    return NextResponse.json({ success: true });
  }

  const safeName = escapeHtml(stripCRLF(name));
  const safeCompany = company ? escapeHtml(stripCRLF(company)) : "";
  const safeEmail = escapeHtml(email);
  const safeAiTool = aiTool ? escapeHtml(aiTool) : "";
  const safeFileName = fileName ? escapeHtml(fileName) : "";
  const safeMessage = message ? escapeHtml(message) : "";
  const safeServiceList = Array.isArray(services) && services.length
    ? services.map((s: string) => escapeHtml(s)).join(", ")
    : "Not specified";

  const safeFirstName = safeName.split(" ")[0];
  const resend = new Resend(process.env.RESEND_API_KEY);
  const FROM = "Evoke Contact <work@madebyevoke.com>";
  const TO = "work@madebyevoke.com";

  const inquiryHtml = `
    <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; color: #0a0a0a;">
      <div style="padding: 40px 0; border-bottom: 1px solid #e5e5e5;">
        <p style="font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #737373; margin: 0 0 8px;">New Project Inquiry</p>
        <h1 style="font-size: 28px; font-weight: 700; margin: 0; letter-spacing: -0.03em;">${safeName}</h1>
        ${safeCompany ? `<p style="margin: 4px 0 0; color: #737373; font-size: 14px;">${safeCompany}</p>` : ""}
      </div>
      <div style="padding: 32px 0; border-bottom: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Email</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #0a0a0a;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">Services</td>
            <td style="padding: 8px 0; font-size: 14px;">${safeServiceList}</td>
          </tr>
          ${safeAiTool ? `<tr><td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">AI Tool</td><td style="padding: 8px 0; font-size: 14px;">${safeAiTool}</td></tr>` : ""}
          ${safeFileName ? `<tr><td style="padding: 8px 0; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">File</td><td style="padding: 8px 0; font-size: 14px;">${safeFileName}</td></tr>` : ""}
        </table>
      </div>
      ${safeMessage ? `<div style="padding: 32px 0; border-bottom: 1px solid #e5e5e5;"><p style="font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px;">Project Details</p><p style="font-size: 15px; line-height: 1.6; margin: 0; color: #404040;">${safeMessage.replace(/\n/g, "<br>")}</p></div>` : ""}
      <div style="padding: 24px 0;">
        <p style="font-size: 11px; color: #b4b4b4; margin: 0;">Reply directly to this email to respond to ${safeName}.</p>
      </div>
    </div>
  `;

  const autoReplyHtml = `
    <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 520px; margin: 0 auto; color: #0a0a0a;">
      <div style="padding: 40px 0 24px;">
        <p style="font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #737373; margin: 0 0 16px;">Evoke Studio</p>
        <h1 style="font-size: 26px; font-weight: 700; margin: 0; letter-spacing: -0.03em; line-height: 1.2;">Brief received, ${safeFirstName}.</h1>
      </div>
      <p style="font-size: 15px; line-height: 1.7; color: #404040; margin: 0 0 24px;">We've got your project inquiry and will review it within one business day. You'll hear back with a clear brief and quote — no fluff.</p>
      <p style="font-size: 13px; color: #737373; line-height: 1.6; margin: 0 0 32px; padding: 20px; background: #f5f5f5;">
        <strong style="color: #0a0a0a;">Services requested:</strong> ${safeServiceList}<br>
        ${safeAiTool ? `<strong style="color: #0a0a0a;">AI tool:</strong> ${safeAiTool}<br>` : ""}
      </p>
      <p style="font-size: 13px; color: #737373; margin: 0;">Questions? Reply to this email or reach us directly at <a href="mailto:work@madebyevoke.com" style="color: #0a0a0a;">work@madebyevoke.com</a></p>
      <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
        <p style="font-size: 11px; color: #b4b4b4; margin: 0; letter-spacing: 0.05em;">Evoke Studio — From pixel-locked AI concepts to infinite vector authority.</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New inquiry from ${safeName}${safeCompany ? ` — ${safeCompany}` : ""}`,
      html: inquiryHtml,
    });

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We've received your brief — Evoke",
      html: autoReplyHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
