'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, CheckCircle2, Copy, Sparkles } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or subscribed
    const isDismissed = localStorage.getItem('amp_newsletter_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000); // Trigger after 4 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('amp_newsletter_dismissed', 'true');
    setIsOpen(false);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    
    // Simulate API registration
    localStorage.setItem('amp_newsletter_dismissed', 'true');
    setSubscribed(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('WELCOME15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="newsletter-popup-root">
      {/* Backdrop */}
      <div 
        onClick={handleDismiss}
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-6 sm:p-8 animate-scale-in text-center space-y-6">
        
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-50 transition-colors"
          aria-label="Close newsletter signup"
          id="btn-newsletter-close"
        >
          <X className="w-5 h-5" />
        </button>

        {!subscribed ? (
          /* STAGE 1: SIGNUP FORM */
          <div className="space-y-4" id="newsletter-form-panel">
            {/* Custom Icon Accent */}
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold-dark border border-gold/15">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 block font-mono">Join the Prop Master Registry</span>
              <h2 className="font-serif text-2xl font-light text-black tracking-tight leading-tight">
                Unlock 15% Off Your First Batch
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                Subscribe to receive discrete alerts on prop-aging masterclasses, new polymer code designs, and wholesale coupon releases.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
              <div className="relative text-xs">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your crew email address..."
                  className="w-full bg-gray-50 border border-gray-200/80 pl-10 pr-4 py-3 rounded-xl focus:outline-gold focus:bg-white text-black text-xs font-sans"
                  required
                  id="newsletter-email-input"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gold text-white hover:text-black py-3.5 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all duration-300 shadow-md"
                id="btn-newsletter-subscribe"
              >
                Join Creative Registry
              </button>
            </form>

            <span className="text-[9px] text-gray-400 block font-mono">
              🔒 Zero spam. High-fidelity set guides only.
            </span>
          </div>
        ) : (
          /* STAGE 2: SUBSCRIPTION SUCCESS & REWARD */
          <div className="space-y-4 py-4 animate-fade-in" id="newsletter-success-panel">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-light text-black tracking-tight">Welcome to the Registry</h2>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                You are registered. Copy the credential code below to claim your introductory 15% discount during checkout:
              </p>
            </div>

            {/* Code Box */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gold/40 flex items-center justify-between font-mono max-w-xs mx-auto">
              <div className="text-left">
                <span className="text-[8px] text-gray-400 uppercase tracking-wider block font-sans">Active Promo Code</span>
                <span className="text-black font-bold text-sm tracking-wide">WELCOME15</span>
              </div>
              <button
                onClick={handleCopy}
                className="bg-black hover:bg-gold text-white hover:text-black font-bold text-[9px] uppercase tracking-widest py-2 px-4 rounded-xl transition-all flex items-center gap-1 shrink-0"
                id="btn-newsletter-copy-code"
              >
                <Copy className="w-3 h-3" />
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <button
              onClick={handleDismiss}
              className="text-xs text-gray-400 hover:text-black hover:underline pt-2 block mx-auto"
              id="btn-newsletter-success-dismiss"
            >
              Continue exploring inventory catalog
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
