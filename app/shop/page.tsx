'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, Filter, ShieldAlert, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import ProductDetailsModal from '@/components/ProductDetailsModal';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryParam = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Advanced filters state
  const [selectedDenom, setSelectedDenom] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');

  // Sync state with URL query parameters
  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryParam) {
        setActiveCategory(categoryParam);
      }
      const denomParam = searchParams.get('denom') || 'all';
      if (denomParam) {
        setSelectedDenom(denomParam);
      }
      const searchParam = searchParams.get('search') || '';
      if (searchParam) {
        setSearchQuery(searchParam);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [categoryParam, searchParams]);

  // Compute filtered & sorted products dynamically during render phase to keep component pure
  const processedProducts = PRODUCTS.filter((p) => {
    // Category Filter
    if (activeCategory !== 'all' && p.category !== activeCategory) {
      return false;
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchFeatures = p.features.some((f) => f.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchFeatures) {
        return false;
      }
    }

    // Denomination Filter
    if (selectedDenom !== 'all') {
      const matchDenom = p.name.includes(`$${selectedDenom}`) || p.description.includes(`$${selectedDenom}`);
      if (!matchDenom) {
        return false;
      }
    }

    // Price Range Filter
    if (selectedPriceRange !== 'all') {
      if (selectedPriceRange === 'under-60' && p.price >= 60) return false;
      if (selectedPriceRange === '60-100' && (p.price < 60 || p.price > 100)) return false;
      if (selectedPriceRange === 'over-100' && p.price <= 100) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    return 0; // default (natural order / featured)
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Update URL parameter
    if (category === 'all') {
      router.push('/shop', { scroll: false });
    } else {
      router.push(`/shop?category=${category}`, { scroll: false });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSelectedDenom('all');
    setSelectedPriceRange('all');
    setSortBy('default');
    router.push('/shop', { scroll: false });
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const hasActiveFilters = searchQuery !== '' || activeCategory !== 'all' || selectedDenom !== 'all' || selectedPriceRange !== 'all' || sortBy !== 'default';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in" id="shop-page-container">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest font-bold border border-gold/20">
          <Sparkles className="w-3.5 h-3.5" />
          RBA Guidelines Compliant Stock
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
          Shop Australian Prop Money
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Select from our high-fidelity replica polymer notes. Every bill is designed with color-matched matte organic ink preventing studio flare and conforming strictly to federal guidelines.
        </p>
      </div>

      {/* RBA Legal Banner Warning */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-yellow-800 leading-relaxed max-w-5xl mx-auto">
        <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
        <p>
          <strong>Legality Disclaimer:</strong> All prop currency displayed is strictly for artistic, cinematic, training, and promotional media. They incorporate prominent, un-erasable legal disclaimers stating &quot;NOT LEGAL TENDER&quot;, cannot be mistaken for genuine currency, and are printed on fine matte paper (not genuine polymer).
        </p>
      </div>

      {/* Filters and Search Bar Container */}
      <div className="max-w-5xl mx-auto space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100" id="shop-filters-container">
        {/* Tier 1: Categories & Search */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full lg:w-auto" id="shop-category-filters">
            {[
              { id: 'all', label: 'All Props' },
              { id: 'australian-notes', label: 'Australian Notes' },
              { id: 'movie-prop-money', label: 'Movie Prop Money' },
              { id: 'tv-production-props', label: 'TV Props' },
              { id: 'photography-props', label: 'Photography Props' },
              { id: 'training-currency', label: 'Training Currency' },
              { id: 'bundle-packs', label: 'Bundle Packs' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200/60'
                }`}
                id={`filter-tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prop notes..."
              className="w-full bg-white text-xs pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-gold focus:ring-0 text-black placeholder-gray-400"
              id="shop-search-input"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
          </div>

        </div>

        {/* Tier 2: Advanced filters (Denomination, Price Range, Sorting) */}
        <div className="pt-4 border-t border-gray-200/60 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
          {/* Denomination Filter */}
          <div className="space-y-1">
            <label htmlFor="denom-select" className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block font-mono">Denomination</label>
            <select
              id="denom-select"
              value={selectedDenom}
              onChange={(e) => setSelectedDenom(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-black focus:outline-gold"
            >
              <option value="all">All Denominations</option>
              <option value="100">$100 Notes</option>
              <option value="50">$50 Notes</option>
              <option value="20">$20 Notes</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-1">
            <label htmlFor="price-range-select" className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block font-mono">Price Range</label>
            <select
              id="price-range-select"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-black focus:outline-gold"
            >
              <option value="all">All Prices</option>
              <option value="under-60">Under AUD $60</option>
              <option value="60-100">AUD $60 - $100</option>
              <option value="over-100">Over AUD $100</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="space-y-1">
            <label htmlFor="sort-by-select" className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block font-mono">Sort Catalog By</label>
            <select
              id="sort-by-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs text-black focus:outline-gold"
            >
              <option value="default">Featured & Suggested</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          {/* Clear Filters Action */}
          <div className="sm:col-span-3 lg:col-span-1 pt-4 lg:pt-3.5 flex justify-end">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-[10px] uppercase font-bold tracking-wider text-gold-dark hover:text-black hover:underline flex items-center gap-1.5 transition-all"
                id="btn-shop-reset-filters"
              >
                Reset All Filters ({processedProducts.length} items)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-5xl mx-auto">
        {processedProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <SlidersHorizontal className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 text-xs">No replica props match your current filter parameters or search query.</p>
            <button 
              type="button"
              onClick={handleResetFilters}
              className="mt-4 bg-black text-white px-5 py-2 rounded-lg text-[10px] uppercase font-bold tracking-widest hover:bg-gold transition-colors"
              id="btn-shop-clear-filters"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="shop-product-grid">
            {processedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewProduct}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Specification Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-xs font-mono tracking-widest text-gray-400">
        LOADING SHOP INVENTORY...
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
