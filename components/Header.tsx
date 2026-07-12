'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, DollarSign, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Videos', href: '/videos' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, wishlist, setActiveCartTab } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 select-none group" id="logo-link">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black text-gold rounded-xl flex items-center justify-center border border-gold/20 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="4"/>
                  <circle cx="50" cy="50" r="36" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <path d="M50 25 L53.5 35 L64 35 L55.5 41 L59 51 L50 45 L41 51 L44.5 41 L36 35 L46.5 35 Z" fill="#D4AF37" stroke="none"/>
                  <path d="M32 60 H68 M35 65 H65" stroke="#D4AF37" strokeWidth="2.5"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-md sm:text-lg font-black tracking-tighter font-serif text-black leading-none group-hover:text-gold transition-colors duration-300">
                  AUSTRALIAN
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.3em] font-light text-gray-500 leading-none mt-1">
                  PROP MONEY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    id={`nav-link-${item.label.toLowerCase()}`}
                    className={`text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 pb-1 border-b-2 ${
                      isActive 
                        ? 'text-gold border-gold' 
                        : 'text-black border-transparent hover:text-gold hover:border-gold'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Icons & Mobile Trigger */}
            <div className="flex items-center gap-3">
              
              {/* Wishlist Button */}
              <button
                onClick={() => {
                  setActiveCartTab('wishlist');
                  setIsCartOpen(true);
                }}
                className="relative p-2 hover:bg-gray-50 rounded-full transition-all duration-300 group focus:outline-none"
                aria-label="Open Wishlist"
                id="header-wishlist-btn"
              >
                <Heart className="w-5.5 h-5.5 text-black group-hover:text-red-500 transition-colors" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white font-sans font-bold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm animate-scale-in font-mono">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={() => {
                  setActiveCartTab('cart');
                  setIsCartOpen(true);
                }}
                className="relative p-2 hover:bg-gray-50 rounded-full transition-all duration-300 group focus:outline-none"
                aria-label="Open Shopping Cart"
                id="header-cart-btn"
              >
                <ShoppingBag className="w-5.5 h-5.5 text-black group-hover:text-gold transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-white font-sans font-bold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm animate-scale-in font-mono">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 hover:bg-gray-50 rounded-full transition-all duration-300 focus:outline-none"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Content Container */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <span className="font-serif font-bold text-lg tracking-tight">Navigation</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-gray-500 hover:text-black transition-colors"
                id="btn-close-mobile-nav"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    id={`mobile-nav-link-${item.label.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm uppercase tracking-widest font-bold py-2 border-l-2 pl-4 transition-all duration-300 ${
                      isActive 
                        ? 'text-gold border-gold font-extrabold' 
                        : 'text-gray-700 border-transparent hover:text-gold hover:border-gold/30'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 font-mono text-center mb-4 uppercase tracking-wider">
              Australian Prop Money
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="text-[10px] uppercase text-gray-500 tracking-wider block">Minimum order required</span>
              <span className="text-sm font-semibold font-serif text-black mt-1 block">AUD $150.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
