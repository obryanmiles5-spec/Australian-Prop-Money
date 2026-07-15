import React from 'react';
import { Truck, ShieldCheck, Mail, Landmark } from 'lucide-react';
import { Metadata } from 'next';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Shipping Policy | Australian Prop Money',
  description: 'Fast, discreet shipping for your australian prop money orders. Learn about our dispatch times and delivery options across Australia.',
  alternates: {
    canonical: `${cleanBaseUrl}/shipping-policy`,
  }
};



export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 animate-fade-in" id="shipping-policy-page">
      
      <div className="space-y-4 text-center max-w-2xl mx-auto border-b pb-6">
        <h1 className="font-serif font-bold text-3xl text-black">Shipping & Delivery Policy</h1>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Australian Prop Money Fulfillment Services</p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
        
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <Truck className="w-5 h-5 text-gold" />
            1. Fast and Reliable Australia-Wide Dispatch
          </h2>
          <p>
            All products displayed on our website are physically stocked and dispatched from our local fulfillment warehouse in Sydney, New South Wales. We never drop-ship from international locations, which eliminates customs seizures, unexpected border transit delays, or tax audits.
          </p>
          <ul className="space-y-2 pl-4 list-disc">
            <li><strong>• Express Postage (Australia Post / Courier):</strong> 1 to 2 business days to major capital metropolitan centers (Sydney, Melbourne, Brisbane, Adelaide, Canberra) and 2 to 3 days to regional or rural sectors.</li>
            <li><strong>• Standard Insured Postage:</strong> 3 to 5 business days nationwide.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            2. 100% Discrete and Anonymous Packaging
          </h2>
          <p>
            To protect your creative production scripts and maintain complete privacy, we pack all shipments in heavy-duty, unbranded, plain cardboard mailing boxes or tough-envelopes. 
          </p>
          <p>
            There are absolutely <strong>no references to &quot;Australian Prop Money&quot;, &quot;Prop Currency&quot;, or &quot;Fake Cash&quot;</strong> on the exterior packaging. The sender name on the shipping label displays as a simplified corporate acronym &quot;APM Pty Ltd&quot;.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black">
            3. Processing Cut-Off Times
          </h2>
          <p>
            Orders completed and paid before 1:00 PM AEST (Monday through Friday) are guaranteed to be processed and dispatched on the very same business day. Orders placed over the weekend or on official NSW public holidays are processed on the subsequent business day.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black">
            4. Minimum Order Guidelines
          </h2>
          <p>
            To offset the high overhead of regulatory auditing, compliance checks, and secure packaging, we enforce a strict <strong>minimum order value of AUD $150.00</strong> across our platform. Orders failing to meet this threshold cannot proceed to checkout.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <Landmark className="w-5 h-5 text-gold" />
            5. Customs Seizure Safeguard
          </h2>
          <p>
            Because we operate strictly within the borders of Australia, you do not face any risks of Australian Border Force (ABF) customs seizures, currency auditing questions, or confiscation. This is a primary benefit of procuring your replica props through Australian Prop Money.
          </p>
        </section>

        <div className="bg-gray-50 p-5 rounded-2xl border text-center space-y-2">
          <p className="font-bold text-xs text-black uppercase tracking-wider">Have Questions Regarding Delivery Speed?</p>
          <p className="text-xs text-gray-500">Contact our logistics team at <a href="mailto:info@australianpropmoney.com.au" className="underline hover:text-gold transition-colors font-bold">info@australianpropmoney.com.au</a> or via WhatsApp.</p>
        </div>

      </div>

    </div>
  );
}
