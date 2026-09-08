'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ShoppingCart, Check, Star, ShieldCheck, HelpCircle } from 'lucide-react';
import { Product, getCategoryLabel } from '@/lib/products';
import { useCart } from '@/context/CartContext';


interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Reset quantity when modal opens/changes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setQuantity(1);
        setAdded(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6" id="product-detail-modal">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 transition-opacity backdrop-blur-xs"
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-gray-100 flex flex-col md:flex-row animate-scale-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors focus:outline-none"
          aria-label="Close Product Details"
          id="btn-modal-close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Clean Product Image Showcase */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[450px] bg-[#0d0d10] p-6 flex flex-col justify-between text-white border-r border-zinc-800 overflow-hidden">
          {product.image ? (
            <div className="absolute inset-0 z-0 select-none flex items-center justify-center p-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-contain object-center p-4"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-600 font-mono text-xs">
              No Image Available
            </div>
          )}
          
          {/* Subtle Bottom Compliance Tag */}
          <div className="relative z-10 mt-auto pt-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-[10px] font-mono text-zinc-200 font-bold uppercase">RBA Compliant Replica</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-400">{product.sku}</span>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh] md:max-h-[600px]">
          <div className="space-y-5">
            
            {/* Category & Stars */}
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-widest font-bold text-gold font-mono bg-gold/10 px-2.5 py-1 rounded-md">
                {getCategoryLabel(product.category)}
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
            </div>

            {/* Title & Pricing */}
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-black leading-tight">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-serif font-bold text-black">${product.price.toFixed(2)}</span>
                <span className="text-xs text-gray-400 font-mono">AUD (GST Exempt)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed">
              {product.longDescription}
            </p>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Production Highlights</h4>
              <ul className="space-y-1.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications Grid */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2.5">
              <h4 className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px]">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex flex-col border-b border-gray-100/50 pb-1">
                    <span className="text-gray-400 font-medium">{key}</span>
                    <span className="text-black font-semibold mt-0.5">{val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Add To Cart Controls */}
          <div className="pt-6 border-t mt-6 flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shrink-0">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3.5 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                id="btn-modal-qty-minus"
              >
                -
              </button>
              <span className="px-4 py-2 text-xs font-bold text-black bg-gray-50 border-x border-gray-200 min-w-[32px] text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3.5 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                id="btn-modal-qty-plus"
              >
                +
              </button>
            </div>

            {/* Action button */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                added 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-black text-white hover:bg-gold hover:text-black'
              }`}
              id="btn-modal-add-to-cart"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Successfully Added
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Add {quantity > 1 ? `(${quantity})` : ''} to Bag
                </>
              )}
            </button>
          </div>

        
          {/* Trust Elements */}
          <div className="pt-4 mt-2">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[10px] text-gray-500 font-medium">
              <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /> Fast Australia-wide Dispatch</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-gold" /> Secure Checkout</div>
              <div className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-gold" /> Trusted by Film & TV</div>
              <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /> Premium Production Quality</div>
              <div className="col-span-2 flex items-center gap-1.5 mt-1 border-t pt-2"><HelpCircle className="w-3.5 h-3.5 text-blue-500" /> Wholesale Orders & Bulk Discounts Available</div>
            </div>
          </div>
</div>

      </div>
    </div>
  );
}
