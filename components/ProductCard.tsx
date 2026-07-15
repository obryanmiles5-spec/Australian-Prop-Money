'use client';

import React, { useState } from 'react';
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
      {/* Product Image & Tags */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        {product.image && product.image.trim() !== '' ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            className="object-cover group-hover:scale-102 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-4 border border-dashed border-gray-200">
            <span className="text-[10px] tracking-wider uppercase font-mono text-gray-500 font-bold mb-1">Image Pending</span>
            <span className="text-[8px] tracking-tight uppercase font-mono text-gray-400">Ready for upload</span>
          </div>
        )}
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-black/90 text-white text-[9px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-xs">
          {getCategoryLabel(product.category)}
        </span>

        {/* Wishlist Button (Heart) */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-black hover:text-red-500 p-2 rounded-full transition-all duration-300 shadow-xs focus:outline-none"
          aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
          id={`btn-wishlist-toggle-${product.id}`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'}`} />
        </button>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white hover:bg-gold text-black p-3 rounded-full transition-all duration-300 shadow-md transform translate-y-1 group-hover:translate-y-0"
            title="Quick View Specs"
            id={`btn-product-quickview-${product.id}`}
          >
            <Eye className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-black hover:bg-gold-dark text-white hover:text-black p-3 rounded-full transition-all duration-300 shadow-md transform translate-y-1 group-hover:translate-y-0"
            title="Add to Shopping Bag"
            id={`btn-product-add-overlay-${product.id}`}
          >
            {added ? <Check className="w-4 h-4 text-emerald-500" /> : <ShoppingCart className="w-4 h-4" />}
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
