'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Heart, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/lib/products';


export default function SideCart() {
  const router = useRouter();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    discountPercentage,
    couponCode,
    applyCoupon,
    removeCoupon,
    shippingCost,
    total,
    wishlist,
    toggleWishlist,
    addToCart,
    activeCartTab,
    setActiveCartTab
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState(false);
  const [couponSuccess, setCouponSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(false);
    setCouponSuccess(false);
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponSuccess(true);
    } else {
      setCouponError(true);
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    router.push('/checkout');
  };

  // Filter products for the wishlist display
  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="side-cart-root">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
      />

      {/* Drawer Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in">
          
          {/* Header & Tabs */}
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif font-light text-lg tracking-tight text-black">
                Bag & Wishlist
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-50 transition-colors"
                id="btn-cart-close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Selectors */}
            <div className="flex border border-gray-100 rounded-lg p-0.5 bg-gray-50">
              <button
                type="button"
                onClick={() => setActiveCartTab('cart')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                  activeCartTab === 'cart'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-gray-400 hover:text-black'
                }`}
                id="tab-cart-btn"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
              </button>
              <button
                type="button"
                onClick={() => setActiveCartTab('wishlist')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                  activeCartTab === 'wishlist'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-gray-400 hover:text-black'
                }`}
                id="tab-wishlist-btn"
              >
                <Heart className="w-3.5 h-3.5" />
                Wishlist ({wishlist.length})
              </button>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {activeCartTab === 'cart' ? (
              /* TAB 1: SHOPPING CART */
              <div className="space-y-6" id="cart-items-panel">
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <p className="text-gray-400 text-xs font-sans">Your shopping bag is currently empty.</p>
                    <Link
                      href="/shop"
                      onClick={() => setIsCartOpen(false)}
                      className="inline-block bg-[#111111] hover:bg-gold text-white hover:text-black px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
                      id="btn-cart-empty-shop"
                    >
                      Shop Replica Props
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4 divide-y divide-gray-100">
                    {cart.map((item, index) => (
                      <div key={`${item.id || item.product?.id || 'cart-item'}-${index}`} className="flex gap-4 pt-4 first:pt-0" id={`cart-item-${item.id || index}`}>
                        {/* Custom Currency Icon Badge */}
                        <div className="w-20 h-20 bg-zinc-950 rounded-xs flex flex-col items-center justify-center border border-zinc-800 shrink-0 font-mono text-white p-2">
                          <span className="text-gold font-bold text-xs tracking-wide">PROP</span>
                          <span className="text-[8px] text-zinc-500 uppercase tracking-tight">Replica</span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-serif text-sm text-black leading-tight line-clamp-1">
                              {item.product.name}
                            </h4>
                            
                            {/* Selected Options / Variations */}
                            {item.options && (
                              <div className="text-[10px] text-gray-400 mt-1 space-y-0.5 leading-tight font-sans">
                                {item.options.aging && <p>• Treatment: <span className="text-gray-600 font-medium">{item.options.aging}</span></p>}
                                {item.options.band && <p>• Band style: <span className="text-gray-600 font-medium">{item.options.band}</span></p>}
                                {item.options.customSerial === 'Custom Specified' && (
                                  <p>• Custom Serial: <span className="text-gray-600 font-medium">{item.options.serialText || 'Specified'}</span></p>
                                )}
                              </div>
                            )}

                            <p className="text-[10px] text-gray-500 font-mono mt-1">
                              ${(item.priceAtTimeOfAdding ?? item.product?.price ?? 0).toFixed(2)} each
                            </p>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity Control */}
                            <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-0.5 text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                                id={`btn-cart-qty-minus-${item.id}`}
                              >
                                <Minus className="w-2.5 h-2.5" />
                              </button>
                              <span className="px-2.5 py-0.5 text-[11px] font-semibold text-black bg-gray-50 border-x border-gray-200 min-w-[24px] text-center font-mono">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-0.5 text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                                id={`btn-cart-qty-plus-${item.id}`}
                              >
                                <Plus className="w-2.5 h-2.5" />
                              </button>
                            </div>

                            {/* Remove */}
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-red-50 transition-all"
                              title="Remove item"
                              id={`btn-cart-remove-${item.id}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* TAB 2: WISHLIST */
              <div className="space-y-6" id="wishlist-items-panel">
                {wishlistedProducts.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <Heart className="w-8 h-8 text-gray-200 mx-auto" />
                    <p className="text-gray-400 text-xs font-sans">Your wishlist is currently empty.</p>
                    <Link
                      href="/shop"
                      onClick={() => setIsCartOpen(false)}
                      className="inline-block border border-black hover:bg-black hover:text-white px-6 py-2 text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
                      id="btn-wishlist-empty-shop"
                    >
                      Browse Props
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4 divide-y divide-gray-100">
                    {wishlistedProducts.map((product, index) => (
                      <div key={`${product.id || 'wishlist-item'}-${index}`} className="flex gap-4 pt-4 first:pt-0" id={`wishlist-item-${product.id || index}`}>
                        {/* Custom Currency Icon Badge */}
                        <div className="w-16 h-16 bg-zinc-950 rounded-xs flex flex-col items-center justify-center border border-zinc-800 shrink-0 font-mono text-white p-1">
                          <span className="text-gold font-bold text-[10px] tracking-wide">PROP</span>
                          <span className="text-[7px] text-zinc-500 uppercase tracking-tight">Replica</span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-serif text-xs text-black leading-tight line-clamp-1">
                              {product.name}
                            </h4>
                            <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                              ${product.price.toFixed(2)} AUD
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-1">
                            {/* Add directly to bag */}
                            <button
                              type="button"
                              onClick={() => {
                                addToCart(product, 1);
                                setActiveCartTab('cart');
                              }}
                              className="text-[9px] uppercase font-bold tracking-wider text-gold hover:text-black flex items-center gap-1 transition-colors"
                              id={`btn-wishlist-add-${product.id}`}
                            >
                              <ShoppingCart className="w-3 h-3" />
                              Move to Cart
                            </button>

                            {/* Remove from wishlist */}
                            <button
                              type="button"
                              onClick={() => toggleWishlist(product.id)}
                              className="text-[9px] uppercase tracking-wider text-gray-400 hover:text-red-500 transition-colors"
                              id={`btn-wishlist-remove-${product.id}`}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
          </div>

          {/* Persistent Footer/Summary Panel */}
          {activeCartTab === 'cart' && cart.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-gray-50/50 space-y-4">
              
              {/* Coupon Input Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-2">
                <label className="text-[9px] uppercase font-bold text-gray-400 tracking-wider block">Promo Coupon</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="e.g. WELCOME10"
                    className="flex-1 bg-white border border-gray-200 px-3 py-1.5 text-xs rounded-xs focus:outline-gold uppercase text-black"
                    id="input-cart-coupon"
                  />
                  <button
                    type="submit"
                    className="bg-[#111111] hover:bg-gold text-white hover:text-black text-[9px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-xs transition-all shrink-0"
                    id="btn-cart-coupon-apply"
                  >
                    Apply
                  </button>
                </div>
                
                {couponCode && (
                  <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2 rounded-xs text-xs border border-emerald-100">
                    <span>Code <strong>{couponCode}</strong> Active ({discountPercentage}% Off)</span>
                    <button type="button" onClick={removeCoupon} className="text-red-600 font-bold text-[9px] uppercase hover:underline">Remove</button>
                  </div>
                )}
                
                {couponError && (
                  <p className="text-[9px] text-red-500 font-semibold">Invalid coupon code. Try &apos;WELCOME10&apos;.</p>
                )}
              </form>

              <div className="space-y-1.5 text-xs border-t border-gray-100 pt-3">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-black font-semibold font-mono">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount ({discountPercentage}%)</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-500">
                  <span>Express Dispatch</span>
                  <span className="text-black font-semibold font-mono">
                    {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-black border-t pt-2 mt-2">
                  <span className="font-medium">Total Payable (AUD)</span>
                  <span className="text-black font-bold text-md font-mono">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Minimum Order Warning */}
              {subtotal < 150.00 && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-800 text-[10px] rounded-sm space-y-1">
                  <p className="font-bold uppercase tracking-wider">⚠️ Minimum Order Alert</p>
                  <p className="text-gray-600 leading-normal font-sans">
                    Minimum order is <strong>$150.00 AUD</strong> for standard checkout, or <strong>$50.00 AUD</strong> for cryptocurrency checkout. 
                    {subtotal < 50.00 ? (
                      <span> Add at least <strong>${(50.00 - subtotal).toFixed(2)} AUD</strong> more to checkout.</span>
                    ) : (
                      <span> Add <strong>${(150.00 - subtotal).toFixed(2)} AUD</strong> more for standard, or proceed now using Crypto.</span>
                    )}
                  </p>
                </div>
              )}

              {/* Legal Disclaimer Box */}
              <div className="p-3 bg-white rounded-xs border border-gray-100 text-[9px] text-gray-400 italic leading-relaxed">
                ⚖️ <strong>Compliance Disclaimer:</strong> All replica bills have RBA required markings. Not legal tender.
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleProceedToCheckout}
                disabled={subtotal < 50.00}
                className={`w-full py-3.5 font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-xs flex items-center justify-center gap-2 ${
                  subtotal < 50.00
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-black hover:bg-gold text-white hover:text-black'
                }`}
                id="btn-cart-checkout-proceed"
              >
                Secure Checkout
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
