'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare, Send, Clock, Sparkles } from 'lucide-react';
import { cleanWhatsAppNumber } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          type: 'contact',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
        });
      } else {
        setErrorMessage(data.error || 'Failed to dispatch message. Please try again.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 sm:space-y-24 animate-fade-in" id="contact-page-container">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Get In Touch</span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
          Contact Our Prop Studio
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Need a rapid corporate discount, quick compliance clearance, custom aging services, or order tracking help? Our team responds within 2 hours.
        </p>
      </div>

      {/* Two Column Grid: Details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
        
        {/* Contact info (Column 1-5) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-3">
            <span className="text-gold font-mono uppercase tracking-widest text-xs font-bold block">
              Official Channels
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-black">
              Australian Prop Money Headquarters
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our Sydney based digital workshop prints, distresses, ages, and dispatches premium replica currency products nationwide.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            
            {/* Detail 1: Email */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shrink-0 border border-gold/15">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">Email Communications</span>
                <a href="mailto:info@australianpropmoney.org" className="text-sm font-bold text-black hover:text-gold transition-colors block">
                  info@australianpropmoney.org
                </a>
                <span className="text-[10px] text-gray-400 font-mono block">Zoho Secure Email Server Integration</span>
              </div>
            </div>

            {/* Detail 2: WhatsApp */}
            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shrink-0 border border-gold/15">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">WhatsApp Rapid Support</span>
                  <a 
                    href={`https://wa.me/${cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold text-black hover:text-gold transition-colors block"
                    id="contact-whatsapp-link-box"
                  >
                    {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                  </a>
                  <span className="text-[10px] text-emerald-600 font-semibold block">Available 24/7 for creative sets</span>
                </div>
              </div>
            )}

            {/* Detail 3: Hours */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shrink-0 border border-gold/15">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">Prop Studio Operating Hours</span>
                <span className="text-sm font-bold text-black block">9:00 AM – 6:00 PM (AEST)</span>
                <span className="text-[10px] text-gray-400 block">Monday to Friday (Saturday dispatch on request)</span>
              </div>
            </div>

          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4 space-y-3">
            <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">Dispatched Region</span>
            <div className="relative aspect-16/9 bg-gray-200 rounded-xl overflow-hidden border">
              {/* Fallback pattern mapping representation */}
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-red-500 animate-bounce mb-1" />
                <span className="text-xs font-bold text-black block">Sydney, New South Wales</span>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono block mt-0.5">Corporate Office & Fulfillment</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 italic leading-relaxed text-center">
              ⚠️ In-person pickups are strictly unavailable due to federal polymer storage audits. All orders are processed and dispatched with tracking.
            </p>
          </div>

        </div>

        {/* Contact Form (Column 6-12) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-16 space-y-6 animate-scale-in" id="contact-success">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-xl text-black">Message Dispatched</h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your inquiry has been routed directly to our Sydney lead prop specialist. A formal response will be dispatched within 2 hours.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-black hover:bg-gold text-white hover:text-black py-3 px-6 rounded-lg text-xs uppercase tracking-widest font-bold transition-colors"
                id="btn-contact-reset"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" id="contact-form-root">
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg text-black">Send A Message</h3>
                <p className="text-xs text-gray-500">Provide details of your creative production requirements.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold focus:ring-0 text-black" 
                    id="input-contact-name"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold focus:ring-0 text-black" 
                    id="input-contact-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="e.g. 0400 000 000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold focus:ring-0 text-black" 
                    id="input-contact-phone"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Subject *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold text-black"
                    id="select-contact-subject"
                  >
                    <option>General Inquiry</option>
                    <option>Bulk Quote / Wholesale Tiers</option>
                    <option>Custom Hand-Aging Request</option>
                    <option>Order Verification / Payment Sent</option>
                    <option>Urgent Dispatch Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Your Message *</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  required
                  placeholder="Tell us about your production layout requirements, shoot timeline, or specific questions..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold text-black"
                  id="textarea-contact-message"
                />
              </div>

              {errorMessage && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-sans leading-relaxed border border-red-100" id="contact-error-banner">
                  ⚠️ {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-black hover:bg-gold text-white hover:text-black disabled:bg-gray-200 disabled:text-gray-400 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                id="btn-contact-submit"
              >
                {isSending ? 'Dispatching...' : 'Dispatch Inquiry'}
                <Send className="w-3.5 h-3.5 animate-pulse" />
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
