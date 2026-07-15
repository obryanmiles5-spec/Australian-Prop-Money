import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type, details } = body;

    // Read environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    
    // Explicitly parse SMTP_SECURE if provided, else default to true for port 465
    const smtpSecureVal = process.env.SMTP_SECURE;
    const smtpSecure = smtpSecureVal !== undefined ? (smtpSecureVal === 'true') : (smtpPort === 465);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser;
    const orderEmail = process.env.ORDER_EMAIL || smtpUser;

    // Check configuration
    if (!smtpUser || !smtpPass) {
      console.error('❌ SMTP credentials (SMTP_USER and/or SMTP_PASS) are missing in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'SMTP integration is not fully configured on the server. Please define SMTP_USER and SMTP_PASS.',
        },
        { status: 500 }
      );
    }

    // Determine form name and recipient based on type
    let recipient = contactEmail;
    let formName = 'Contact Support Inquiry';
    let emailSubject = `[Prop Money Support] ${subject || 'New Web Submission'}`;

    if (type === 'wholesale') {
      recipient = contactEmail;
      formName = 'Wholesale Proposal Brief';
      emailSubject = `[Prop Money Wholesale] ${subject || 'New Wholesale Quote Request'}`;
    } else if (type === 'order') {
      recipient = orderEmail;
      formName = 'Prop Money Replica Order';
      emailSubject = `[Prop Money Order] ${subject || 'New Replica Order Placed'}`;
    }

    // Build the email HTML template beautifully based on submission type
    let detailsBody = '';

    if (type === 'wholesale' && details) {
      detailsBody = `
        <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #d4af37; margin: 20px 0; font-family: sans-serif; font-size: 13px; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #111; font-family: Georgia, serif; font-size: 15px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Creative Production Brief:</h3>
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
            let itemOptions = [];
            if (item.options?.aging) itemOptions.push(`Treatment: ${item.options.aging}`);
            if (item.options?.band) itemOptions.push(`Band: ${item.options.band}`);
            if (item.options?.customSerial === 'Custom Specified') {
              itemOptions.push(`Serial: ${item.options.serialText || 'Specified'}`);
            }
            const optionsStr = itemOptions.length > 0 ? `<div style="font-size:11px; color:#666; margin-top:2px;">${itemOptions.join(' | ')}</div>` : '';
            const price = item.priceAtTimeOfAdding ?? item.product?.price ?? 0;
            return `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-family: sans-serif; font-size: 13px;">
                  <strong style="color:#000;">${item.product?.name || 'Replica Note Stack'}</strong>
                  ${optionsStr}
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center; font-family: sans-serif; font-size: 13px;">
                  x${item.quantity}
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right; font-family: sans-serif; font-size: 13px; font-weight: bold;">
                  $${(price * item.quantity).toFixed(2)} AUD
                </td>
              </tr>
            `;
          }).join('')
        : '<tr><td colspan="3" style="padding:10px; text-align:center;">No items specified</td></tr>';

      detailsBody = `
        <div style="margin: 20px 0;">
          <h3 style="color: #000; font-family: Georgia, serif; font-size: 15px; border-bottom: 2px solid #000; padding-bottom: 6px; margin-bottom: 12px;">Order Summary (ID: ${details.orderId || 'N/A'}):</h3>
          
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
              <strong style="margin-left: auto;">-$${details.discountAmount.toFixed(2)} AUD</strong>
            </div>` : ''}
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span style="color:#555;">Express Secured Courier:</span>
              <strong style="margin-left: auto;">${details.shippingCost === 0 ? 'FREE' : `$${details.shippingCost.toFixed(2)} AUD`}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid #ddd; padding-top: 8px; margin-top: 8px; font-size: 15px;">
              <strong>TOTAL PAYABLE:</strong>
              <strong style="margin-left: auto; color: #d4af37;">$${(details.total || 0).toFixed(2)} AUD</strong>
            </div>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #111; margin: 15px 0; font-family: sans-serif; font-size: 13px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 13px;">Selected Settlement Method: <span style="text-transform: uppercase; color: #d4af37;">${details.paymentMethod || 'N/A'}</span></h4>
            <pre style="margin: 0; font-family: monospace; white-space: pre-wrap; font-size: 11px; background-color: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333;">${details.paymentInstructions || 'None provided'}</pre>
          </div>

          <div style="background-color: #fafafa; border: 1px solid #eee; padding: 15px; border-radius: 6px; font-family: sans-serif; font-size: 13px; margin-top: 15px;">
            <h4 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 13px; color: #111;">Shipping Specifics & Requisitioner:</h4>
            <p style="margin: 4px 0;"><strong>Name:</strong> ${details.shippingInfo?.firstName || ''} ${details.shippingInfo?.lastName || ''}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> ${details.shippingInfo?.email || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Phone:</strong> ${details.shippingInfo?.phone || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Address:</strong> ${details.shippingInfo?.addressLine1 || ''}${details.shippingInfo?.addressLine2 ? ', ' + details.shippingInfo.addressLine2 : ''}</p>
            <p style="margin: 4px 0;"><strong>Suburb/City, State, Postcode:</strong> ${details.shippingInfo?.city || ''}, ${details.shippingInfo?.state || ''} ${details.shippingInfo?.postcode || ''}</p>
            <p style="margin: 4px 0;"><strong>Production/Studio Name:</strong> ${details.shippingInfo?.productionName || 'Not provided'}</p>
          </div>
        </div>
      `;
    }

    const emailBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 30px; border-radius: 8px; background-color: #ffffff; color: #111;">
        <h2 style="color: #000; font-weight: normal; border-bottom: 2px solid #d4af37; padding-bottom: 15px; font-size: 22px; margin-top: 0;">
          ${formName} Received
        </h2>
        <p style="font-size: 14px; font-family: sans-serif; line-height: 1.6; color: #333;">
          A new submission has been dispatched securely via the <strong>Australian Prop Money</strong> studio gateway.
        </p>
        
        <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13px; margin: 20px 0;">
          <tbody>
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
              <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #666;"><strong>Form Type:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #111; text-transform: uppercase; font-weight: bold; font-size: 11px; letter-spacing: 0.05em; color: #d4af37;">${type || 'General'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #666;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #111;">${subject || 'General Inquiry'}</td>
            </tr>
            ${details?.requisitionMethod ? `
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #666;"><strong>Dispatch Channel:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #fafafa; color: #111; font-weight: bold; color: ${details.requisitionMethod === 'whatsapp' ? '#25D366' : '#d4af37'}; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">${details.requisitionMethod}</td>
            </tr>
            ` : ''}
          </tbody>
        </table>

        ${detailsBody}

        ${message ? `
        <div style="font-family: sans-serif; font-size: 13px; color: #111; line-height: 1.6; background-color: #fcfcfc; padding: 15px; border-radius: 6px; border: 1px solid #f0f0f0; margin-top: 15px;">
          <strong>Message / Special Instructions:</strong><br/>
          <p style="margin: 8px 0 0 0; white-space: pre-wrap; font-size: 13px; color: #333;">${message}</p>
        </div>` : ''}

        <p style="font-size: 11px; font-family: sans-serif; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; text-align: center; line-height: 1.5;">
          This inquiry was routed securely via Zoho Mail SMTP server integrations.<br/>
          Recipient destination: <strong>${recipient}</strong>
        </p>
      </div>
    `;

    // Configure SMTP Transporter using Zoho SMTP or custom settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Ensure all emails are sent from SMTP_USER (required by Zoho to avoid sender mismatch errors)
    const mailOptions = {
      from: `"${name || 'Prop Money Gateway'}" <${smtpUser}>`,
      to: recipient,
      replyTo: email || smtpUser,
      subject: emailSubject,
      html: emailBody,
    };

    // Send email using real Zoho SMTP connection
    await transporter.sendMail(mailOptions);

    console.log(`✅ SMTP email successfully dispatched to ${recipient} [Type: ${type}]`);

    return NextResponse.json({
      success: true,
      message: `Email successfully dispatched to ${recipient} via Zoho SMTP.`,
    });
  } catch (error: any) {
    // Log the EXACT error to the server console instead of failing silently
    console.error('❌ Nodemailer SMTP Error occurred while sending email:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error occurred while sending email via SMTP.',
        details: error.code || error.response || null,
      },
      { status: 500 }
    );
  }
}
