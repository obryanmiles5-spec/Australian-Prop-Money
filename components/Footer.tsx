'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldAlert, CheckCircle2, Send, MessageSquare } from 'lucide-react';
import { cleanWhatsAppNumber } from '@/lib/utils';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          type: 'subscription',
          source: 'Website Footer Form',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubscribed(true);
        setEmail('');
      } else {
        setErrorMsg(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#111111] text-gray-400 pt-6 pb-4 border-t border-gold/10 relative overflow-hidden" id="footer-section">
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          
          {/* Column 1: About & Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 select-none mb-1">
              <div className="w-7 h-7 bg-black text-gold rounded-lg flex items-center justify-center border border-gold/20 shadow-sm shrink-0">
                <svg viewBox="0 0 100 100" className="w-4.5 h-4.5 fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="4"/>
                  <circle cx="50" cy="50" r="36" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <path d="M50 25 L53.5 35 L64 35 L55.5 41 L59 51 L50 45 L41 51 L44.5 41 L36 35 L46.5 35 Z" fill="#D4AF37" stroke="none"/>
                  <path d="M32 60 H68 M35 65 H65" stroke="#D4AF37" strokeWidth="2.5"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-black tracking-tighter font-serif text-white">
                  AUSTRALIAN
                </span>
                <span className="text-[7px] tracking-[0.3em] font-light text-gold mt-0.5">
                  PROP MONEY
                </span>
              </div>
            </div>
            <p className="text-[10.5px] text-gray-400 leading-relaxed">
              Premium replica currency for film, television, theatre, commercial photography, financial training, and creative media productions. Formulated with color-calibrated matte finishes to achieve 100% realistic representation on modern digital lenses.
            </p>
            <div className="text-[9.5px] text-gray-500 uppercase tracking-wider space-y-1 mt-2">
              <p>Phone: <a href="tel:+61468187340" className="hover:text-gold transition-colors text-white">+61 468 187 340</a></p>
              <p>Email: <a href="mailto:info@australianpropmoney.org" className="hover:text-gold transition-colors text-white">info@australianpropmoney.org</a></p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-6">
            <h4 className="text-[11px] uppercase tracking-widest text-white font-bold mb-2">
              Navigation
            </h4>
            <ul className="space-y-1 text-[10.5px]">
              {[
                { label: 'Home Page', href: '/' },
                { label: 'Shop Props', href: '/shop' },
                { label: 'Wholesale & Bulk Quotes', href: '/wholesale' },
                { label: 'About Our Mission', href: '/about' },
                { label: 'Production Blog & Tutorials', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                   <Link href={link.href} id={`footer-nav-link-${link.label.toLowerCase().replace(/ /g, '-')}`} className="hover:text-gold transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-white font-bold mb-2">
              Information
            </h4>
            <ul className="space-y-1 text-[10.5px] mb-3">
              {[
                { label: 'Shipping Policy', href: '/shipping-policy' },
                { label: 'Refund Policy', href: '/refund-policy' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} id={`footer-legal-link-${link.label.toLowerCase().replace(/ /g, '-')}`} className="hover:text-gold transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {true && (
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 space-y-0.5">
                <span className="text-[8.5px] uppercase font-bold text-gold tracking-widest block">WhatsApp Rapid Desk</span>
                <a 
                  href={`https://wa.me/${cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61468187340')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-[11px] text-white hover:text-gold font-bold transition-colors"
                  id="footer-whatsapp-link"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-500" />
                  Live Chat Support
                </a>
              </div>
            )}
          </div>

          {/* Column 4: Newsletter Sign-up */}
          <div className="bg-[#1A1A1A] p-3 rounded-xl border border-white/5 space-y-2 shadow-xs">
            <h4 className="text-[11px] uppercase tracking-widest text-white font-bold">
              Join The Inner Circle
            </h4>
            <p className="text-[10.5px] text-gray-400 leading-relaxed">
              Receive production updates, compliance guidelines, and exclusive wholesale cryptocurrency coupon drops.
            </p>
            
            {subscribed ? (
              <div className="bg-white/[0.04] p-3 rounded-lg border border-gold/30 space-y-1 text-[10.5px] text-gold animate-scale-in">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>VIP Confirmation Sent!</span>
                </div>
                <p className="text-[9.5px] text-gray-300 leading-normal">
                  Your 15% welcome code (<strong className="text-white font-mono">WELCOME15</strong>) was dispatched to your email, and studio notification sent to <span className="text-white font-mono">info@australianpropmoney.org</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-1.5">
                <div className="flex border border-white/10 rounded overflow-hidden">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS"
                    disabled={isSubmitting}
                    className="w-full bg-black/50 text-white text-[10px] px-2.5 py-1.5 focus:outline-none focus:bg-black/85 transition-all disabled:opacity-60"
                    id="input-footer-newsletter"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold hover:bg-gold-dark text-white px-2.5 text-[9px] font-bold uppercase tracking-widest transition-colors focus:outline-none disabled:opacity-60 shrink-0"
                    id="btn-footer-newsletter-submit"
                  >
                    {isSubmitting ? 'Joining...' : 'Join'}
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-[9px] text-red-400 font-sans">{errorMsg}</p>
                )}
                <span className="text-[8.5px] text-gray-500 font-mono tracking-wide block">
                  Zero spam. Direct dispatch to studio desk.
                </span>
              </form>
            )}

          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-[#1A1A1A] p-2.5 rounded-xl border border-white/5 text-[9.5px] text-gray-500 leading-relaxed text-center font-serif italic mb-4">
          &quot;All products sold on this website are replica prop items intended exclusively for film production, television, theatre, photography, training, educational and novelty purposes. They are not legal tender and must not be used for any unlawful or fraudulent activity.&quot;
        </div>

        {/* SEO Text Box */}
        <div className="text-[9px] text-gray-600 leading-relaxed text-center mb-4 max-w-4xl mx-auto px-4">
          Looking for the best australian prop money? Whether you need prop money australia, prop bundles of money australia, or just wondering where to buy australian prop money, we are your #1 source. We supply high quality prop money, fake australian money prop, fake money props, and aus prop money to top film and television sets. All our movie prop money australia is legally compliant and designed strictly for cameras. If you want to buy prop money near me securely, order today for fast AU delivery.
        </div>

        {/* Copy & Fineprint */}
        <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[10px] text-gray-500">
          <p>© 2026 Australian Prop Money. All rights reserved.</p>
          <div className="flex gap-3 uppercase tracking-wider text-[9px]">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
            <a href="https://tiktok.com/@australianpropmoney" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">TikTok</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
