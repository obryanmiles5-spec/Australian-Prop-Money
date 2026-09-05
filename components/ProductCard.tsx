'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Eye, Star, Check, Heart, ShieldCheck } from 'lucide-react';
import { Product, getCategoryLabel } from '@/lib/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [added, setAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.image || '/images/hero-macro.jpg');

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const isFavorited = isInWishlist(product.id);

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200/90 overflow-hidden hover:border-gold/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
      id={`product-card-${product.id}`}
    >
      <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.name}</span>
      </Link>

      {/* WooCommerce Style 1:1 Aspect Ratio Image Container */}
      <div className="relative aspect-square w-full bg-[#f6f6f7] overflow-hidden border-b border-gray-100 flex items-center justify-center">
        {/* Crisp, Bright, High-Resolution Product Image */}
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={95}
          referrerPolicy="no-referrer"
          onError={() => setImgSrc('/images/hero-macro.jpg')}
          className="object-cover object-center w-full h-full opacity-100 group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* WooCommerce Corner Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
          <span className="bg-[#111111]/90 backdrop-blur-xs text-gold text-[9px] uppercase font-bold tracking-[0.15em] px-2.5 py-1 rounded-sm border border-gold/30 shadow-xs">
            {getCategoryLabel(product.category)}
          </span>
          <span className="bg-emerald-700/90 text-white text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm shadow-xs flex items-center gap-1 w-fit">
            <ShieldCheck className="w-2.5 h-2.5" />
            RBA Compliant
          </span>
        </div>

        {/* SKU Badge */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <span className="text-[9px] font-mono font-semibold text-zinc-900 bg-white/90 px-2 py-0.5 rounded-sm border border-gray-200/80 shadow-xs">
            {product.sku}
          </span>
        </div>

        {/* Wishlist Button (Top Right) */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 p-2 rounded-full transition-all duration-300 shadow-md focus:outline-none border border-gray-200"
          aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
          id={`btn-wishlist-toggle-${product.id}`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-500 hover:text-red-500'}`} />
        </button>

        {/* WooCommerce Quick Action Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20 pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="pointer-events-auto bg-white hover:bg-gold text-black p-3 rounded-full transition-all duration-300 shadow-lg transform translate-y-2 group-hover:translate-y-0"
            title="Quick View Specs"
            id={`btn-product-quickview-${product.id}`}
          >
            <Eye className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={handleAddToCart}
            className="pointer-events-auto bg-[#111111] hover:bg-gold-dark text-white hover:text-black p-3 rounded-full transition-all duration-300 shadow-lg transform translate-y-2 group-hover:translate-y-0"
            title="Add to Shopping Bag"
            id={`btn-product-add-overlay-${product.id}`}
          >
            {added ? <Check className="w-4 h-4 text-emerald-400" /> : <ShoppingCart className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* WooCommerce Style Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 relative z-20 pointer-events-none bg-white">
        <div className="space-y-1.5">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
            <span className="text-[10px] text-gray-500 font-mono ml-1 font-medium">5.0 (Set Verified)</span>
          </div>
          
          {/* Title */}
          <h3 className="text-base text-gray-900 group-hover:text-gold transition-colors leading-snug font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
            {product.name}
          </h3>
          
          {/* Short Excerpt */}
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Pricing & Add to Cart Button */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between pointer-events-auto">
          <div>
            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider block leading-none mb-0.5">Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-gray-500 font-mono">AUD</span>
              <span className="text-lg text-gray-950 font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
          
          <button
            type="button"
            onClick={handleAddToCart}
            className={`px-4 py-2.5 rounded text-[10px] uppercase font-bold tracking-widest transition-all duration-300 flex items-center gap-1.5 shadow-xs ${
              added 
                ? 'bg-emerald-600 text-white' 
                : 'bg-[#111111] text-white hover:bg-gold hover:text-black active:scale-95'
            }`}
            id={`btn-product-add-${product.id}`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
