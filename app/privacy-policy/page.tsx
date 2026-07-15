import React from 'react';
import { ShieldCheck, EyeOff, Lock, Landmark } from 'lucide-react';
import { Metadata } from 'next';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Privacy Policy | Australian Prop Money',
  description: 'Our commitment to your privacy when purchasing australian prop money and au prop money.',
  alternates: {
    canonical: `${cleanBaseUrl}/privacy-policy`,
  }
};



export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 animate-fade-in" id="privacy-policy-page">
      
      <div className="space-y-4 text-center max-w-2xl mx-auto border-b pb-6">
        <h1 className="font-serif font-bold text-3xl text-black">Privacy Policy</h1>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Australian Prop Money Confidentiality Charter</p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
        
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            1. Commitment to Confidentiality
          </h2>
          <p>
            At Australian Prop Money, we recognize that production budgets, movie scripts, and prop procurement details are highly sensitive commercial secrets. We are fully committed to protecting your personal and corporate details in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-gold" />
            2. Discrete Transaction Processing
          </h2>
          <p>
            To provide the ultimate level of discrete service for creative agencies, independent creators, and corporate training centers:
          </p>
          <ul className="space-y-2 pl-4 list-disc">
            <li><strong>• Private Banking Logs:</strong> Payments made via Direct EFT Bank Transfer or PayID are processed securely on private Australian bank servers and are never logged on third-party aggregators.</li>
            <li><strong>• Crypto Privacy:</strong> Cryptocurrency payments (BTC) are completed peer-to-peer, maintaining the highest levels of digital privacy and security.</li>
            <li><strong>• Zero Selling of Data:</strong> We never sell, rent, trade, or share your contact info, email addresses, or shipping details with other marketing or prop bureaus.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <Lock className="w-5 h-5 text-gold" />
            3. Information We Collect
          </h2>
          <p>
            We strictly collect only the minimal data required to securely process and deliver your order, including:
          </p>
          <ul className="space-y-1.5 pl-4 list-disc">
            <li>• Your Name and Professional Studio/Agency Details</li>
            <li>• Delivery shipping address</li>
            <li>• Email address for invoice delivery and tracking updates</li>
            <li>• Contact phone number for shipping courier notifications</li>
            <li>• Special notes regarding production scene requirements (e.g. distressed edge notes)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-black flex items-center gap-2">
            <Landmark className="w-5 h-5 text-gold" />
            4. Legal Disclosures
          </h2>
          <p>
            We operate fully in accordance with Commonwealth laws. While we protect your privacy as a creative studio, we will cooperate with legal authorities if we receive a verified federal warrant regarding counterfeit fraud or illegal activity violating the Crimes (Currency) Act 1981.
          </p>
        </section>

        <div className="bg-gray-50 p-5 rounded-2xl border text-center space-y-2">
          <p className="font-bold text-xs text-black uppercase tracking-wider">Want Your Personal Records Purged?</p>
          <p className="text-xs text-gray-500">You may request complete removal of your order logs and email data post-dispatch by contacting our Privacy Desk at <a href="mailto:info@australianpropmoney.com.au" className="underline hover:text-gold transition-colors font-bold">info@australianpropmoney.com.au</a>.</p>
        </div>

      </div>

    </div>
  );
}
