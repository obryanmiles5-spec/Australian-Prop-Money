'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Product } from '@/lib/products';

export interface CartItem {
  id: string; // Unique combination of product and selected variations
  product: Product;
  quantity: number;
  options?: {
    aging?: string; // Standard Clean, Light Circulation, Heavy Distress, Burned/Damaged
    band?: string; // Standard Paper, Reserve Bank, Loose
    customSerial?: string; // Standard Sequential, Custom Specified
    serialText?: string; // If custom specified
  };
  priceAtTimeOfAdding: number; // Base price plus any selected variation upcharges
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postcode: string;
  productionName?: string;
  specialNotes?: string;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (product: Product, quantity: number, options?: CartItem['options']) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  couponCode: string;
  discountPercentage: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  paymentMethod: 'bank' | 'payid' | 'crypto';
  setPaymentMethod: (method: 'bank' | 'payid' | 'crypto') => void;
  cartCount: number;
  subtotal: number;
  discountAmount: number;
  shippingCost: number;
  total: number;
  isOrderSimulated: boolean;
  simulatedOrderDetails: any | null;
  submitOrder: (shippingInfo: ShippingInfo) => void;
  resetOrderSimulation: () => void;
  minOrderRequired: number;
  
  // Wishlist functionality
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Recently viewed products
  recentlyViewed: Product[];
  addToRecentlyViewed: (product: Product) => void;
  
  // Tab control
  activeCartTab: 'cart' | 'wishlist';
  setActiveCartTab: (tab: 'cart' | 'wishlist') => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'payid' | 'crypto'>('bank');
  
  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [activeCartTab, setActiveCartTab] = useState<'cart' | 'wishlist'>('cart');
  
  // Recently viewed state
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  // Simulated Order States
  const [isOrderSimulated, setIsOrderSimulated] = useState(false);
  const [simulatedOrderDetails, setSimulatedOrderDetails] = useState<any | null>(null);

  const minOrderRequired = 150.00; // Minimum Order AUD $150 (except crypto is $50)

  // Load state from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('amp_cart');
    const savedCoupon = localStorage.getItem('amp_coupon');
    const savedDiscount = localStorage.getItem('amp_discount');
    const savedWishlist = localStorage.getItem('amp_wishlist');
    const savedRecentlyViewed = localStorage.getItem('amp_recently_viewed');

    const timer = setTimeout(() => {
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          if (Array.isArray(parsed)) {
            const migrated = parsed.map((item: any) => {
              if (item && item.priceAtTimeOfAdding === undefined) {
                // Calculate dynamic price based on the product and options
                const basePrice = item.product?.price ?? 0;
                let finalPrice = basePrice;
                if (item.options?.aging === 'Light Circulation') finalPrice += 5.00;
                if (item.options?.aging === 'Heavy Distress') finalPrice += 10.00;
                if (item.options?.aging === 'Burned/Damaged') finalPrice += 15.00;
                if (item.options?.customSerial === 'Custom Specified') finalPrice += 15.00;
                
                return {
                  ...item,
                  priceAtTimeOfAdding: finalPrice
                };
              }
              return item;
            });
            setCart(migrated);
          }
        } catch (e) {
          console.error('Failed to parse cart', e);
        }
      }
      if (savedCoupon && savedDiscount) {
        setCouponCode(savedCoupon);
        setDiscountPercentage(parseFloat(savedDiscount));
      }
      if (savedWishlist) {
        try {
          setWishlist(JSON.parse(savedWishlist));
        } catch (e) {
          console.error('Failed to parse wishlist', e);
        }
      }
      if (savedRecentlyViewed) {
        try {
          setRecentlyViewed(JSON.parse(savedRecentlyViewed));
        } catch (e) {
          console.error('Failed to parse recently viewed', e);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Save cart to localStorage
  const saveCartToStorage = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('amp_cart', JSON.stringify(newCart));
  };

  // Helper to compute dynamic item price based on selected options
  const calculateItemPrice = (product: Product, options?: CartItem['options']): number => {
    let finalPrice = product.price;
    if (options?.aging === 'Light Circulation') finalPrice += 5.00;
    if (options?.aging === 'Heavy Distress') finalPrice += 10.00;
    if (options?.aging === 'Burned/Damaged') finalPrice += 15.00;
    if (options?.customSerial === 'Custom Specified') finalPrice += 15.00;
    return finalPrice;
  };

  // Helper to generate unique cart item ID
  const generateCartItemId = (productId: string, options?: CartItem['options']): string => {
    if (!options) return productId;
    const sortedOptionsStr = Object.entries(options)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([k, v]) => `${k}:${v}`)
      .join('|');
    return `${productId}_${sortedOptionsStr}`;
  };

