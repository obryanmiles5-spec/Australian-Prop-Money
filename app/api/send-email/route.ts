import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type, details } = body;

    // Read SMTP environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecureVal = process.env.SMTP_SECURE;
    const smtpSecure = smtpSecureVal !== undefined ? (smtpSecureVal === 'true') : (smtpPort === 465);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Verify SMTP credentials
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

    // Configure SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    // Main site official email address
    const MAIN_SITE_EMAIL = process.env.ADMIN_EMAIL || process.env.SITE_EMAIL || 'info@australianpropmoney.org';

    // Build the list of admin recipient inboxes ensuring info@australianpropmoney.org is primary
    const adminRecipientsList = Array.from(
      new Set(
        [
          MAIN_SITE_EMAIL, // Primary site destination
          'info@australianpropmoney.org', // Always include site email as requested
          process.env.ADMIN_EMAIL,
          process.env.NOTIFICATION_EMAIL,
          process.env.ORDER_EMAIL,
          process.env.CONTACT_EMAIL,
          smtpUser,
        ]
          .filter((e): e is string => Boolean(e && typeof e === 'string' && e.includes('@')))
          .map((e) => e.trim().toLowerCase())
      )
    );

    // Guarantee MAIN_SITE_EMAIL is in the list
    if (!adminRecipientsList.includes('info@australianpropmoney.org')) {
      adminRecipientsList.unshift('info@australianpropmoney.org');
    }

    const fromAddress = `"Australian Prop Money" <${process.env.SMTP_FROM || smtpUser || 'info@australianpropmoney.org'}>`;
    const customerEmail = (email || details?.shippingInfo?.email || '').trim();
    const isValidCustomerEmail = customerEmail.includes('@') && customerEmail.includes('.');

    // -------------------------------------------------------------
    // 1. ORDER NOTIFICATIONS (Admin Alert + Customer Receipt)
    // -------------------------------------------------------------
    if (type === 'order' && details) {
      const orderId = details.orderId || 'APM-ORDER';
      const orderDate = details.orderDate || new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });
      const customerName = name || `${details.shippingInfo?.firstName || ''} ${details.shippingInfo?.lastName || ''}`.trim() || 'Valued Requisitioner';
      const customerPhone = phone || details.shippingInfo?.phone || 'Not provided';
      const paymentMethod = (details.paymentMethod || 'bank').toLowerCase();
      const totalFormatted = (details.total || 0).toFixed(2);
      const subtotalFormatted = (details.subtotal || 0).toFixed(2);
      const discountAmount = details.discountAmount || 0;
      const shippingCost = details.shippingCost || 0;

      // Format Items Table rows
      const itemsHtml = Array.isArray(details.items) && details.items.length > 0
        ? details.items.map((item: any) => {
            const price = item.priceAtTimeOfAdding ?? item.product?.price ?? 0;
            const lineTotal = (price * item.quantity).toFixed(2);
            let optionsList = [];
            if (item.options?.aging) optionsList.push(`Treatment: ${item.options.aging}`);
            if (item.options?.band) optionsList.push(`Band: ${item.options.band}`);
            if (item.options?.customSerial === 'Custom Specified') {
              optionsList.push(`Serial: ${item.options.serialText || 'Specified'}`);
            }
            const optionsStr = optionsList.length > 0 ? `<div style="font-size: 11px; color: #71717a; margin-top: 3px;">${optionsList.join(' • ')}</div>` : '';

            return `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e4e4e7; font-family: sans-serif; font-size: 13px; color: #09090b;">
                  <strong>${item.product?.name || 'Replica Note Stack'}</strong>
                  ${optionsStr}
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #e4e4e7; text-align: center; font-family: sans-serif; font-size: 13px; color: #09090b;">
                  x${item.quantity}
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #e4e4e7; text-align: right; font-family: sans-serif; font-size: 13px; font-weight: bold; color: #09090b;">
                  $${lineTotal} AUD
                </td>
              </tr>
            `;
          }).join('')
        : '<tr><td colspan="3" style="padding: 12px; text-align: center; color: #71717a;">No items detailed</td></tr>';

      // Payment Method Instructions block for HTML emails
      let paymentBlockHtml = '';
      if (paymentMethod === 'crypto') {
        paymentBlockHtml = `
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #10b981; padding: 16px; border-radius: 6px; margin: 20px 0; font-family: sans-serif;">
            <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px;">🪙 Cryptocurrency Transfer Details:</h4>
            <div style="margin-bottom: 10px;">
              <span style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; display: block;">USDT (TRC20) Wallet Address:</span>
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; padding: 8px 10px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #0f172a; word-break: break-all; margin-top: 4px;">
                TPKN5X472PTe6NrjwjD1GYhqqxZcmR1c4g
              </div>
            </div>
            <div style="margin-bottom: 10px;">
              <span style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; display: block;">Bitcoin (BTC) Wallet Address:</span>
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; padding: 8px 10px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #0f172a; word-break: break-all; margin-top: 4px;">
                bc1qz0u5ctpj9v2fnn9mj5dlfsma9f533jjse9sxpa
              </div>
            </div>
            <p style="margin: 6px 0 0 0; font-size: 12px; color: #334155;">
              <strong>Required USD Equivalent:</strong> $${((details.total || 0) / 1.5).toFixed(2)} USD<br/>
              <strong>Reference / Memo:</strong> <span style="font-family: monospace; font-weight: bold; color: #0f172a;">${orderId}</span>
            </p>
          </div>
        `;
      } else if (paymentMethod === 'creditcard') {
        paymentBlockHtml = `
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2563eb; padding: 16px; border-radius: 6px; margin: 20px 0; font-family: sans-serif;">
            <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">💳 Credit Card Settlement:</h4>
            <p style="margin: 4px 0 10px 0; font-size: 12px; color: #334155;">
              To complete your credit card payment securely online, click the authorized payment portal below:
            </p>
            <a href="https://checkout.bachs.io/pay/pl_ef4a46d9a381" target="_blank" style="display: inline-block; background-color: #d4af37; color: #000000; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">
              Complete Card Payment &rarr;
            </a>
            <p style="margin: 10px 0 0 0; font-size: 11px; color: #64748b;">
              Please include Order Reference <strong>${orderId}</strong> during checkout.
            </p>
          </div>
        `;
      } else if (paymentMethod === 'payid') {
        paymentBlockHtml = `
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #d97706; padding: 16px; border-radius: 6px; margin: 20px 0; font-family: sans-serif;">
            <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 14px;">⚡ PayID Settlement:</h4>
            <p style="margin: 4px 0; font-size: 12px; color: #334155;">
              Our billing coordinator will send the active studio PayID phone/email identifier shortly to complete clearance.<br/>
              <strong>Required Payment Reference:</strong> <span style="font-family: monospace; font-weight: bold;">${orderId}</span>
            </p>
          </div>
        `;
      } else {
        paymentBlockHtml = `
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #d4af37; padding: 16px; border-radius: 6px; margin: 20px 0; font-family: sans-serif;">
            <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 14px;">🏛️ Direct Bank Transfer (EFT):</h4>
            <p style="margin: 4px 0; font-size: 12px; color: #334155;">
              An administrator will verify your order and email you the Australian BSB and Account Number shortly.<br/>
              <strong>Required Payment Reference:</strong> <span style="font-family: monospace; font-weight: bold;">${orderId}</span>
            </p>
          </div>
        `;
      }

      // Shared Order Summary Section
      const orderSummaryCardHtml = `
        <div style="background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; margin: 20px 0;">
          <div style="background-color: #09090b; color: #ffffff; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: sans-serif; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: #d4af37;">
              Order Ref: ${orderId}
            </span>
            <span style="font-family: sans-serif; font-size: 11px; color: #a1a1aa; margin-left: auto;">
              ${orderDate}
            </span>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f4f4f5; text-align: left;">
                <th style="padding: 10px 12px; font-family: sans-serif; font-size: 11px; text-transform: uppercase; color: #52525b; letter-spacing: 0.05em;">Prop Item</th>
                <th style="padding: 10px 12px; font-family: sans-serif; font-size: 11px; text-transform: uppercase; color: #52525b; text-align: center; width: 15%;">Qty</th>
                <th style="padding: 10px 12px; font-family: sans-serif; font-size: 11px; text-transform: uppercase; color: #52525b; text-align: right; width: 25%;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="padding: 16px; background-color: #fafafa; border-top: 1px solid #e4e4e7; font-family: sans-serif; font-size: 13px;">
            <div style="margin-bottom: 6px; display: flex; justify-content: space-between;">
              <span style="color: #52525b;">Subtotal:</span>
              <strong style="margin-left: auto; color: #09090b;">$${subtotalFormatted} AUD</strong>
            </div>
            ${discountAmount > 0 ? `
              <div style="margin-bottom: 6px; display: flex; justify-content: space-between; color: #dc2626;">
                <span>Discount (${details.discountPercentage || 0}% ${details.couponCode ? `• ${details.couponCode}` : ''}):</span>
                <strong style="margin-left: auto;">-$${discountAmount.toFixed(2)} AUD</strong>
              </div>
            ` : ''}
            <div style="margin-bottom: 8px; display: flex; justify-content: space-between;">
              <span style="color: #52525b;">Express Secured Courier:</span>
              <strong style="margin-left: auto; color: #09090b;">${shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)} AUD`}</strong>
            </div>
            <div style="border-top: 2px solid #09090b; padding-top: 10px; margin-top: 8px; display: flex; justify-content: space-between; font-size: 16px;">
              <strong style="color: #09090b;">TOTAL PAYABLE:</strong>
              <strong style="margin-left: auto; color: #b45309;">$${totalFormatted} AUD</strong>
            </div>
          </div>
        </div>

        <div style="background-color: #fcfcfc; border: 1px solid #e4e4e7; padding: 16px; border-radius: 8px; font-family: sans-serif; font-size: 13px; margin: 16px 0;">
          <h4 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #09090b;">📦 Shipping Destination & Requisitioner:</h4>
          <p style="margin: 3px 0; color: #27272a;"><strong>Recipient:</strong> ${customerName}</p>
          <p style="margin: 3px 0; color: #27272a;"><strong>Email:</strong> <a href="mailto:${customerEmail}" style="color: #d4af37; text-decoration: none;">${customerEmail}</a></p>
          <p style="margin: 3px 0; color: #27272a;"><strong>Phone:</strong> ${customerPhone}</p>
          <p style="margin: 3px 0; color: #27272a;"><strong>Address:</strong> ${details.shippingInfo?.addressLine1 || ''}${details.shippingInfo?.addressLine2 ? ', ' + details.shippingInfo.addressLine2 : ''}</p>
          <p style="margin: 3px 0; color: #27272a;"><strong>Suburb/State/Postcode:</strong> ${details.shippingInfo?.city || ''}, ${details.shippingInfo?.state || ''} ${details.shippingInfo?.postcode || ''}</p>
          ${details.shippingInfo?.productionName ? `<p style="margin: 3px 0; color: #27272a;"><strong>Production / Studio:</strong> ${details.shippingInfo.productionName}</p>` : ''}
          ${details.shippingInfo?.specialNotes ? `<p style="margin: 8px 0 0 0; padding-top: 8px; border-top: 1px dashed #e4e4e7; color: #52525b; font-style: italic;"><strong>Delivery Instructions:</strong> &ldquo;${details.shippingInfo.specialNotes}&rdquo;</p>` : ''}
        </div>
      `;

      // --- Admin Email Template ---
      const adminEmailSubject = `🚨 [ORDER NOTIFICATION] #${orderId} - $${totalFormatted} AUD (${customerName})`;
      const adminEmailHtml = `
        <div style="font-family: Georgia, serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #09090b; padding: 24px; text-align: center; border-bottom: 3px solid #d4af37;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">
              AUSTRALIAN PROP MONEY
            </h1>
            <p style="color: #d4af37; font-size: 11px; margin: 6px 0 0 0; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.15em;">
              New Client Requisition Alert
            </p>
          </div>

          <div style="padding: 24px;">
            <div style="background-color: #fef3c7; border: 1px solid #fde68a; border-radius: 6px; padding: 12px 16px; font-family: sans-serif; font-size: 13px; color: #92400e; margin-bottom: 20px;">
              <strong>Action Required:</strong> A new replica currency order has been placed. Primary notification destination: <strong>${MAIN_SITE_EMAIL}</strong>. Please confirm settlement clearance and prepare discrete warehouse dispatch.
            </div>

            ${orderSummaryCardHtml}
            ${paymentBlockHtml}

            <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e4e4e7; font-family: sans-serif; font-size: 11px; color: #71717a;">
              Direct Reply: <a href="mailto:${customerEmail}" style="color: #d4af37; font-weight: bold;">${customerEmail}</a> • Phone: ${customerPhone}<br/>
              Notification dispatched to ${MAIN_SITE_EMAIL} and studio administrators.
            </div>
          </div>
        </div>
      `;

      // --- Customer Email Template ---
      const customerEmailSubject = `Order Confirmation #${orderId} - Australian Prop Money`;
      const customerEmailHtml = `
        <div style="font-family: Georgia, serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #09090b; padding: 24px; text-align: center; border-bottom: 3px solid #d4af37;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">
              AUSTRALIAN PROP MONEY
            </h1>
            <p style="color: #d4af37; font-size: 11px; margin: 6px 0 0 0; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.15em;">
              Official Requisition Receipt
            </p>
          </div>

          <div style="padding: 24px;">
            <h2 style="font-size: 18px; color: #09090b; margin: 0 0 10px 0; font-family: Georgia, serif;">
              Thank you for your order, ${details.shippingInfo?.firstName || customerName}!
            </h2>
            <p style="font-family: sans-serif; font-size: 13px; line-height: 1.6; color: #3f3f46; margin: 0 0 16px 0;">
              Your replica currency requisition has been logged with our prop studio. To proceed with discrete express packing and courier dispatch, please complete your transfer using the details below:
            </p>

            ${paymentBlockHtml}
            ${orderSummaryCardHtml}

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 6px; font-family: sans-serif; font-size: 12px; color: #475569; margin-top: 20px; line-height: 1.5;">
              🔒 <strong>100% Discrete Packaging Guarantee:</strong> All orders are dispatched in reinforced, unbranded boxes with zero exterior markings referring to replica money or props.
            </div>

            <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid #e4e4e7; font-family: sans-serif; font-size: 11px; color: #71717a; line-height: 1.6;">
              Questions regarding your requisition? Reply directly to this email or reach our support team on WhatsApp at <strong>+61 468 187 340</strong>.<br/>
              ABN: 46 674 267 559 • Australian Prop Money Studio
            </div>
          </div>
        </div>
      `;

      // Dispatch Admin Notification(s)
      const dispatchPromises: Promise<any>[] = [];

      dispatchPromises.push(
        transporter.sendMail({
          from: fromAddress,
          to: adminRecipientsList.join(', '),
          replyTo: customerEmail || smtpUser,
          subject: adminEmailSubject,
          html: adminEmailHtml,
        })
      );

      // Dispatch Customer Confirmation (if valid email provided)
      let customerDispatched = false;
      if (isValidCustomerEmail) {
        dispatchPromises.push(
          transporter.sendMail({
            from: fromAddress,
            to: customerEmail,
            replyTo: `info@australianpropmoney.org`,
            subject: customerEmailSubject,
            html: customerEmailHtml,
          }).then(() => {
            customerDispatched = true;
          }).catch((err) => {
            console.error('⚠️ Warning: Failed to send customer receipt copy to:', customerEmail, err);
          })
        );
      }

      await Promise.allSettled(dispatchPromises);
      console.log(`✅ Order #${orderId} email notifications processed (Admins: ${adminRecipientsList.length}, Customer: ${customerDispatched ? customerEmail : 'skipped/pending'})`);

      return NextResponse.json({
        success: true,
        message: `Order #${orderId} confirmation processed successfully.`,
        orderId,
      });
    }

    // -------------------------------------------------------------
    // 2. WHOLESALE PROPOSAL BRIEF
    // -------------------------------------------------------------
    if (type === 'wholesale') {
      const productionTitle = details?.productionTitle || 'Custom Production';
      const adminEmailSubject = `💼 [WHOLESALE BRIEF] ${productionTitle} - ${name}`;
      
      const briefDetailsHtml = `
        <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-left: 4px solid #d4af37; padding: 16px; border-radius: 6px; font-family: sans-serif; font-size: 13px; margin: 16px 0;">
          <h3 style="margin-top: 0; color: #09090b; font-size: 14px; border-bottom: 1px solid #e4e4e7; padding-bottom: 6px;">Production Specifications:</h3>
          <p style="margin: 4px 0;"><strong>Production Title:</strong> ${details?.productionTitle || 'N/A'}</p>
          <p style="margin: 4px 0;"><strong>Production Type:</strong> ${details?.productionType || 'N/A'}</p>
          <p style="margin: 4px 0;"><strong>Shoot / Delivery Date:</strong> ${details?.shootDate || 'N/A'}</p>
          <p style="margin: 4px 0;"><strong>Prop Volume Required:</strong> ${details?.propVolume || 'N/A'}</p>
          <p style="margin: 4px 0;"><strong>Denominations:</strong> ${Array.isArray(details?.denominations) ? details.denominations.join(', ') : 'Not specified'}</p>
          <p style="margin: 4px 0;"><strong>Distressing & Aging:</strong> ${details?.distressing || 'Standard'}</p>
          ${message ? `<p style="margin: 8px 0 0 0; padding-top: 8px; border-top: 1px dashed #e4e4e7;"><strong>Special Instructions:</strong><br/>${message}</p>` : ''}
        </div>
      `;

      const adminEmailHtml = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
          <h2 style="color: #09090b; margin-top: 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Wholesale Quote Request
          </h2>
          <p style="font-family: sans-serif; font-size: 13px; color: #3f3f46;">
            A new commercial bulk proposal brief has been received:
          </p>
          <p style="font-family: sans-serif; font-size: 13px; color: #09090b;">
            <strong>Client Name:</strong> ${name}<br/>
            <strong>Email:</strong> <a href="mailto:${email}" style="color: #d4af37;">${email}</a><br/>
            <strong>Phone:</strong> ${phone || 'Not provided'}
          </p>
          ${briefDetailsHtml}
        </div>
      `;

      const customerEmailSubject = `Wholesale Production Quote Received: ${productionTitle} - Australian Prop Money`;
      const customerEmailHtml = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
          <h2 style="color: #09090b; margin-top: 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            Wholesale Brief Received
          </h2>
          <p style="font-family: sans-serif; font-size: 13px; color: #3f3f46; line-height: 1.6;">
            Hi ${name},<br/><br/>
            Thank you for submitting your creative production brief for <strong>${productionTitle}</strong>. Our commercial production coordinator is reviewing your volume specifications and will prepare a formalized quote with bulk discount tier pricing within 2 business hours.
          </p>
          ${briefDetailsHtml}
          <p style="font-family: sans-serif; font-size: 12px; color: #71717a; border-top: 1px solid #e4e4e7; padding-top: 12px; margin-top: 20px;">
            Australian Prop Money • ABN: 46 674 267 559 • Direct Call & WhatsApp: +61 468 187 340
          </p>
        </div>
      `;

      const dispatchPromises: Promise<any>[] = [
        transporter.sendMail({
          from: fromAddress,
          to: adminRecipientsList.join(', '),
          replyTo: email || smtpUser,
          subject: adminEmailSubject,
          html: adminEmailHtml,
        }),
      ];

      if (isValidCustomerEmail) {
        dispatchPromises.push(
          transporter.sendMail({
            from: fromAddress,
            to: customerEmail,
            replyTo: MAIN_SITE_EMAIL,
            subject: customerEmailSubject,
            html: customerEmailHtml,
          }).catch((err) => console.error('⚠️ Customer wholesale ack error:', err))
        );
      }

      await Promise.allSettled(dispatchPromises);
      console.log(`✅ Wholesale brief email notifications sent to ${MAIN_SITE_EMAIL} & customer ${customerEmail}`);
      return NextResponse.json({ 
        success: true, 
        message: `Wholesale brief sent successfully to ${MAIN_SITE_EMAIL}.`,
        primaryEmail: MAIN_SITE_EMAIL,
      });
    }

    // -------------------------------------------------------------
    // 3. NEWSLETTER / VIP SUBSCRIPTION NOTIFICATION
    // -------------------------------------------------------------
    if (type === 'subscription' || type === 'newsletter') {
      const subscriberEmail = (email || '').trim().toLowerCase();
      if (!subscriberEmail || !subscriberEmail.includes('@') || !subscriberEmail.includes('.')) {
        return NextResponse.json(
          { success: false, error: 'A valid email address is required to subscribe.' },
          { status: 400 }
        );
      }

      const subscriptionSource = body.source || 'Website VIP Newsletter';
      const timestamp = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });
      const promoCode = 'WELCOME15';

      const adminEmailSubject = `🎉 [NEW SUBSCRIPTION NOTIFICATION] VIP Subscriber: ${subscriberEmail}`;
      const adminEmailHtml = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
          <div style="background-color: #09090b; padding: 18px; text-align: center; border-bottom: 3px solid #d4af37; border-radius: 6px 6px 0 0; margin: -24px -24px 20px -24px;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">
              AUSTRALIAN PROP MONEY
            </h1>
            <p style="color: #d4af37; font-size: 11px; margin: 4px 0 0 0; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.15em;">
              VIP Inner Circle Newsletter Notification
            </p>
          </div>

          <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 12px 16px; font-family: sans-serif; font-size: 13px; color: #065f46; margin-bottom: 20px;">
            <strong>New Subscriber Alert:</strong> A new creative crew member has subscribed to the Australian Prop Money VIP registry and unlocked their 15% welcome discount.
          </div>

          <table style="width: 100%; font-family: sans-serif; font-size: 13px; color: #09090b; margin: 16px 0; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f4f4f5;">
              <td style="padding: 10px 0; color: #71717a; width: 35%;"><strong>Subscriber Email:</strong></td>
              <td style="padding: 10px 0;"><a href="mailto:${subscriberEmail}" style="color: #d4af37; font-weight: bold;">${subscriberEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f4f4f5;">
              <td style="padding: 10px 0; color: #71717a;"><strong>Primary Studio Desk:</strong></td>
              <td style="padding: 10px 0; color: #09090b;"><strong>${MAIN_SITE_EMAIL}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #f4f4f5;">
              <td style="padding: 10px 0; color: #71717a;"><strong>Signup Source:</strong></td>
              <td style="padding: 10px 0;">${subscriptionSource}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f4f4f5;">
              <td style="padding: 10px 0; color: #71717a;"><strong>Promo Code Issued:</strong></td>
              <td style="padding: 10px 0;"><span style="background-color: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 4px; font-family: monospace; font-weight: bold;">${promoCode} (15% OFF)</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71717a;"><strong>Timestamp:</strong></td>
              <td style="padding: 10px 0; color: #71717a; font-size: 12px;">${timestamp} (AEST)</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid #e4e4e7; font-family: sans-serif; font-size: 11px; color: #71717a;">
            Australian Prop Money • ABN: 46 674 267 559 • Direct Contact: +61 468 187 340
          </div>
        </div>
      `;

      const customerEmailSubject = `Welcome to the Inner Circle - 15% Off Your Replica Order [Code: ${promoCode}]`;
      const customerEmailHtml = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
          <div style="background-color: #09090b; padding: 20px; text-align: center; border-bottom: 3px solid #d4af37; border-radius: 6px 6px 0 0; margin: -24px -24px 20px -24px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">
              AUSTRALIAN PROP MONEY
            </h1>
            <p style="color: #d4af37; font-size: 11px; margin: 6px 0 0 0; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.15em;">
              Prop Master & Creative Media Registry
            </p>
          </div>

          <h2 style="font-size: 18px; color: #09090b; margin: 0 0 12px 0;">
            Welcome to the Inner Circle!
          </h2>
          <p style="font-family: sans-serif; font-size: 13px; color: #3f3f46; line-height: 1.6;">
            Thank you for joining the Australian Prop Money creative registry. As an official subscriber, you receive priority alerts on discrete polymer stock batches, custom aging masterclasses, and private bulk coupon releases.
          </p>

          <div style="background-color: #fefce8; border: 2px dashed #d4af37; border-radius: 8px; padding: 20px; text-align: center; margin: 24px 0;">
            <span style="font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #854d0e; font-weight: bold; display: block; margin-bottom: 6px;">
              Your Exclusive 15% Discount Code
            </span>
            <span style="font-family: monospace; font-size: 24px; font-weight: bold; color: #09090b; letter-spacing: 0.15em; display: block; background: #ffffff; padding: 8px 16px; border-radius: 6px; border: 1px solid #e4e4e7; width: fit-content; margin: 0 auto;">
              ${promoCode}
            </span>
            <span style="font-family: sans-serif; font-size: 11px; color: #71717a; display: block; margin-top: 8px;">
              Apply this coupon at checkout to deduct 15% instantly from any replica currency stack or bundle.
            </span>
          </div>

          <p style="font-family: sans-serif; font-size: 13px; color: #3f3f46; line-height: 1.6;">
            All our replica banknotes are 100% legally compliant with RBA specifications, crafted with non-reflective matte polymer to ensure realistic representation under studio lighting.
          </p>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 6px; font-family: sans-serif; font-size: 12px; color: #475569; margin: 20px 0; line-height: 1.5;">
            ✉️ <strong>Studio Desk:</strong> You can reply directly to this email or reach us anytime at <a href="mailto:${MAIN_SITE_EMAIL}" style="color: #d4af37; font-weight: bold;">${MAIN_SITE_EMAIL}</a> or WhatsApp at <strong>+61 468 187 340</strong>.
          </div>

          <div style="text-align: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid #e4e4e7; font-family: sans-serif; font-size: 11px; color: #71717a; line-height: 1.6;">
            Australian Prop Money • ABN: 46 674 267 559<br/>
            Intended exclusively for film, television, theatre, photography, and training. Not legal tender.
          </div>
        </div>
      `;

      const dispatchPromises: Promise<any>[] = [
        transporter.sendMail({
          from: fromAddress,
          to: adminRecipientsList.join(', '),
          replyTo: subscriberEmail,
          subject: adminEmailSubject,
          html: adminEmailHtml,
        }),
        transporter.sendMail({
          from: fromAddress,
          to: subscriberEmail,
          replyTo: MAIN_SITE_EMAIL,
          subject: customerEmailSubject,
          html: customerEmailHtml,
        }).catch((err) => console.error('⚠️ Customer subscription welcome email error:', err)),
      ];

      await Promise.allSettled(dispatchPromises);
      console.log(`✅ Subscription email dispatched: notified ${MAIN_SITE_EMAIL} & subscriber ${subscriberEmail}`);

      return NextResponse.json({
        success: true,
        message: `Subscription notification sent to ${MAIN_SITE_EMAIL} and welcome code sent to ${subscriberEmail}`,
        promoCode,
        primaryEmail: MAIN_SITE_EMAIL,
      });
    }

    // -------------------------------------------------------------
    // 4. CONTACT FORM / GENERAL INQUIRY
    // -------------------------------------------------------------
    const inquirySubject = subject || 'General Studio Inquiry';
    const adminEmailSubject = `📩 [CONTACT NOTIFICATION] ${inquirySubject} (${name})`;
    const adminEmailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
        <h2 style="color: #09090b; margin-top: 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
          New Studio Inquiry Received
        </h2>
        <table style="width: 100%; font-family: sans-serif; font-size: 13px; color: #09090b; margin: 16px 0;">
          <tr>
            <td style="padding: 6px 0; color: #71717a; width: 30%;"><strong>Sender:</strong></td>
            <td style="padding: 6px 0;"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #71717a;"><strong>Email:</strong></td>
            <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #71717a;"><strong>Phone:</strong></td>
            <td style="padding: 6px 0;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #71717a;"><strong>Primary Studio Desk:</strong></td>
            <td style="padding: 6px 0;"><strong>${MAIN_SITE_EMAIL}</strong></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #71717a;"><strong>Subject:</strong></td>
            <td style="padding: 6px 0;">${inquirySubject}</td>
          </tr>
        </table>
        <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 6px; padding: 14px; font-family: sans-serif; font-size: 13px; color: #27272a; line-height: 1.6; margin-top: 14px;">
          <strong>Message:</strong><br/>
          <p style="margin: 6px 0 0 0; white-space: pre-wrap;">${message || 'No message provided'}</p>
        </div>
        <p style="font-family: sans-serif; font-size: 11px; color: #a1a1aa; margin-top: 20px; border-top: 1px solid #f4f4f5; padding-top: 10px;">
          Direct Reply: <a href="mailto:${email}" style="color: #d4af37;">${email}</a> • Studio: ${MAIN_SITE_EMAIL}
        </p>
      </div>
    `;

    const customerEmailSubject = `We've received your message - Australian Prop Money [${inquirySubject}]`;
    const customerEmailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
        <h2 style="color: #09090b; margin-top: 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
          Inquiry Received
        </h2>
        <p style="font-family: sans-serif; font-size: 13px; color: #3f3f46; line-height: 1.6;">
          Hi ${name},<br/><br/>
          Thank you for reaching out to <strong>Australian Prop Money</strong>. We have received your inquiry regarding &ldquo;${inquirySubject}&rdquo; and our production specialists will get back to you within 2 hours during studio operating hours.
        </p>
        <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 6px; padding: 14px; font-family: sans-serif; font-size: 13px; color: #52525b; line-height: 1.5; margin: 16px 0;">
          <strong>Your Message:</strong><br/>
          <span style="font-style: italic; color: #27272a;">${message || 'N/A'}</span>
        </div>
        <p style="font-family: sans-serif; font-size: 12px; color: #71717a; line-height: 1.6; margin-top: 20px; border-top: 1px solid #e4e4e7; padding-top: 14px;">
          For urgent set clearance or custom aging requests, you can also contact us immediately on WhatsApp or Phone at <strong>+61 468 187 340</strong>.<br/>
          Main Desk: <a href="mailto:${MAIN_SITE_EMAIL}" style="color: #d4af37;">${MAIN_SITE_EMAIL}</a> • ABN: 46 674 267 559
        </p>
      </div>
    `;

    const dispatchPromises: Promise<any>[] = [
      transporter.sendMail({
        from: fromAddress,
        to: adminRecipientsList.join(', '),
        replyTo: email || smtpUser,
        subject: adminEmailSubject,
        html: adminEmailHtml,
      }),
    ];

    if (isValidCustomerEmail) {
      dispatchPromises.push(
        transporter.sendMail({
          from: fromAddress,
          to: customerEmail,
          replyTo: MAIN_SITE_EMAIL,
          subject: customerEmailSubject,
          html: customerEmailHtml,
        }).catch((err) => console.error('⚠️ Customer contact ack error:', err))
      );
    }

    await Promise.allSettled(dispatchPromises);
    console.log(`✅ Contact inquiry notifications sent to ${MAIN_SITE_EMAIL} & sender ${customerEmail}`);
    return NextResponse.json({ 
      success: true, 
      message: `Contact inquiry sent successfully to ${MAIN_SITE_EMAIL}.`,
      primaryEmail: MAIN_SITE_EMAIL,
    });
  } catch (error: any) {
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
