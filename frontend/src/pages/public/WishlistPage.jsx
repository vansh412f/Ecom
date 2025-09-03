// src/pages/public/WishlistPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/product/ProductCard';
import { sampleProducts } from '../../data/mockData';
import { Heart } from 'lucide-react';

function WishlistPage() {
  // For static build, let's pretend a few items are in the wishlist
  const wishlistItems = sampleProducts.slice(3, 6);
  // const wishlistItems = []; // Uncomment to see the empty view

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Heart className="h-8 w-8 text-[var(--accent)]" />
        <h1 className="text-4xl font-bold text-white">Your Wishlist</h1>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-[var(--border)] rounded-2xl">
          <h2 className="text-2xl font-bold text-white">Your Wishlist is Empty</h2>
          <p className="mt-2 text-lg text-[var(--foreground-secondary)]">
            Add items you love to your wishlist to save them for later.
          </p>
          <Link to="/" className="mt-6 inline-block bg-[var(--accent)] text-[var(--accent-foreground)] font-bold py-3 px-8 rounded-xl">
            Discover Products
          </Link>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;