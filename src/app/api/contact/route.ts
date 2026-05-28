import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECEIVER = process.env.CONTACT_RECEIVER_EMAIL || 'glomechengineeringpvtltd@gmail.com';
const FROM     = process.env.RESEND_FROM_EMAIL      || 'onboarding@resend.dev';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    /* ── 1. Notification email → Glomech inbox ── */
    await resend.emails.send({
      from: `Glomech Contact Form <${FROM}>`,
      to: [RECEIVER],
      replyTo: email,
      subject: `New Enquiry: ${subject || 'General Inquiry'} — from ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <!-- Header -->
          <div style="background:linear-gradient(135deg,#2B1A0E 0%,#7A4A0A 100%);padding:32px 40px;">
            <h1 style="margin:0;color:#F0A500;font-size:22px;font-weight:800;letter-spacing:0.04em;">GLOMECH ENGINEERING</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">New Contact Form Submission</p>
          </div>

          <!-- Body -->
          <div style="padding:36px 40px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;width:140px;">
                  <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af;">Name</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:15px;color:#111827;font-weight:600;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af;">Email</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="mailto:${email}" style="font-size:15px;color:#D4870A;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af;">Subject</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:15px;color:#111827;">${subject || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;vertical-align:top;">
                  <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af;">Message</span>
                </td>
                <td style="padding:14px 0;">
                  <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
                </td>
              </tr>
            </table>

            <div style="margin-top:28px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your Enquiry')}"
                 style="display:inline-block;background:linear-gradient(135deg,#D4870A,#F0A500);color:#fff;text-decoration:none;padding:13px 28px;border-radius:10px;font-weight:700;font-size:14px;letter-spacing:0.02em;">
                Reply to ${name} →
              </a>
            </div>
          </div>

          <div style="background:#f9fafb;padding:20px 40px;border-top:1px solid #f3f4f6;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">This email was sent via the contact form on <strong>glomech.in</strong></p>
          </div>
        </div>
      `,
    });

    /* ── 2. Auto-reply → enquirer's inbox ── */
    await resend.emails.send({
      from: `Glomech Engineering <${FROM}>`,
      to: [email],
      subject: `Thank you for reaching out, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <!-- Header -->
          <div style="background:linear-gradient(135deg,#2B1A0E 0%,#7A4A0A 100%);padding:32px 40px;">
            <h1 style="margin:0;color:#F0A500;font-size:22px;font-weight:800;letter-spacing:0.04em;">GLOMECH ENGINEERING</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Precision · Quality · Trust</p>
          </div>

          <!-- Body -->
          <div style="padding:36px 40px;">
            <h2 style="margin:0 0 16px;font-size:20px;color:#1f2937;">Hi ${name.split(' ')[0]}, thank you for getting in touch!</h2>
            <p style="margin:0 0 16px;font-size:15px;color:#4b5563;line-height:1.7;">
              We've received your enquiry and our team will review it shortly.
              You can expect a response from us within <strong>24 business hours</strong>.
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#4b5563;line-height:1.7;">
              For urgent requirements, please call us directly:
            </p>

            <div style="background:#fef9f0;border:1px solid rgba(212,135,10,0.25);border-radius:10px;padding:20px 24px;margin-bottom:28px;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#D4870A;">Direct Contact</p>
              <p style="margin:0;font-size:16px;color:#1f2937;font-weight:600;">📞 +91 94054 41872</p>
              <p style="margin:4px 0 0;font-size:16px;color:#1f2937;font-weight:600;">📞 +91 99600 41872</p>
            </div>

            <div style="background:#f9fafb;border-left:3px solid #F0A500;padding:16px 20px;border-radius:4px;margin-bottom:28px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af;">Your message</p>
              <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${message.replace(/\n/g, '<br/>')}</p>
            </div>

            <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.6;">
              Warm regards,<br/>
              <strong style="color:#2B1A0E;">The Glomech Engineering Team</strong><br/>
              Talawade, Pune – 411062
            </p>
          </div>

          <div style="background:#f9fafb;padding:20px 40px;border-top:1px solid #f3f4f6;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">
              © ${new Date().getFullYear()} Glomech Engineering Pvt. Ltd. · GST Registered · ISO Compliant · NDT Certified
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API]', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
