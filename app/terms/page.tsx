import React from 'react';
import { Scale, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Terms of Service | Australian Prop Money',
  description: 'Terms of service and legal guidelines for purchasing and using our fake australian money prop products.',
  alternates: {
    canonical: `${cleanBaseUrl}/terms`,
  }
};



export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 animate-fade-in" id="terms-page">
      
      <div className="space-y-4 text-center max-w-2xl mx-auto border-b pb-6">
        <h1 className="font-serif font-bold text-3xl text-black">Terms of Use & Compliance Agreement</h1>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Australian Prop Money Federal Guidelines</p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
        
        {/* Strict Legal Warning Block */}
        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-2xl text-red-900 space-y-3">
          <div className="flex items-center gap-2 font-serif font-bold uppercase text-xs sm:text-sm text-red-950">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
            <span>CRITICAL WARNING: PROP CASH IS NOT LEGAL TENDER</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            &quot;All products sold on this website are replica prop items intended exclusively for film production, television, theatre, photography, training, educational and novelty purposes. They are not legal tender and must not be used for any unlawful or fraudulent activity.&quot;
          </p>
          <p className="text-xs font-bold leading-normal">
            Attempting to spend, exchange, deposit in bank branches or ATMs, or pass replica notes as genuine currency constitutes a severe federal offense under the Crimes (Currency) Act 1981, punishable by up to 14 years imprisonment.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <Scale className="w-5 h-5 text-gold" />
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing this website, placing an order, or completing a wholesale brief with Australian Prop Money (australianpropmoney.com.au), you explicitly represent and warrant that you are at least 18 years of age, and that you are procuring these replica prop notes exclusively for lawful artistic, theatrical, commercial, training, or novelty purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black">
            2. Customer Use Agreement & Indemnity
          </h2>
          <p>
            The buyer accepts full legal responsibility and liability for the storage, handling, display, and disposal of all replica currency notes purchased. You agree to indemnify, defend, and hold harmless Australian Prop Money, its parent corporation, printing directors, and logistics partners from any claims, damages, or legal actions resulting from:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-gray-500">
            <li>• Negligent handling or leaving props unsecured in public areas.</li>
            <li>• Use of prop cash by actors, extras, or studio crew in non-compliant manners.</li>
            <li>• Any unlawful, deceptive, or fraudulent attempt to use these props in public commerce.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            3. Verification of Production Credentials
          </h2>
          <p>
            To ensure complete safety and adhere to federal currency audits, we reserve the right to request proof of production credentials (e.g. film permit, company registration, active ABN, or theater script brief) before releasing high-volume prop currency orders or custom hand-aged orders. Any order deemed suspicious of counterfeit intent will be canceled immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black">
            4. Intellectual Property & Brand Misrepresentation
          </h2>
          <p>
            All custom graphics, website copy, layout assets, and code are the exclusive intellectual property of Australian Prop Money. Any unauthorized duplication of our compliance markings or re-selling of our proprietary ranges under other names is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black">
            5. Governing Law
          </h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of New South Wales and the Commonwealth of Australia. Any disputes arising from transactions on this platform shall be settled exclusively in the courts of NSW.
          </p>
        </section>

        <div className="bg-gray-50 p-5 rounded-2xl border text-center space-y-2">
          <p className="font-bold text-xs text-black uppercase tracking-wider">Need Official Compliance Certificates?</p>
          <p className="text-xs text-gray-500">Our prop studio issues custom Certificates of Compliance conforming to Crimes (Currency) Act guidelines on request. Contact us at <a href="mailto:info@australianpropmoney.com.au" className="underline hover:text-gold transition-colors font-bold">info@australianpropmoney.com.au</a>.</p>
        </div>

      </div>

    </div>
  );
}
