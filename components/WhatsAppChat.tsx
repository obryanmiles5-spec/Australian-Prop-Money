'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { cleanWhatsAppNumber } from '@/lib/utils';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messageText, setMessageText] = useState('Hi, I need assistance with prop money for my upcoming production.');

  const whatsappNumber = cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61480852682');

  useEffect(() => {
    if (!whatsappNumber) return;
    // Show a subtle tooltip after 4 seconds to invite user action
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [whatsappNumber]);

  if (!whatsappNumber) {
    return null;
  }

  const handleStartChat = () => {
    const encodedMessage = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  // Trigger circle button only without unrequested tooltip/text
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none" id="whatsapp-widget-container">
      {/* Expanded Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-4 pointer-events-auto"
            id="whatsapp-chat-box"
          >
            {/* Header */}
            <div className="bg-[#075e54] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-white flex items-center gap-1.5">
                    Prop Specialist Chat
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  </h4>
                  <p className="text-[10px] text-emerald-100 font-sans">Typically responds in under 5 minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-full transition-colors text-white"
                aria-label="Close chat window"
                id="btn-close-whatsapp-box"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 bg-[#e5ddd5] min-h-[140px] flex flex-col justify-end space-y-4">
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-xs text-gray-800 leading-relaxed font-sans">
                <span className="font-semibold text-[#075e54] block mb-1">Sydney Prop Studio</span>
                Hello! Welcome to Australian Prop Money support. Let us know what kind of shoot or production you are planning today!
                <span className="block text-[9px] text-gray-400 text-right mt-1 font-mono">Just now</span>
              </div>
            </div>

            {/* Chat Input / Action Area */}
            <div className="p-4 bg-white border-t border-gray-100 space-y-3">
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message..."
                rows={2}
                className="w-full border border-gray-200 p-3 rounded-xl text-xs text-gray-800 focus:outline-[#075e54] focus:ring-0 resize-none font-sans"
                id="whatsapp-message-input"
              />
              <button
                onClick={handleStartChat}
                className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                id="btn-send-whatsapp-message"
              >
                Start Live WhatsApp Chat
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* The Trigger Circle Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative border-2 border-white/20 select-none cursor-pointer group"
          id="btn-whatsapp-trigger"
          aria-label="Toggle live chat support window"
        >
          {/* Internal Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#25d366] animate-ping opacity-30 group-hover:opacity-0 transition-opacity" />
          
          <MessageSquare className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        </motion.button>
      </div>
    </div>
  );
}
