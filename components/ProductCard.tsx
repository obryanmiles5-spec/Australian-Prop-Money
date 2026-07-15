'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Eye, Star, Check, Heart } from 'lucide-react';
import { Product, getCategoryLabel } from '@/lib/products';
import { useCart } from '@/context/CartContext';


interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [added, setAdded] = useState(false);

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

  const handleCardClick = () => {
    router.push(`/product/${product.id}`);
  };

  const isFavorited = isInWishlist(product.id);

  return (
    <div 
      className="bg-white border border-gray-100 overflow-hidden hover:border-gold hover:shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
      onClick={handleCardClick}
      id={`product-card-${product.id}`}
    >
      {/* Compliance & Badge Header (No Images) */}
      <div className="relative aspect-[4/2] bg-gradient-to-br from-zinc-950 via-zinc-900 to-slate-900 flex flex-col justify-between p-4 overflow-hidden border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <span className="bg-gold/10 text-gold text-[8px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 rounded-sm border border-gold/20">
            {getCategoryLabel(product.category)}
          </span>
          <span className="text-[9px] font-mono text-zinc-500 font-semibold">{product.sku}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400 font-mono block">
            Replica Currency
          </span>
          <span className="text-[8px] tracking-widest text-zinc-500 block uppercase font-mono mt-0.5">
            RBA COMPLIANT
          </span>
        </div>
        
        {/* Wishlist Button (Heart) */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-10 bg-zinc-800/80 hover:bg-zinc-800 text-white hover:text-red-500 p-2 rounded-full transition-all duration-300 shadow-xs focus:outline-none"
          aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
          id={`btn-wishlist-toggle-${product.id}`}
        >
          <Heart className={`w-3 h-3 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} />
        </button>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white hover:bg-gold text-black p-2.5 rounded-full transition-all duration-300 shadow-md transform translate-y-1 group-hover:translate-y-0"
            title="Quick View Specs"
            id={`btn-product-quickview-${product.id}`}
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
          
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-black hover:bg-gold-dark text-white hover:text-black p-2.5 rounded-full transition-all duration-300 shadow-md transform translate-y-1 group-hover:translate-y-0"
            title="Add to Shopping Bag"
            id={`btn-product-add-overlay-${product.id}`}
          >
            {added ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <ShoppingCart className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Stars & Rating */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
            <span className="text-[9px] text-gray-400 font-mono ml-1.5 uppercase tracking-wider">5.0 (Set Tested)</span>
          </div>

          <h3 className="text-md text-black group-hover:text-gold transition-colors leading-snug font-light" style={{ fontFamily: 'Georgia, serif' }}>
            {product.name}
          </h3>
          
          <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing and Main CTA */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider block leading-none mb-1">Price (AUD)</span>
            <span className="text-md text-black font-semibold" style={{ fontFamily: 'Georgia, serif' }}>${product.price.toFixed(2)}</span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`px-4 py-2 text-[10px] uppercase font-bold tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
              added 
                ? 'bg-emerald-500 text-white' 
                : 'bg-[#111111] text-white hover:bg-gold hover:text-black'
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
