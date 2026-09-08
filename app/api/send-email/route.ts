import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SITE_CANONICAL_EMAIL = 'info@australianpropmoney.org';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type, details } = body;

    // Read environment variables with smart defaults
    const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    
    // Explicitly parse SMTP_SECURE if provided, else default to true for port 465
    const smtpSecureVal = process.env.SMTP_SECURE;
    const smtpSecure = smtpSecureVal !== undefined ? (smtpSecureVal === 'true') : (smtpPort === 465);

    const smtpUser = process.env.SMTP_USER || process.env.SMTP_FROM || SITE_CANONICAL_EMAIL;
    const smtpPass = process.env.SMTP_PASS;
    const siteRecipient = process.env.CONTACT_EMAIL || process.env.ORDER_EMAIL || SITE_CANONICAL_EMAIL;

    // Determine subject and sender label based on submission type
    let emailSubject = `[Prop Money Support] ${subject || 'New Web Submission'}`;
    let senderPrefix = 'Prop Money Support';

    if (type === 'wholesale') {
      senderPrefix = '🚨 WHOLESALE PROPOSAL';
      emailSubject = `🚨 [WHOLESALE INQUIRY] ${details?.productionTitle ? `${details.productionTitle} - ` : ''}${name || 'Film Production Studio'}`;
    } else if (type === 'order') {
      const orderId = details?.orderId || `AMP-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderTotal = details?.total ? `$${Number(details.total).toFixed(2)} AUD` : '';
      senderPrefix = `🚨 NEW ORDER #${orderId}`;
      emailSubject = `🚨 [NEW ORDER RECEIVED] #${orderId} • ${orderTotal} • ${name || 'Customer'}`;
    } else if (type === 'newsletter') {
      senderPrefix = 'VIP Newsletter';
      emailSubject = `[VIP Newsletter Subscriber] New Signup: ${email}`;
    }

    // Build the email HTML template beautifully based on submission type
    let detailsBody = '';

    if (type === 'wholesale' && details) {
      detailsBody = `
        <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #d4af37; margin: 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #111; font-family: Georgia, serif; font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 8px;">🎬 Creative Production Brief:</h3>
          <p style="margin: 6px 0;"><strong>Production Title:</strong> ${details.productionTitle || 'N/A'}</p>
          <p style="margin: 6px 0;"><strong>Production Type:</strong> ${details.productionType || 'N/A'}</p>
          <p style="margin: 6px 0;"><strong>Estimated Shoot Date:</strong> ${details.shootDate || 'N/A'}</p>
          <p style="margin: 6px 0;"><strong>Prop Volume Required:</strong> ${details.propVolume || 'N/A'}</p>
          <p style="margin: 6px 0;"><strong>Denominations:</strong> ${Array.isArray(details.denominations) && details.denominations.length > 0 ? details.denominations.join(', ') : 'None Specified'}</p>
          <p style="margin: 6px 0;"><strong>Distressing/Aging Treatment:</strong> ${details.distressing || 'N/A'}</p>
        </div>
      `;
    } else if (type === 'order' && details) {
      const itemsList = Array.isArray(details.items) 
        ? details.items.map((item: any) => {
            const itemOptions = [];
            if (item.options?.aging) itemOptions.push(`Treatment: ${item.options.aging}`);
            if (item.options?.band) itemOptions.push(`Band: ${item.options.band}`);
            if (item.options?.customSerial === 'Custom Specified') {
              itemOptions.push(`Serial: ${item.options.serialText || 'Specified'}`);
            }
            const optionsStr = itemOptions.length > 0 ? `<div style="font-size:11px; color:#666; margin-top:2px;">${itemOptions.join(' | ')}</div>` : '';
            const price = item.priceAtTimeOfAdding ?? item.product?.price ?? 0;
            return `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px;">
                  <strong style="color:#000;">${item.product?.name || 'Replica Note Stack'}</strong>
                  ${optionsStr}
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px;">
                  x${item.quantity}
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: bold;">
                  $${(price * item.quantity).toFixed(2)} AUD
                </td>
              </tr>
            `;
          }).join('')
        : '<tr><td colspan="3" style="padding:10px; text-align:center;">No items specified</td></tr>';

      detailsBody = `
        <div style="margin: 20px 0;">
          <h3 style="color: #000; font-family: Georgia, serif; font-size: 16px; border-bottom: 2px solid #d4af37; padding-bottom: 6px; margin-bottom: 12px;">📦 Order Summary (ID: ${details.orderId || 'N/A'}):</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 10px; text-align: left; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Prop Description</th>
                <th style="padding: 10px; text-align: center; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; width: 15%;">Qty</th>
                <th style="padding: 10px; text-align: right; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; width: 25%;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsList}
            </tbody>
          </table>

          <div style="background-color: #fcfcfc; border: 1px solid #eee; padding: 15px; border-radius: 6px; font-family: sans-serif; font-size: 13px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span style="color:#555;">Subtotal:</span>
              <strong style="margin-left: auto;">$${(details.subtotal || 0).toFixed(2)} AUD</strong>
            </div>
            ${details.discountAmount > 0 ? `
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px; color: #b12704;">
              <span>Discount (${details.discountPercentage}% ${details.couponCode ? '- ' + details.couponCode : ''}):</span>
              <strong style="margin-left: auto;">-$${Number(details.discountAmount).toFixed(2)} AUD</strong>
            </div>` : ''}
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span style="color:#555;">Express Secured Courier:</span>
              <strong style="margin-left: auto;">${details.shippingCost === 0 ? 'FREE' : `$${Number(details.shippingCost).toFixed(2)} AUD`}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid #ddd; padding-top: 8px; margin-top: 8px; font-size: 15px;">
              <strong>TOTAL PAYABLE:</strong>
              <strong style="margin-left: auto; color: #d4af37;">$${(details.total || 0).toFixed(2)} AUD</strong>
            </div>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #111; margin: 15px 0; font-family: sans-serif; font-size: 13px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 13px;">Payment Method: <span style="text-transform: uppercase; color: #d4af37; font-weight: bold;">${details.paymentMethod || 'N/A'}</span></h4>
            ${details.paymentMethod === 'crypto' ? `<pre style="margin: 0; font-family: monospace; white-space: pre-wrap; font-size: 11px; background-color: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333;">${details.paymentInstructions || 'None provided'}</pre>` : `<p style="margin: 4px 0; color: #555;">${details.paymentInstructions || 'Settlement instructions pending manual review.'}</p>`}
          </div>

          <div style="background-color: #fafafa; border: 1px solid #eee; padding: 15px; border-radius: 6px; font-family: sans-serif; font-size: 13px; margin-top: 15px;">
            <h4 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 14px; color: #111;">📍 Shipping Specifics & Requisitioner:</h4>
            <p style="margin: 4px 0;"><strong>Name:</strong> ${details.shippingInfo?.firstName || ''} ${details.shippingInfo?.lastName || ''}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${details.shippingInfo?.email || ''}" style="color: #d4af37; font-weight: bold;">${details.shippingInfo?.email || 'N/A'}</a></p>
            <p style="margin: 4px 0;"><strong>Phone:</strong> <a href="tel:${details.shippingInfo?.phone || ''}" style="color: #111; font-weight: bold;">${details.shippingInfo?.phone || 'N/A'}</a></p>
            <p style="margin: 4px 0;"><strong>Address:</strong> ${details.shippingInfo?.addressLine1 || ''}${details.shippingInfo?.addressLine2 ? ', ' + details.shippingInfo.addressLine2 : ''}</p>
            <p style="margin: 4px 0;"><strong>Suburb/City, State, Postcode:</strong> ${details.shippingInfo?.city || ''}, ${details.shippingInfo?.state || ''} ${details.shippingInfo?.postcode || ''}</p>
            <p style="margin: 4px 0;"><strong>Production/Studio Name:</strong> ${details.shippingInfo?.productionName || 'Private Production / Not Provided'}</p>
          </div>
        </div>
      `;
    }

    const emailBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 25px 30px; border-radius: 12px; background-color: #ffffff; color: #111;">
        <div style="border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h2 style="color: #000; font-family: Georgia, serif; font-weight: normal; font-size: 22px; margin: 0 0 4px 0;">
              🇦🇺 Australian Prop Money
            </h2>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; font-family: monospace;">
              Official Studio Dispatch Gateway • ${SITE_CANONICAL_EMAIL}
            </span>
          </div>
        </div>
        
        <div style="background-color: #fff8e6; border: 1px solid #f0dfa8; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 13px; color: #7a5c00;">
          <strong>🔔 Instant Notification Alert:</strong> A new high-priority ${type || 'customer'} inquiry has been submitted through the live website.
        </div>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 15px 0;">
          <tbody>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; width: 32%; color: #666;"><strong>Sender Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111;"><strong>${name || 'Anonymous Visitor'}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Sender Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111;">
                <a href="mailto:${email}" style="color: #d4af37; text-decoration: none; font-weight: bold;">${email}</a>
                <span style="font-size: 11px; color: #888; margin-left: 6px;">(Click to reply)</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Form Category:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111; text-transform: uppercase; font-weight: bold; font-size: 11px; letter-spacing: 0.05em; color: #d4af37;">${type || 'General'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-weight: 600;">${subject || 'General Inquiry'}</td>
            </tr>
            ${details?.requisitionMethod ? `
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Dispatch Channel:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-weight: bold; color: ${details.requisitionMethod === 'whatsapp' ? '#25D366' : '#d4af37'}; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">${details.requisitionMethod}</td>
            </tr>
            ` : ''}
          </tbody>
        </table>

        ${detailsBody}

        ${message ? `
        <div style="font-size: 13px; color: #111; line-height: 1.6; background-color: #fbfbfb; padding: 16px; border-radius: 8px; border: 1px solid #eee; margin-top: 15px;">
          <strong style="color: #000; display: block; margin-bottom: 6px;">💬 Customer Message / Special Instructions:</strong>
          <p style="margin: 0; white-space: pre-wrap; font-size: 13px; color: #333; line-height: 1.6;">${message}</p>
        </div>` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888; text-align: center; line-height: 1.6;">
          <p style="margin: 0 0 4px 0;">This email was routed directly to <strong>${siteRecipient}</strong>.</p>
          <p style="margin: 0; font-size: 11px; color: #aaa;">Australian Prop Money • Film & TV Theatrical Props • Sydney, Australia</p>
        </div>
      </div>
    `;

    // Check if SMTP credentials exist in environment
    if (!smtpPass) {
      console.warn('⚠️ SMTP_PASS is not set in environment secrets. Email simulated for testing, logged payload to console.');
      console.log('📬 Simulated Email Dispatch to:', siteRecipient, { type, name, email, subject });
      
      return NextResponse.json({
        success: true,
        message: `Inquiry recorded. (Notice: Add SMTP_PASS in Settings to trigger live Zoho email delivery to ${siteRecipient})`,
        simulated: true,
        destination: siteRecipient
      });
    }

    // Configure SMTP Transporter using Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false, // Prevents certificate mismatches on custom domain mail servers
      },
    });

    // High-Priority Headers to ensure Zoho push notifications trigger immediately
    const messageId = `<${Date.now()}.${Math.random().toString(36).substring(2, 9)}@australianpropmoney.org>`;
    
    const adminMailOptions = {
      from: `"${senderPrefix}" <${smtpUser}>`,
      to: siteRecipient,
      replyTo: email && email.includes('@') ? `"${name || 'Customer'}" <${email}>` : smtpUser,
      subject: emailSubject,
      html: emailBody,
      headers: {
        'Message-ID': messageId,
        'X-Priority': '1',
        'Priority': 'urgent',
        'Importance': 'high',
        'X-MSMail-Priority': 'High',
        'X-Mailer': 'AustralianPropMoney-Dispatcher/2.0',
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
      },
    };

    // Send the primary admin notification email to info@australianpropmoney.org
    const info = await transporter.sendMail(adminMailOptions);
    console.log(`✅ Zoho SMTP alert dispatched successfully to ${siteRecipient} [Message ID: ${info.messageId}]`);

    // Optionally send customer auto-confirmation if this is an order and customer email is provided
    if (type === 'order' && details?.shippingInfo?.email && details.shippingInfo.email !== siteRecipient) {
      try {
        const customerReceiptBody = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 25px; border-radius: 12px; background-color: #fff; color: #111;">
            <div style="border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 20px;">
              <h2 style="font-family: Georgia, serif; margin: 0; color: #000; font-size: 22px;">Australian Prop Money</h2>
              <span style="font-size: 12px; color: #666;">Order Confirmation • #${details.orderId}</span>
            </div>
            <p style="font-size: 14px; line-height: 1.6; color: #333;">
              Hi <strong>${name || 'Valued Customer'}</strong>,<br/><br/>
              Thank you for ordering with Australian Prop Money! We have received your order requisition <strong>#${details.orderId}</strong> for <strong>$${Number(details.total || 0).toFixed(2)} AUD</strong>.
            </p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 13px; border-left: 4px solid #d4af37;">
              <p style="margin: 4px 0;"><strong>Order Reference:</strong> #${details.orderId}</p>
              <p style="margin: 4px 0;"><strong>Payment Method:</strong> ${String(details.paymentMethod || '').toUpperCase()}</p>
              <p style="margin: 4px 0;"><strong>Tracking & Dispatch:</strong> Express Courier tracking number will be emailed as soon as production packaging is sealed.</p>
            </div>
            <p style="font-size: 13px; color: #555; line-height: 1.6;">
              If you have any questions or need custom scene modifications, simply reply directly to this email or contact us at <a href="mailto:${SITE_CANONICAL_EMAIL}" style="color: #d4af37; font-weight: bold;">${SITE_CANONICAL_EMAIL}</a>.
            </p>
            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; font-size: 11px; color: #999; text-align: center;">
              Australian Prop Money • Sydney, NSW Australia • Crimes (Currency) Act Compliant Replica Notes
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Australian Prop Money Orders" <${smtpUser}>`,
          to: details.shippingInfo.email,
          replyTo: siteRecipient,
          subject: `Order Confirmation #${details.orderId} - Australian Prop Money`,
          html: customerReceiptBody,
          headers: {
            'X-Priority': '3',
            'Importance': 'normal',
          },
        });
        console.log(`✅ Customer confirmation receipt dispatched to ${details.shippingInfo.email}`);
      } catch (custErr) {
        console.error('⚠️ Could not dispatch customer copy (Admin copy already succeeded):', custErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Email successfully dispatched to ${siteRecipient} via Zoho SMTP.`,
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error('❌ Nodemailer SMTP Error occurred while sending email:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error occurred while sending email via SMTP.',
        details: error.code || error.response || null,
        recipientNotice: `Target recipient is set to ${SITE_CANONICAL_EMAIL}`,
      },
      { status: 500 }
    );
  }
}

