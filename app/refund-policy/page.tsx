import React from 'react';
import { RefreshCw, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 animate-fade-in" id="refund-policy-page">
      
      <div className="space-y-4 text-center max-w-2xl mx-auto border-b pb-6">
        <h1 className="font-serif font-bold text-3xl text-black">Refund & Return Policy</h1>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Australian Prop Money Quality Assurance</p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
        
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-gold" />
            1. Returns of Unopened Merchandise
          </h2>
          <p>
            We take extreme pride in the quality, texture, and color-balance of our theatrical props. If you are not satisfied with your order, you are entitled to return unopened prop stacks within <strong>14 days of delivery</strong> for a full refund or exchange.
          </p>
          <p>
            To be eligible for a refund, the items must remain in their original, pristine, un-opened condition with the paper currency bands fully intact, unbroken, and showing no signs of creasing, set handling, or distress.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-gold animate-pulse" />
            2. Anti-Abuse Policy (On-Set Usage)
          </h2>
          <p>
            Due to the specific nature of theatrical and cinematic props, many items are used for short duration shoots, photography sessions, or videos. To prevent the abusive practice of &quot;using and returning&quot; items:
          </p>
          <ul className="space-y-2.5 pl-4 list-disc">
            <li><strong>• Broken Bands:</strong> Any prop money stack where the paper security band has been cut, broken, glued, or removed is strictly <strong>non-refundable</strong>.</li>
            <li><strong>• Distressed Props:</strong> Stacks or notes that show signs of creasing, corner folds, crumpling, wetness, or manual handling are ineligible for refunds.</li>
            <li><strong>• Custom Aging Work:</strong> All custom-aging services (including burned edges, stained bills, or customized briefcases) are tailored to unique script requirements and are strictly <strong>final sale</strong>.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black">
            3. Return shipping responsibility
          </h2>
          <p>
            The customer is responsible for procuring secure, tracked return postage to our warehouse. We recommend using registered Australia Post with tracking, as we cannot issue refunds for returned parcels that are lost or confiscated during return transit. Return postage fees are non-refundable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black">
            4. Processing timeline
          </h2>
          <p>
            Once your return parcel arrives at our warehouse, our prop QA team inspects the paper bands and material conditions within 3 business days. If approved, a refund is processed back to your original payment method (Direct EFT Bank Transfer, PayID, or Cryptocurrency) minus a 10% restocking fee.
          </p>
        </section>

        <div className="bg-gray-50 p-5 rounded-2xl border text-center space-y-2">
          <p className="font-bold text-xs text-black uppercase tracking-wider">Need to Initiate a Refund Request?</p>
          <p className="text-xs text-gray-500">Please email your order reference ID and photos of the unopened stacks to <a href="mailto:info@australianpropmoney.org" className="underline hover:text-gold transition-colors font-bold">info@australianpropmoney.org</a>.</p>
        </div>

      </div>

    </div>
  );
}
