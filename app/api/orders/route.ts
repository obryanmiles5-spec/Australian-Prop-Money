import { NextResponse } from 'next/server';
import { sendZohoMail, SITE_CANONICAL_EMAIL } from '@/lib/zoho-mail';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const orderData = await request.json();

    const orderId = orderData.orderId || `AMP-${Math.floor(100000 + Math.random() * 900000)}`;
    const total = orderData.totalAmount || orderData.total || '0.00';
    const customerName = orderData.customerName || orderData.name || 'Valued Customer';
    const customerEmail = orderData.customerEmail || orderData.email || 'N/A';
    const customerPhone = orderData.phone || orderData.customerPhone || 'Not provided';
    const shippingTier = orderData.shippingMethod === 'express' ? 'Express Shipping ($60.00 AUD)' : 'Standard Shipping ($25.00 AUD)';
    const paymentMethod = String(orderData.paymentMethod || 'Bank Transfer').toUpperCase();

    let itemsHtml = '';
    if (Array.isArray(orderData.items) && orderData.items.length > 0) {
      itemsHtml = orderData.items.map((item: any) => {
        const itemPrice = item.priceAtTimeOfAdding ?? item.product?.price ?? 0;
        const sub = (itemPrice * item.quantity).toFixed(2);
        return `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-family: sans-serif; font-size: 13px;">
              <strong>${item.product?.name || 'Replica Note Stack'}</strong>
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center; font-family: sans-serif; font-size: 13px;">
              x${item.quantity}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right; font-family: sans-serif; font-size: 13px; font-weight: bold;">
              $${sub} AUD
            </td>
          </tr>
        `;
      }).join('');
    } else {
      itemsHtml = '<tr><td colspan="3" style="padding: 10px; text-align: center;">Items details logged in system</td></tr>';
    }

    const emailSubject = `🚨 [NEW ORDER RECEIVED] #${orderId} • $${total} AUD • ${customerName}`;

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 25px 30px; border-radius: 12px; background-color: #ffffff; color: #111;">
        
        <div style="border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #000; font-family: Georgia, serif; font-weight: normal; font-size: 22px; margin: 0 0 4px 0;">
            🇦🇺 Australian Prop Money — New Requisition
          </h2>
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; font-family: monospace;">
            Official Requisition Desk • ${SITE_CANONICAL_EMAIL}
          </span>
        </div>

        <div style="background-color: #fff8e6; border: 1px solid #f0dfa8; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 13px; color: #7a5c00;">
          <strong>🔔 Instant Order Alert:</strong> Order <strong>#${orderId}</strong> has been submitted. Check details below for fulfillment.
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 15px 0;">
          <tbody>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; width: 32%; color: #666;"><strong>Order ID:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111;"><strong>#${orderId}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Customer Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111;"><strong>${customerName}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Customer Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111;">
                <a href="mailto:${customerEmail}" style="color: #d4af37; font-weight: bold; text-decoration: none;">${customerEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Customer Phone:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${customerPhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Shipping Tier:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-weight: bold;">${shippingTier}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Payment Channel:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #d4af37; font-weight: bold; text-transform: uppercase;">${paymentMethod}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Total Payable:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 16px; font-weight: bold; font-family: monospace;">$${total} AUD</td>
            </tr>
          </tbody>
        </table>

        <div style="margin: 20px 0;">
          <h3 style="color: #000; font-family: Georgia, serif; font-size: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 6px; margin-bottom: 12px;">
            📦 Itemized Prop Stacks:
          </h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 8px 10px; text-align: left; font-size: 11px; text-transform: uppercase;">Prop Stack</th>
                <th style="padding: 8px 10px; text-align: center; font-size: 11px; text-transform: uppercase; width: 15%;">Qty</th>
                <th style="padding: 8px 10px; text-align: right; font-size: 11px; text-transform: uppercase; width: 25%;">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; font-size: 11px; color: #888; text-align: center;">
          <p style="margin: 0 0 4px 0;">This instant order alert was dispatched directly to your Zoho Mail account at <strong>${SITE_CANONICAL_EMAIL}</strong>.</p>
          <p style="margin: 0; color: #aaa;">Australian Prop Money • Sydney, Australia</p>
        </div>

      </div>
    `;

    // Send immediate high-priority notification to Zoho Mail
    const zohoResult = await sendZohoMail({
      subject: emailSubject,
      html: emailHtml,
      replyTo: customerEmail && customerEmail.includes('@') ? customerEmail : SITE_CANONICAL_EMAIL,
      senderLabel: '🚨 Prop Money Orders',
    });

    return NextResponse.json({
      success: true,
      orderId,
      dispatchedToZoho: zohoResult.success,
      simulated: Boolean(zohoResult.simulated),
    });
  } catch (error: any) {
    console.error('Failed to process Zoho order notification:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
