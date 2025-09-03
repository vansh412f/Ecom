// src/components/product/ProductGrid.jsx

import React from 'react';
import ProductCard from './ProductCard.jsx';
import { ArrowUpDown } from 'lucide-react';

function ProductGrid({ products }) {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">
            Premium Home Electronics
          </h2>
          <p className="text-[var(--foreground-secondary)] text-lg">
            {products.length.toLocaleString()} products found
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <ArrowUpDown className="h-5 w-5 text-[var(--foreground-secondary)]" />
          <select className="w-52 bg-[var(--card)] border border-[var(--border)] text-white rounded-xl h-12 px-4 focus:border-[var(--accent)] focus:ring-0">
            <option>Featured Products</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product} // Pass all product data as props to the card
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;