'use client';

import React from 'react';
import { Package, ShieldAlert, Truck, Sparkles, MessageSquare } from 'lucide-react';
import WholesaleForm from '@/components/WholesaleForm';
import { cleanWhatsAppNumber } from '@/lib/utils';

export default function WholesalePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 sm:space-y-24 animate-fade-in" id="wholesale-page-container">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-black text-gold px-3.5 py-1.5 rounded-full text-[10px] uppercase font-mono tracking-widest font-bold border border-gold/30">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          Production Bulk Accounts
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
          Wholesale & Bulk Production Orders
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Planning high-volume scenes, banking heists, or specialized design configurations? Complete our production spec form below for industry-discounted quotes within 2 hours.
        </p>
      </div>

      {/* Grid: Form on Left, Side Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
        
        {/* Multi-step Form (Column 1-2) */}
        <div className="lg:col-span-2">
          <WholesaleForm />
        </div>

        {/* Info Column (Column 3) */}
        <div className="space-y-6 lg:sticky lg:top-24">
          
          {/* Box 1: Wholesaler Tiers */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-black border-b pb-2 flex items-center gap-2">
              <Package className="w-4 h-4 text-gold" />
              Wholesale Discount Tiers
            </h3>
            <div className="space-y-3 text-xs leading-relaxed text-gray-600">
              <div className="flex justify-between border-b border-gray-200 pb-1.5">
                <span className="font-semibold text-black">Order Over $500</span>
                <span className="text-gold-dark font-bold">15% Off</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1.5">
                <span className="font-semibold text-black">Order Over $1,000</span>
                <span className="text-gold-dark font-bold">25% Off</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1.5">
                <span className="font-semibold text-black">Order Over $2,500</span>
                <span className="text-gold-dark font-bold">35% Off</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="font-semibold text-black">Custom Vault Scenes</span>
                <span className="text-gold-dark font-bold">Bespoke Rates</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">
                * Note: Wholesale discount pricing is applied manually to bulk invoices upon verification of shoot details.
              </p>
            </div>
          </div>

          {/* Box 2: Bulk Delivery Guarantee */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-black border-b pb-2 flex items-center gap-2">
              <Truck className="w-4 h-4 text-gold" />
              Production Express
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We understand fast-paced shooting schedules. All approved wholesale contracts enjoy guaranteed priority printing and instant <strong>Courier-Express Next Day Delivery</strong> Australia-wide.
            </p>
            <div className="text-[10px] bg-white p-2 border rounded-md font-mono text-gray-400">
              ⚡ Tracking provided immediately via email.
            </div>
          </div>

          {/* Box 3: WhatsApp Support */}
          {true && (
            <div className="bg-[#0D0D0D] text-white p-6 rounded-2xl border border-gold/15 space-y-4">
              <div className="space-y-1">
                <span className="text-gold uppercase font-mono tracking-widest text-[9px] font-bold block">
                  Instant Action Line
                </span>
                <h3 className="font-serif font-bold text-sm text-white">
                  Chat Directly With Prop Supervisor
                </h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Have a rush scene starting tomorrow or need customized distressing references (burned edges, blood splatters, water damage)? Connect instantly on our verified WhatsApp line.
              </p>
              <a 
                href={`https://wa.me/${cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "61480852682")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-white text-black hover:bg-gold hover:text-black py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2"
                id="wholesale-wa-chat-box"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                Open Live WhatsApp Chat
              </a>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
