import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type, details } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    // Build the email HTML template beautifully
    const formName = type === 'wholesale' ? 'Wholesale Proposal Brief' : 'Contact Support Inquiry';
    
    let detailsBody = '';
    if (type === 'wholesale' && details) {
      detailsBody = `
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d4af37; margin: 15px 0; font-family: sans-serif; font-size: 13px;">
          <h3 style="margin-top: 0; color: #111; font-family: Georgia, serif; font-size: 14px;">Production Specifications:</h3>
          <p style="margin: 5px 0;"><strong>Production Title:</strong> ${details.productionTitle || 'N/A'}</p>
          <p style="margin: 5px 0;"><strong>Production Type:</strong> ${details.productionType || 'N/A'}</p>
          <p style="margin: 5px 0;"><strong>Shoot Date:</strong> ${details.shootDate || 'N/A'}</p>
          <p style="margin: 5px 0;"><strong>Prop Volume:</strong> ${details.propVolume || 'N/A'}</p>
          <p style="margin: 5px 0;"><strong>Denominations:</strong> ${Array.isArray(details.denominations) && details.denominations.length > 0 ? details.denominations.join(', ') : 'None Specified'}</p>
          <p style="margin: 5px 0;"><strong>Distressing/Aging Level:</strong> ${details.distressing || 'N/A'}</p>
        </div>
      `;
    }

    const emailBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 8px;">
        <h2 style="color: #000; font-weight: normal; border-bottom: 1px solid #f1f1f1; padding-bottom: 15px; font-size: 20px;">
          ${formName} Received
        </h2>
        <p style="font-size: 14px; font-family: sans-serif; line-height: 1.6; color: #333;">
          A new submission has been received from the <strong>Australian Prop Money</strong> website.
        </p>
        
        <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13px; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; width: 30%; color: #666;"><strong>Sender Name:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #111;"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #666;"><strong>Sender Email:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #111;"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #666;"><strong>Phone Number:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #111;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #666;"><strong>Subject:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #111;">${subject || 'General Inquiry'}</td>
          </tr>
        </table>

        ${detailsBody}

        <div style="font-family: sans-serif; font-size: 13px; color: #111; line-height: 1.6; background-color: #fcfcfc; padding: 15px; border-radius: 6px; border: 1px solid #f0f0f0; margin-top: 15px;">
          <strong>Message / Special Instructions:</strong><br/>
          <p style="margin: 8px 0 0 0; white-space: pre-wrap;">${message || 'No additional message was provided.'}</p>
        </div>

        <p style="font-size: 11px; font-family: sans-serif; color: #999; margin-top: 30px; border-top: 1px solid #f1f1f1; padding-top: 15px; text-align: center;">
          This inquiry was routed securely via Zoho Mail SMTP server integrations.
        </p>
      </div>
    `;

    // Lazy initialization & fail-safe fallback
    if (!smtpUser || !smtpPass || !smtpFrom) {
      console.warn('⚠️ SMTP Integration is not configured. Please define SMTP_USER, SMTP_PASS, and SMTP_FROM in your environment variables. Simulating successful form submission.');
      return NextResponse.json({
        success: true,
        message: 'Form submission simulated successfully. (Zoho Mail SMTP variables not yet fully populated)',
        simulated: true,
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // Use SSL/TLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Send email to administrator
    await transporter.sendMail({
      from: `"${name} (Web form)" <${smtpFrom}>`,
      to: smtpFrom,
      replyTo: email,
      subject: `[Prop Money Web Inquiry] ${subject || 'New Web Submission'}`,
      html: emailBody,
    });

    return NextResponse.json({
      success: true,
      message: 'Email dispatched successfully via Zoho SMTP.',
    });
  } catch (error: any) {
    console.error('❌ Failed to dispatch SMTP email:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error occurred while sending email.',
      },
      { status: 500 }
    );
  }
}
