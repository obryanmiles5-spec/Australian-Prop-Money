'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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

  const isFavorited = isInWishlist(product.id);

  return (
    <div 
      className="bg-white border border-gray-100 overflow-hidden hover:border-gold hover:shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
      id={`product-card-${product.id}`}
    >
      <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.name}</span>
      </Link>
      {/* Clean 1:1 Square Image Display (No Text Overlays on Image) */}
      <div className="relative aspect-square bg-[#0e0e11] overflow-hidden border-b border-gray-100 flex items-center justify-center">
        {product.image ? (
          <div className="absolute inset-0 z-0 select-none">
            <Image
              src={product.image}
              alt={product.name}
              fill
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              referrerPolicy="no-referrer"
              className="object-contain object-center p-3 group-hover:scale-105 transition-all duration-500 z-0"
            />
          </div>
        ) : (
          <div className="text-zinc-600 font-mono text-xs">No Image Available</div>
        )}
        
        {/* Wishlist Button (Heart) */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black text-white hover:text-red-500 p-2 rounded-full transition-all duration-300 shadow-xs focus:outline-none backdrop-blur-xs"
          aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
          id={`btn-wishlist-toggle-${product.id}`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-white hover:text-red-500'}`} />
        </button>

        {/* Quick View & Add Button overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20 pointer-events-none group-hover:pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white hover:bg-gold text-black p-2.5 rounded-full transition-all duration-300 shadow-md transform translate-y-1 group-hover:translate-y-0 cursor-pointer"
            title="Quick View Specs"
            id={`btn-product-quickview-${product.id}`}
          >
            <Eye className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-black hover:bg-gold-dark text-white hover:text-black p-2.5 rounded-full transition-all duration-300 shadow-md transform translate-y-1 group-hover:translate-y-0 cursor-pointer"
            title="Add to Shopping Bag"
            id={`btn-product-add-overlay-${product.id}`}
          >
            {added ? <Check className="w-4 h-4 text-emerald-500" /> : <ShoppingCart className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 relative z-20 pointer-events-none">
        <div className="space-y-2.5">
          {/* Category Label & SKU */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold font-mono">
              {getCategoryLabel(product.category)}
            </span>
            <span className="text-[9px] font-mono text-zinc-400 font-medium">
              {product.sku}
            </span>
          </div>

          {/* Stars & Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
            <span className="text-[9px] text-gray-400 font-mono ml-1 uppercase tracking-wider">5.0 (Set Tested)</span>
          </div>
          
          <h3 className="text-base text-black group-hover:text-gold transition-colors leading-snug font-normal" style={{ fontFamily: 'Georgia, serif' }}>
            {product.name}
          </h3>
          
          <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing and Main CTA */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between pointer-events-auto">
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