  const addToCart = (product: Product, quantity: number, options?: CartItem['options']) => {
    const cartItemId = generateCartItemId(product.id, options);
    const existingIndex = cart.findIndex((item) => item.id === cartItemId);
    const itemPrice = calculateItemPrice(product, options);
    
    let newCart = [...cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({
        id: cartItemId,
        product,
        quantity,
        options,
        priceAtTimeOfAdding: itemPrice
      });
    }
    saveCartToStorage(newCart);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    const newCart = cart.filter((item) => item.id !== cartItemId);
    saveCartToStorage(newCart);
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    const newCart = cart.map((item) => {
      if (item.id === cartItemId) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCartToStorage(newCart);
  };

  const clearCart = () => {
    saveCartToStorage([]);
    removeCoupon();
  };

  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'PROPMONEYAU') {
      setCouponCode('PROPMONEYAU');
      setDiscountPercentage(30);
      localStorage.setItem('amp_coupon', 'PROPMONEYAU');
      localStorage.setItem('amp_discount', '30');
      return true;
    }
    if (cleanCode === 'WELCOME10') {
      setCouponCode('WELCOME10');
      setDiscountPercentage(10);
      localStorage.setItem('amp_coupon', 'WELCOME10');
      localStorage.setItem('amp_discount', '10');
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCouponCode('');
    setDiscountPercentage(0);
    localStorage.removeItem('amp_coupon');
    localStorage.removeItem('amp_discount');
  };

  // Wishlist helpers
  const toggleWishlist = (productId: string) => {
    let newWishlist = [...wishlist];
    const index = newWishlist.indexOf(productId);
    if (index > -1) {
      newWishlist.splice(index, 1);
    } else {
      newWishlist.push(productId);
    }
    setWishlist(newWishlist);
    localStorage.setItem('amp_wishlist', JSON.stringify(newWishlist));
  };

  const isInWishlist = (productId: string): boolean => {
    return wishlist.includes(productId);
  };

  // Recently viewed helpers
  const addToRecentlyViewed = useCallback((product: Product) => {
    setRecentlyViewed((prev) => {
      if (prev.length > 0 && prev[0].id === product.id) {
        return prev;
      }
      let newRecent = prev.filter((p) => p.id !== product.id);
      newRecent.unshift(product);
      newRecent = newRecent.slice(0, 4);
      localStorage.setItem('amp_recently_viewed', JSON.stringify(newRecent));
      return newRecent;
    });
  }, []);

  // Dynamic calculations based on option pricing
  const activeDiscountPercentage = (couponCode === 'PROPMONEYAU' && paymentMethod === 'crypto') 
    ? 30 
    : (couponCode === 'WELCOME10' ? 10 : 0);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.priceAtTimeOfAdding ?? item.product?.price ?? 0) * item.quantity, 0);
  const discountAmount = subtotal * (activeDiscountPercentage / 100);
  const shippingCost = subtotal >= 200 ? 0 : 15.00; // Free shipping over $200, else $15 Express
  const total = subtotal - discountAmount + shippingCost;

  const submitOrder = (shippingInfo: ShippingInfo) => {
    const orderId = `AMP-${Math.floor(100000 + Math.random() * 900000)}`;
    const orderDate = new Date().toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    let paymentInstructions = '';
    if (paymentMethod === 'bank') {
      paymentInstructions = `
        Account Name: Australian Prop Money Pty Ltd
        BSB: 062-900 (Commonwealth Bank of Australia)
        Account Number: 1048 3922
        Reference: ${orderId}
      `;
    } else if (paymentMethod === 'payid') {
      paymentInstructions = `
        PayID Type: Email
        PayID Address: payments@australianpropmoney.org
        Registered Name: Australian Prop Money Pty Ltd
        Reference: ${orderId}
      `;
    } else if (paymentMethod === 'crypto') {
      paymentInstructions = `
        USDT (TRC-20) Address: TXYz89aXyZ89qRwX19BcdEfGhIjKlMnOpQ
        Bitcoin (BTC) Address: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfJH7
        Ethereum (ETH) Address: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F
        Please send exactly: ${((subtotal - discountAmount + shippingCost) / 1.5).toFixed(2)} USD value
        Reference / Memo: ${orderId}
      `;
    }

    const details = {
      orderId,
      orderDate,
      shippingInfo,
      items: [...cart],
      subtotal,
      discountAmount,
      discountPercentage: activeDiscountPercentage,
      shippingCost,
      total,
      paymentMethod,
      paymentInstructions,
      couponCode: activeDiscountPercentage > 0 ? couponCode : ''
    };

    setSimulatedOrderDetails(details);
    setIsOrderSimulated(true);
    
    // Clear cart
    setCart([]);
    localStorage.removeItem('amp_cart');
  };

  const resetOrderSimulation = () => {
    setIsOrderSimulated(false);
    setSimulatedOrderDetails(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        couponCode,
        discountPercentage: activeDiscountPercentage,
        applyCoupon,
        removeCoupon,
        paymentMethod,
        setPaymentMethod,
        cartCount,
        subtotal,
        discountAmount,
        shippingCost,
        total,
        isOrderSimulated,
        simulatedOrderDetails,
        submitOrder,
        resetOrderSimulation,
        minOrderRequired,
        wishlist,
        toggleWishlist,
        isInWishlist,
        recentlyViewed,
        addToRecentlyViewed,
        activeCartTab,
        setActiveCartTab
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
