'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Copy, 
  Send, ExternalLink, HelpCircle, ChevronLeft, CreditCard 
} from 'lucide-react';
import { useCart, ShippingInfo } from '@/context/CartContext';
import { cleanWhatsAppNumber } from '@/lib/utils';


export default function CheckoutPage() {
  const router = useRouter();
  const {
    cart,
    subtotal,
    discountAmount,
    discountPercentage,
    couponCode,
    applyCoupon,
    removeCoupon,
    shippingCost,
    total,
    paymentMethod,
    setPaymentMethod,
    submitOrder,
    isOrderSimulated,
    simulatedOrderDetails,
    resetOrderSimulation
  } = useCart();

  const [form, setForm] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postcode: '',
    productionName: '',
    specialNotes: ''
  });

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState(false);
  const [couponSuccess, setCouponSuccess] = useState(false);
  
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [copiedState, setCopiedState] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Determine current minimum limit depending on payment method
  const currentMinLimit = paymentMethod === 'crypto' ? 50.00 : 150.00;
  const isMinOrderMet = subtotal >= currentMinLimit;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCouponInCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(false);
    setCouponSuccess(false);
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponSuccess(true);
    } else {
      setCouponError(true);
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState(label);
    setTimeout(() => setCopiedState(null), 2000);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors([]);

    if (cart.length === 0) {
      setFormErrors(['Your shopping cart is empty. Please add replica props first.']);
      return;
    }

    if (!isMinOrderMet) {
      setFormErrors([`Minimum order value of $${currentMinLimit.toFixed(2)} AUD is required for ${paymentMethod === 'crypto' ? 'cryptocurrency' : 'standard'} checkout.`]);
      return;
    }

    if (!termsAccepted) {
      setFormErrors(['You must accept the terms, conditions, and legal guidelines to purchase replica prop currency.']);
      return;
    }

    const errors = [];
    if (!form.firstName.trim()) errors.push('Billing First Name is required');
    if (!form.lastName.trim()) errors.push('Billing Last Name is required');
    if (!form.email.trim()) errors.push('Billing Email Address is required');
    if (!form.phone.trim()) errors.push('Billing Phone Number is required');
    if (!form.addressLine1.trim()) errors.push('Street Address Line 1 is required');
    if (!form.city.trim()) errors.push('Suburb / Town is required');
    if (!form.state.trim()) errors.push('State code is required');
    if (!form.postcode.trim()) errors.push('Postcode is required');

    if (errors.length > 0) {
      setFormErrors(errors);
      // Scroll to error list
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitOrder(form);
      if (!result.success) {
        setFormErrors([result.error || 'Failed to dispatch order email.']);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err: any) {
      setFormErrors([err.message || 'An error occurred during order dispatch.']);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // GENERATE WHATSAPP MESSAGE FORMATTING
  const generateWhatsAppMessage = () => {
    if (!simulatedOrderDetails) return '';
    const details = simulatedOrderDetails;
    
    let itemsStr = details.items.map((item: any) => {
      let optionsList = [];
      if (item.options?.aging) optionsList.push(`Treatment: ${item.options.aging}`);
      if (item.options?.band) optionsList.push(`Band: ${item.options.band}`);
      if (item.options?.customSerial === 'Custom Specified') {
        optionsList.push(`Custom Serial: ${item.options.serialText || 'Specified'}`);
      }
      const optionsStr = optionsList.length > 0 ? ` [${optionsList.join(', ')}]` : '';
      const itemPrice = item.priceAtTimeOfAdding ?? item.product?.price ?? 0;
      return `- ${item.quantity}x ${item.product.name}${optionsStr} (@ $${itemPrice.toFixed(2)} = $${(itemPrice * item.quantity).toFixed(2)})`;
    }).join('\n');

    const address = `${details.shippingInfo.firstName} ${details.shippingInfo.lastName}
${details.shippingInfo.addressLine1}${details.shippingInfo.addressLine2 ? ', ' + details.shippingInfo.addressLine2 : ''}
${details.shippingInfo.city}, ${details.shippingInfo.state} ${details.shippingInfo.postcode}`;

    const text = `🇦🇺 *AUSTRALIAN PROP MONEY — NEW INVOICE*
---------------------------------------
*Order ID:* ${details.orderId}
*Date:* ${details.orderDate}
*Payment Method:* ${details.paymentMethod.toUpperCase()}

*INVENTORY ITEMS:*
${itemsStr}

---------------------------------------
*Subtotal:* $${details.subtotal.toFixed(2)} AUD
${details.discountAmount > 0 ? `*Discount (${details.discountPercentage}%):* -$${details.discountAmount.toFixed(2)} AUD\n` : ''}*Express Shipping:* ${details.shippingCost === 0 ? 'FREE' : `$${details.shippingCost.toFixed(2)} AUD`}
*TOTAL PAYABLE:* $${details.total.toFixed(2)} AUD

*SHIPPING ADDRESS:*
${address}
*Phone:* ${details.shippingInfo.phone}
*Email:* ${details.shippingInfo.email}
${details.shippingInfo.productionName ? `*Production:* ${details.shippingInfo.productionName}\n` : ''}${details.shippingInfo.specialNotes ? `*Special Notes:* ${details.shippingInfo.specialNotes}\n` : ''}
---------------------------------------
_This is an offline order. I am contacting to verify bank transfer / cryptographic payment status and request immediate dispatch._`;

    return encodeURIComponent(text);
  };

  // GENERATE EMAIL MESSAGE FORMATTING
  const generateEmailSubject = () => {
    if (!simulatedOrderDetails) return 'New Prop Money Order';
    return `Prop Money Order ${simulatedOrderDetails.orderId}`;
  };

  const generateEmailBody = () => {
    if (!simulatedOrderDetails) return '';
    const details = simulatedOrderDetails;
    
    let itemsStr = details.items.map((item: any) => {
      let optionsList = [];
      if (item.options?.aging) optionsList.push(`Treatment: ${item.options.aging}`);
      if (item.options?.band) optionsList.push(`Band: ${item.options.band}`);
      if (item.options?.customSerial === 'Custom Specified') {
        optionsList.push(`Custom Serial: ${item.options.serialText || 'Specified'}`);
      }
      const optionsStr = optionsList.length > 0 ? ` [${optionsList.join(', ')}]` : '';
      const itemPrice = item.priceAtTimeOfAdding ?? item.product?.price ?? 0;
      return `- ${item.quantity}x ${item.product.name}${optionsStr} (@ $${itemPrice.toFixed(2)} = $${(itemPrice * item.quantity).toFixed(2)})`;
    }).join('\n');

    const address = `${details.shippingInfo.firstName} ${details.shippingInfo.lastName}, ${details.shippingInfo.addressLine1}, ${details.shippingInfo.city}, ${details.shippingInfo.state} ${details.shippingInfo.postcode}`;

    return `Australian Prop Money Order Details

Order ID: ${details.orderId}
Date: ${details.orderDate}
Payment Method: ${details.paymentMethod.toUpperCase()}

INVENTORY ITEMS:
${itemsStr}

Subtotal: $${details.subtotal.toFixed(2)} AUD
Discount: -$${details.discountAmount.toFixed(2)} AUD
Shipping: ${details.shippingCost === 0 ? 'FREE' : `$${details.shippingCost.toFixed(2)} AUD`}
TOTAL PAYABLE: $${details.total.toFixed(2)} AUD

SHIPPING ADDRESS:
Name: ${details.shippingInfo.firstName} ${details.shippingInfo.lastName}
Address: ${address}
Phone: ${details.shippingInfo.phone}
Email: ${details.shippingInfo.email}
Production Studio: ${details.shippingInfo.productionName || 'None'}
Special Instructions: ${details.specialNotes || 'None'}

Please confirm receipt of this order and reply with tracking details once transfer is cleared.`;
  };

  // STAGE 1: SUCCESS CONFIRMATION RECEIPT
  if (isOrderSimulated && simulatedOrderDetails) {
    const details = simulatedOrderDetails;
    const isCrypto = details.paymentMethod === 'crypto';
    
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10 animate-fade-in" id="checkout-receipt-panel">
        
        {/* Success Banner */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-scale-in" />
          <h1 className="font-serif text-2xl md:text-3xl font-light text-emerald-950">Thank You, Order Received!</h1>
          <p className="text-xs text-emerald-700 max-w-lg mx-auto">
            Your RBA-compliant film prop requisition has been logged. To complete dispatch, please make an offline transfer using the instructions below.
          </p>
        </div>

        {/* Invoice Summary grid */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-500">
          <div>
            <span className="block uppercase font-bold tracking-wider text-[9px] text-gray-400">Order ID</span>
            <span className="font-mono font-bold text-black text-sm block mt-1">{details.orderId}</span>
          </div>
          <div>
            <span className="block uppercase font-bold tracking-wider text-[9px] text-gray-400">Date Logged</span>
            <span className="font-bold text-black text-sm block mt-1">{details.orderDate}</span>
          </div>
          <div>
            <span className="block uppercase font-bold tracking-wider text-[9px] text-gray-400">Total Due</span>
            <span className="font-mono font-bold text-gold-dark text-sm block mt-1">${details.total.toFixed(2)} AUD</span>
          </div>
          <div>
            <span className="block uppercase font-bold tracking-wider text-[9px] text-gray-400">Payment Channel</span>
            <span className="font-bold text-black text-sm capitalize block mt-1">
              {details.paymentMethod === 'bank' ? 'Bank Transfer' : details.paymentMethod === 'payid' ? 'PayID Instant' : 'Crypto Address'}
            </span>
          </div>
        </div>

        {/* Dynamic Payment Action Details */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="font-serif text-lg font-bold text-black border-b pb-3 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-gold-dark" />
            Offline Payment Settlement Guidelines
          </h2>

          <div className="text-xs leading-relaxed text-gray-600 space-y-4">
            <p>
              Please settle the amount of <strong className="text-black font-mono font-bold">${details.total.toFixed(2)} AUD</strong> using the parameters specified below. Ensure you enter the Reference code precisely to clear automatic matching.
            </p>

            {/* Render exact details */}
            {details.paymentMethod === 'bank' && (
              <div className="bg-gray-50 p-5 rounded-2xl space-y-3 font-mono text-[11px] border">
                <div className="flex justify-between border-b pb-1.5 border-gray-100">
                  <span className="text-gray-400">Account Name:</span>
                  <span className="text-black font-semibold">Australian Prop Money Pty Ltd</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-gray-100">
                  <span className="text-gray-400">BSB (CBA Bank):</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="text-black font-bold">062-900</span>
                    <button onClick={() => handleCopy('062900', 'BSB')} className="text-gold hover:underline p-0.5">
                      {copiedState === 'BSB' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-gray-100">
                  <span className="text-gray-400">Account Number:</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="text-black font-bold">1048 3922</span>
                    <button onClick={() => handleCopy('10483922', 'Account')} className="text-gold hover:underline p-0.5">
                      {copiedState === 'Account' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between text-gold-dark">
                  <span>REQUIRED REFERENCE:</span>
                  <div className="flex gap-1.5 items-center font-bold">
                    <span>{details.orderId}</span>
                    <button onClick={() => handleCopy(details.orderId, 'Ref')} className="text-black hover:underline p-0.5">
                      {copiedState === 'Ref' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {details.paymentMethod === 'payid' && (
              <div className="bg-gray-50 p-5 rounded-2xl space-y-3 font-mono text-[11px] border">
                <div className="flex justify-between border-b pb-1.5 border-gray-100">
                  <span className="text-gray-400">PayID Type:</span>
                  <span className="text-black font-semibold">Email Link</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-gray-100">
                  <span className="text-gray-400">PayID Address:</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="text-black font-bold">info@australianpropmoney.org</span>
                    <button onClick={() => handleCopy('info@australianpropmoney.org', 'PayID')} className="text-gold hover:underline p-0.5">
                      {copiedState === 'PayID' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-gray-100">
                  <span className="text-gray-400">Registered Recipient:</span>
                  <span className="text-black font-semibold">Australian Prop Money Pty Ltd</span>
                </div>
                <div className="flex justify-between text-gold-dark">
                  <span>REQUIRED REFERENCE:</span>
                  <div className="flex gap-1.5 items-center font-bold">
                    <span>{details.orderId}</span>
                    <button onClick={() => handleCopy(details.orderId, 'Ref')} className="text-black hover:underline p-0.5">
                      {copiedState === 'Ref' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isCrypto && (
              <div className="bg-gray-50 p-5 rounded-2xl space-y-3 font-mono text-[10px] border leading-normal">
                <p className="text-emerald-700 bg-emerald-50 p-2.5 rounded mb-2 leading-relaxed">
                  💡 <strong>Cryptocurrency Match:</strong> Standard USDT/BTC/ETH value has been converted to USD based on the standard parity rate (1.50).
                </p>
                <div className="flex justify-between border-b pb-1.5 border-gray-100 text-[11px]">
                  <span className="text-gray-400">Required USD Value:</span>
                  <span className="text-emerald-600 font-bold font-sans">${(details.total / 1.5).toFixed(2)} USD</span>
                </div>
                <div className="space-y-1.5 border-b pb-2 border-gray-100">
                  <span className="text-gray-400 block font-bold uppercase tracking-wider text-[8px]">USDT Address (TRC-20 Network only!)</span>
                  <div className="flex gap-2 items-center bg-white p-2 rounded border justify-between">
                    <span className="text-black font-semibold select-all break-all">TXYz89aXyZ89qRwX19BcdEfGhIjKlMnOpQ</span>
                    <button onClick={() => handleCopy('TXYz89aXyZ89qRwX19BcdEfGhIjKlMnOpQ', 'USDT')} className="text-gold hover:underline p-1 shrink-0 bg-gray-50 rounded">
                      {copiedState === 'USDT' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-1.5 border-b pb-2 border-gray-100">
                  <span className="text-gray-400 block font-bold uppercase tracking-wider text-[8px]">Bitcoin (BTC) Wallet Address</span>
                  <div className="flex gap-2 items-center bg-white p-2 rounded border justify-between">
                    <span className="text-black font-semibold select-all break-all">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfJH7</span>
                    <button onClick={() => handleCopy('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfJH7', 'BTC')} className="text-gold hover:underline p-1 shrink-0 bg-gray-50 rounded">
                      {copiedState === 'BTC' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between text-gold-dark text-[11px] pt-1">
                  <span>REQUIRED MEMO / REFERENCE:</span>
                  <div className="flex gap-1.5 items-center font-bold">
                    <span>{details.orderId}</span>
                    <button onClick={() => handleCopy(details.orderId, 'Ref')} className="text-black hover:underline p-0.5">
                      {copiedState === 'Ref' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="p-3 bg-yellow-50 border border-yellow-100 text-yellow-800 rounded-lg text-[11px] leading-relaxed">
              📦 <strong>Discrete Packing Clause:</strong> Dispatch occurs immediately upon confirmation of funds clearing. Orders are shipped in unlabeled, triple-reinforced cardboard boxes with absolutely no outer text referring to replica props or prop money. Deliveries are 100% discrete.
            </div>

          </div>
        </div>

        {/* WHATSAPP & EMAIL CHECKOUT CTA BUTTONS (MANDATORY FOR DISPATCH SPEED) */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="font-serif text-md font-bold text-black">
            Accelerate Requisition Verification
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Since prop orders are handled off-grid, we strongly recommend sending a copy of your transaction receipt and order summary directly to our sales coordinator. Click one of the buttons below to instantly draft your verification report:
          </p>

          <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"}>
            
            {/* WhatsApp verification checkout */}
            {true && (
              <a
                href={`https://wa.me/${cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "61480852682")}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 text-center focus:outline-none"
                id="btn-checkout-whatsapp"
              >
                <ExternalLink className="w-4 h-4" />
                Notify Coordinator via WhatsApp
              </a>
            )}

            {/* Email verification checkout */}
            <a
              href={`mailto:info@australianpropmoney.org?subject=${encodeURIComponent(generateEmailSubject())}&body=${encodeURIComponent(generateEmailBody())}`}
              className="bg-black hover:bg-gold text-white hover:text-black py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 text-center"
              id="btn-checkout-email"
            >
              <Send className="w-4 h-4" />
              Submit Invoice via Email
            </a>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                resetOrderSimulation();
                router.push('/shop');
              }}
              className="text-xs text-gray-400 hover:text-black hover:underline"
              id="btn-checkout-return-shop"
            >
              Or click here to return to inventory catalog
            </button>
          </div>
        </div>

      </div>
    );
  }

  // STAGE 2: FORM INPUT LAYOUT
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fade-in" id="checkout-main-container">
      
      {/* Header */}
      <div className="space-y-2 border-b pb-5">
        <Link href="/shop" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-black mb-2 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Bag
        </Link>
        <h1 className="font-serif font-light text-3xl md:text-4xl text-black tracking-tight">Requisition Checkout</h1>
        <p className="text-xs text-gray-500">Provide discrete shipping details and finalize your prop orders.</p>
      </div>

      {formErrors.length > 0 && (
        <div className="bg-red-50 text-red-700 p-4 rounded-2xl text-xs space-y-1.5 max-w-4xl border border-red-100" id="checkout-error-panel">
          <p className="font-bold uppercase tracking-wider text-red-800">⚠️ Please correct the following checkout issues:</p>
          {formErrors.map((err, idx) => <p key={idx}>• {err}</p>)}
        </div>
      )}

      {/* Main Form content wrapper */}
      <form onSubmit={handleCheckoutSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="checkout-form-container">
        
        {/* Left Column: Billing/Shipping form inputs (Grid-Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif text-xl font-bold text-black pb-2 border-b border-gray-100">Billing & Shipping Details</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black font-sans"
                required
                placeholder="Sarah"
                id="billing-firstName"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black font-sans"
                required
                placeholder="Garrity"
                id="billing-lastName"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Production Agency / Creative Studio (Optional)</label>
            <input
              type="text"
              name="productionName"
              value={form.productionName}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black"
              placeholder="Crimson Horizon Films Ltd"
              id="billing-productionName"
            />
          </div>

          <div className="text-xs">
            <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Country / Region</label>
            <input
              type="text"
              value="Australia (Fixed Dispatch Limits)"
              disabled
              className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl text-gray-400 font-semibold font-sans cursor-not-allowed"
              id="billing-country"
            />
          </div>

          <div className="space-y-3 text-xs">
            <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Street Address *</label>
            <input
              type="text"
              name="addressLine1"
              value={form.addressLine1}
              onChange={handleInputChange}
              placeholder="House number and street name"
              className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black"
              required
              id="billing-addressLine1"
            />
            <input
              type="text"
              name="addressLine2"
              value={form.addressLine2}
              onChange={handleInputChange}
              placeholder="Apartment, suite, unit, production floor, etc. (Optional)"
              className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black"
              id="billing-addressLine2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Suburb / City *</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black"
                required
                placeholder="Sydney"
                id="billing-city"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">State *</label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleInputChange}
                placeholder="NSW"
                className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black"
                required
                id="billing-state"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Postcode *</label>
              <input
                type="text"
                name="postcode"
                value={form.postcode}
                onChange={handleInputChange}
                placeholder="2000"
                className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black"
                required
                id="billing-postcode"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                placeholder="e.g. 0400 123 456"
                className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black font-mono"
                required
                id="billing-phone"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="sarah@crimsonfilms.com"
                className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black font-sans"
                required
                id="billing-email"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Special Order Notes (Optional)</label>
            <textarea
              name="specialNotes"
              value={form.specialNotes}
              onChange={handleInputChange}
              rows={3}
              placeholder="Add specific instructions for courier, e.g. 'Leave with prop office', 'Incorporate heavily weathered edges if possible'..."
              className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:outline-gold focus:ring-0 text-black leading-relaxed"
              id="billing-notes"
            />
          </div>

        </div>

        {/* Right Column: Order Review, Coupon Form & Payments (Grid-Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-6">
            <h2 className="font-serif text-lg font-bold text-black border-b pb-3">Your Order Review</h2>
            
            {/* Basket list itemized with option summaries */}
            <div className="space-y-4 divide-y divide-gray-200 max-h-[250px] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 flex gap-3 text-xs justify-between">
                  <div>
                    <span className="font-serif font-bold text-black block">{item.product.name} (x{item.quantity})</span>
                    
                    {item.options && (
                      <div className="text-[9px] text-gray-400 mt-0.5 space-y-0.5 font-sans leading-tight">
                        {item.options.aging && <p>• Aging: {item.options.aging}</p>}
                        {item.options.band && <p>• Strap: {item.options.band}</p>}
                        {item.options.customSerial === 'Custom Specified' && <p>• Custom: {item.options.serialText || 'Sequential'}</p>}
                      </div>
                    )}
                  </div>
                  <span className="font-semibold text-black font-mono shrink-0">${((item.priceAtTimeOfAdding ?? item.product?.price ?? 0) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Subtotal list */}
            <div className="space-y-2 border-t pt-4 text-xs font-sans">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="text-black font-semibold font-mono">${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Discount Coupon ({discountPercentage}%)</span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-500">
                <span>Express Courier Dispatch</span>
                <span className="text-black font-semibold font-mono">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm text-black border-t pt-3 mt-1 font-bold">
                <span>Total Payable (AUD)</span>
                <span className="text-gold-dark text-base font-mono">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Quick checkout coupon applying box */}
            <div className="bg-white p-3 rounded-2xl border border-gray-100 text-[10px] text-gray-400 flex items-center justify-between">
              <span>Have a promo code? Apply below</span>
              {couponCode ? (
                <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded uppercase">{couponCode} Active</span>
              ) : (
                <span className="font-semibold">WELCOME10 = 10% Off</span>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="WELCOME10"
                  className="flex-1 bg-white border border-gray-200 px-3 py-2 text-xs rounded-xl focus:outline-gold uppercase text-black"
                  id="checkout-coupon-input"
                />
                <button
                  type="button"
                  onClick={handleApplyCouponInCheckout}
                  className="bg-black hover:bg-gold text-white hover:text-black text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-xl transition-all"
                  id="checkout-coupon-btn"
                >
                  Apply
                </button>
              </div>
              {couponSuccess && <p className="text-[9px] text-emerald-600 font-bold">Coupon successfully applied!</p>}
              {couponError && <p className="text-[9px] text-red-500 font-bold">Invalid code. Try &apos;WELCOME10&apos;.</p>}
            </div>

          </div>

          {/* Secure Offline Gateway selectors */}
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4">
            <h2 className="font-serif text-lg font-bold text-black border-b pb-3">Select Settlement Channel</h2>
            
            <div className="space-y-2.5">
              
              {/* EFT Bank */}
              <label 
                className={`p-3.5 border rounded-2xl flex items-start gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'bank' 
                    ? 'border-black bg-black/5' 
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
                id="checkout-pay-label-bank"
              >
                <input
                  type="radio"
                  name="checkoutPaymentMethod"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="mt-1 text-black focus:ring-0 focus:outline-none focus:ring-offset-0 focus:ring-transparent focus:border-transparent cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-black block">Direct Bank Transfer (EFT)</span>
                  <p className="text-gray-400 mt-0.5 leading-tight text-[10px]">Make settlement directly into our Commonwealth Bank vault. Processing takes 12-24 hours.</p>
                </div>
              </label>

              {/* PayID */}
              <label 
                className={`p-3.5 border rounded-2xl flex items-start gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'payid' 
                    ? 'border-black bg-black/5' 
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
                id="checkout-pay-label-payid"
              >
                <input
                  type="radio"
                  name="checkoutPaymentMethod"
                  value="payid"
                  checked={paymentMethod === 'payid'}
                  onChange={() => setPaymentMethod('payid')}
                  className="mt-1 text-black focus:ring-0 focus:outline-none focus:ring-offset-0 focus:ring-transparent focus:border-transparent cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-black block">PayID Instant Requisition</span>
                  <p className="text-gray-400 mt-0.5 leading-tight text-[10px]">Settles instantly using PayID. Requisition clears and schedules for same-day discrete courier dispatch.</p>
                </div>
              </label>

              {/* Crypto */}
              <label 
                className={`p-3.5 border rounded-2xl flex items-start gap-3 cursor-pointer transition-all relative ${
                  paymentMethod === 'crypto' 
                    ? 'border-black bg-black/5' 
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
                id="checkout-pay-label-crypto"
              >
                {couponCode === 'PROPMONEYAU' && (
                  <span className="absolute -top-1.5 -right-1 bg-red-500 text-white font-sans text-[7px] px-2 py-0.5 rounded-full animate-bounce">
                    30% Off
                  </span>
                )}
                <input
                  type="radio"
                  name="checkoutPaymentMethod"
                  value="crypto"
                  checked={paymentMethod === 'crypto'}
                  onChange={() => setPaymentMethod('crypto')}
                  className="mt-1 text-black focus:ring-0 focus:outline-none focus:ring-offset-0 focus:ring-transparent focus:border-transparent cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-black block">Cryptocurrency (USDT/BTC/ETH)</span>
                  <p className="text-gray-400 mt-0.5 leading-tight text-[10px]">Secure, fast, and completely anonymous. We offer an extra 30% discount on Crypto transfers with coupon <strong>PROPMONEYAU</strong>.</p>
                </div>
              </label>

            </div>

            {/* Minimum Requisition Limit Alert */}
            {!isMinOrderMet && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-[11px] text-amber-800 space-y-1.5 leading-relaxed animate-fade-in">
                <p className="font-bold uppercase tracking-wider text-[9px] text-amber-900">⚠️ Minimum Order Value Required</p>
                {paymentMethod === 'crypto' ? (
                  <p>Crypto settlement allows a reduced minimum order of only <strong>AUD $50.00</strong>.</p>
                ) : (
                  <p>Standard transfers require a strict minimum order of <strong>AUD $150.00</strong> to cover production overhead.</p>
                )}
                <p className="font-medium">Current Subtotal: <strong className="text-black">${subtotal.toFixed(2)}</strong> (Needs ${(currentMinLimit - subtotal).toFixed(2)} more)</p>
              </div>
            )}

            {/* Terms and Conditions Checkbox */}
            <label className="flex items-start gap-2.5 cursor-pointer pt-2" id="checkout-terms-label">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-0.5 text-black focus:ring-0 focus:outline-none cursor-pointer rounded-sm border-gray-300"
              />
              <span className="text-[10px] text-gray-500 leading-tight">
                I agree to the <span className="font-semibold text-black underline">legal guidelines</span> stating that all replica bills purchased are strict film/tv props and will never be represented as legal tender.
              </span>
            </label>

            {/* PLACE ORDER SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={!isMinOrderMet || !termsAccepted || isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                isMinOrderMet && termsAccepted && !isSubmitting
                  ? 'bg-black hover:bg-gold text-white hover:text-black cursor-pointer' 
                  : 'bg-gray-300 text-gray-400 cursor-not-allowed shadow-none'
              }`}
              id="btn-place-prop-order"
            >
              {isSubmitting ? 'Processing Requisition...' : 'Place Offline Requisition'}
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Symmetric encryption secure checkout</span>
            </div>

          </div>

        </div>

      </form>

    </div>
  );
}
