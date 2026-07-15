'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Check } from 'lucide-react';

interface SaleItem {
  location: string;
  product: string;
  time: string;
  qty: number;
}

const AustralianSales: SaleItem[] = [
  { location: 'Sydney, NSW', product: 'Buy Counterfeit $50 AUD (Old Design) Stack', time: '2 minutes ago', qty: 2 },
  { location: 'Melbourne, VIC', product: 'Buy Counterfeit $100 AUD (Old Design) Stack', time: '5 minutes ago', qty: 1 },
  { location: 'Brisbane, QLD', product: 'Buy Counterfeit $20 AUD (Old Design) Stack', time: '12 minutes ago', qty: 3 },
  { location: 'Adelaide, SA', product: 'Buy Counterfeit $50 AUD (Old Design) Stack', time: '21 minutes ago', qty: 1 },
  { location: 'Perth, WA', product: 'Buy Counterfeit $100 AUD (Old Design) Stack', time: '34 minutes ago', qty: 4 },
  { location: 'Gold Coast, QLD', product: 'Buy Counterfeit $10 AUD (Old Design) Stack', time: '41 minutes ago', qty: 2 },
  { location: 'Newcastle, NSW', product: 'Buy Counterfeit $50 AUD (Old Design) Stack', time: '55 minutes ago', qty: 1 },
  { location: 'Geelong, VIC', product: 'Buy Counterfeit $100 AUD (Old Design) Stack', time: '1 hour ago', qty: 2 },
];

export default function SaleNotification() {
  const [currentSale, setCurrentSale] = useState<SaleItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        return sessionStorage.getItem('amp_sale_notification_dismissed') === 'true';
      } catch (e) {
        return false;
      }
    }
    return false;
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isDismissed) return;

    // Show first notification after 6 seconds
    const initialDelay = setTimeout(() => {
      setCurrentSale(AustralianSales[0]);
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(initialDelay);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || !isVisible) return;

    // Auto hide after 6 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isDismissed]);

  useEffect(() => {
    if (isDismissed || isVisible) return;

    // Wait 22 seconds between notifications
    const nextTimer = setTimeout(() => {
      const nextIndex = (index + 1) % AustralianSales.length;
      setIndex(nextIndex);
      setCurrentSale(AustralianSales[nextIndex]);
      setIsVisible(true);
    }, 22000);

    return () => clearTimeout(nextTimer);
  }, [isVisible, index, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('amp_sale_notification_dismissed', 'true');
      } catch (e) {
        // Ignore
      }
    }
  };

  if (isDismissed || !currentSale) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] pointer-events-none max-w-[340px] w-full px-4 sm:px-0" id="sale-notif-container">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="pointer-events-auto bg-zinc-950/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-start gap-3.5 relative overflow-hidden"
            id={`sale-notification-${index}`}
          >
            {/* Top Border Gold Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500/80" />

            {/* Icon */}
            <div className="bg-amber-500/10 text-amber-500 rounded-xl p-2 shrink-0 border border-amber-500/15 flex items-center justify-center mt-0.5">
              <ShoppingBag className="w-5 h-5" />
            </div>

            {/* Content text */}
            <div className="flex-1 space-y-1 min-w-0 pr-5">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-sans text-zinc-400 font-light truncate">
                  Someone in <strong className="text-zinc-200 font-medium">{currentSale.location}</strong>
                </span>
                <span className="inline-flex items-center gap-0.5 bg-emerald-500/10 text-[#25D366] text-[9px] font-medium font-sans px-1.5 py-0.5 rounded-full border border-emerald-500/15">
                  <Check className="w-2 h-2 stroke-[3]" />
                  Verified
                </span>
              </div>
              
              <p className="text-xs font-serif font-bold text-zinc-100 leading-snug line-clamp-2">
                Purchased {currentSale.qty}x {currentSale.product}
              </p>

              <span className="block text-[9px] text-amber-500/80 font-mono">
                {currentSale.time}
              </span>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-200 p-1 rounded-full transition-colors focus:outline-none"
              id="btn-close-sale-notification"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
