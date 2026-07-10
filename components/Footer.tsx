'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldAlert, CheckCircle2, Send, MessageSquare } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#111111] text-gray-400 pt-16 pb-8 border-t border-gold/10 relative overflow-hidden" id="footer-section">
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About & Info */}
          <div className="space-y-4">
            <div className="flex flex-col leading-none select-none mb-2">
              <span className="text-md font-black tracking-tighter font-serif text-white">
                AUSTRALIAN
              </span>
              <span className="text-[9px] tracking-[0.3em] font-light text-gold mt-1">
                PROP MONEY
              </span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Premium replica currency for film, television, theatre, commercial photography, financial training, and creative media productions. Formulated with color-calibrated matte finishes to achieve 100% realistic representation on modern digital lenses.
            </p>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider space-y-1.5 pt-2">
              <p>Email: <a href="mailto:info@australianpropmoney.org" className="hover:text-gold transition-colors text-white">info@australianpropmoney.org</a></p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-6">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-[11px]">
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
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-5">
              Information
            </h4>
            <ul className="space-y-3 text-[11px] mb-6">
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
            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[9px] uppercase font-bold text-gold tracking-widest block">WhatsApp Rapid Desk</span>
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs text-white hover:text-gold font-bold transition-colors"
                  id="footer-whatsapp-link"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  Live Chat Support
                </a>
              </div>
            )}
          </div>

          {/* Column 4: Newsletter Sign-up */}
          <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 space-y-4 shadow-xs">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Join The Inner Circle
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Receive production updates, compliance guidelines, and exclusive wholesale cryptocurrency coupon drops.
            </p>
            
            {subscribed ? (
              <div className="bg-white/[0.04] p-4 rounded-xl border border-gold/20 flex items-center gap-2.5 text-xs text-gold animate-scale-in">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span>Thank you! Check your inbox for your 10% coupon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex border border-white/10 rounded overflow-hidden">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-black/50 text-white text-[11px] px-3.5 py-2.5 focus:outline-none focus:bg-black/85 transition-all"
                    id="input-footer-newsletter"
                  />
                  <button
                    type="submit"
                    className="bg-gold hover:bg-gold-dark text-white px-4 text-[10px] font-bold uppercase tracking-widest transition-colors focus:outline-none"
                    id="btn-footer-newsletter-submit"
                  >
                    Subscribe
                  </button>
                </div>
                <span className="text-[9px] text-gray-500 font-mono tracking-wide block">
                  Zero spam. Compliant unsubscribe anytime.
                </span>
              </form>
            )}

          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 text-[11px] text-gray-500 leading-relaxed text-center font-serif italic mb-8">
          &quot;All products sold on this website are replica prop items intended exclusively for film production, television, theatre, photography, training, educational and novelty purposes. They are not legal tender and must not be used for any unlawful or fraudulent activity.&quot;
        </div>

        {/* Copy & Fineprint */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-gray-500">
          <p>© 2026 Australian Prop Money. All rights reserved.</p>
          <div className="flex gap-4 uppercase tracking-wider text-[10px]">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
            <a href="https://tiktok.com/@australianpropmoney" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">TikTok</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
