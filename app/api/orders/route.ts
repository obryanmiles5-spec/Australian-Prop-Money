import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const orderData = await request.json();

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not configured. Order notification recorded for order ID:', orderData.orderId);
      return NextResponse.json({ success: true, warning: 'RESEND_API_KEY not configured' });
    }

    const resend = new Resend(apiKey);
    const recipient = process.env.NOTIFICATION_EMAIL || process.env.ORDER_EMAIL || 'info@australianpropmoney.org';

    // Send email notification immediately
    await resend.emails.send({
      from: 'Orders <orders@australianpropmoney.org>', // Must be a verified domain in Resend
      to: [recipient],
      subject: `New Order Received: #${orderData.orderId}`,
      html: `
        <h2>New Order Placed!</h2>
        <p><strong>Order ID:</strong> ${orderData.orderId}</p>
        <p><strong>Customer:</strong> ${orderData.customerName || orderData.name} (${orderData.customerEmail || orderData.email})</p>
        <p><strong>Total Amount:</strong> $${orderData.totalAmount || orderData.total}</p>
        ${orderData.shippingMethod ? `<p><strong>Shipping Method:</strong> ${orderData.shippingMethod === 'express' ? 'Express Shipping ($60.00)' : 'Standard Shipping ($25.00)'}</p>` : ''}
        ${orderData.paymentMethod ? `<p><strong>Payment Method:</strong> ${String(orderData.paymentMethod).toUpperCase()}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Failed to send order notification:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
