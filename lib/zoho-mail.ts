import nodemailer from 'nodemailer';

export const SITE_CANONICAL_EMAIL = 'info@australianpropmoney.org';

export interface ZohoMailOptions {
  to?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
  senderLabel?: string;
}

/**
 * Creates a configured Nodemailer transporter for Zoho Mail.
 * Supports port 465 (SSL default) or port 587 (STARTTLS).
 */
export function createZohoTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.zoho.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE !== undefined 
    ? process.env.SMTP_SECURE === 'true' 
    : port === 465;

  const user = process.env.SMTP_USER || process.env.SMTP_FROM || SITE_CANONICAL_EMAIL;
  const pass = process.env.SMTP_PASS;

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

/**
 * Dispatches an instant high-priority email notification to Zoho Mail.
 * Uses urgent headers to trigger immediate push notifications on the Zoho Mail app.
 */
export async function sendZohoMail(options: ZohoMailOptions): Promise<{ success: boolean; messageId?: string; simulated?: boolean; error?: string }> {
  const recipient = options.to || process.env.NOTIFICATION_EMAIL || SITE_CANONICAL_EMAIL;
  const user = process.env.SMTP_USER || process.env.SMTP_FROM || SITE_CANONICAL_EMAIL;
  const senderLabel = options.senderLabel || 'Australian Prop Money';

  const transporter = createZohoTransporter();

  // If SMTP_PASS is not yet configured in Vercel, record the notification safely
  if (!transporter) {
    console.warn(`[Zoho Mail Alert] SMTP_PASS not set in Vercel environment variables. Email to ${recipient} simulated. Subject: "${options.subject}"`);
    return {
      success: true,
      simulated: true,
      error: 'SMTP_PASS not configured in Vercel environment variables.',
    };
  }

  const messageId = `<${Date.now()}.${Math.random().toString(36).substring(2, 9)}@australianpropmoney.org>`;

  const mailOptions = {
    from: `"${senderLabel}" <${user}>`,
    to: recipient,
    replyTo: options.replyTo || user,
    subject: options.subject,
    html: options.html,
    text: options.text,
    headers: {
      'Message-ID': messageId,
      'X-Priority': '1',
      'Priority': 'urgent',
      'Importance': 'high',
      'X-MSMail-Priority': 'High',
      'X-Mailer': 'Zoho Mail Instant Gateway / APM Studio',
      'X-Auto-Response-Suppress': 'OOF, AutoReply',
    },
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ [Zoho Mail] Instant notification dispatched to ${recipient} [Message ID: ${info.messageId}]`);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error('❌ [Zoho Mail] Failed to send email via Zoho SMTP:', err);
    return { success: false, error: err.message || 'Zoho SMTP dispatch failed' };
  }
}
