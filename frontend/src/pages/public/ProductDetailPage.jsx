// src/pages/public/ProductDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleProducts } from '../../data/mockData.js';
import { Star, Shield, Truck, CreditCard, Minus, Plus, ShoppingCart } from 'lucide-react';
import useCartStore from '../../state/cartStore'; 

function ProductDetailPage() {
  const { productId } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  
  const product = sampleProducts.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">Product Not Found</h1>
        <Link to="/" className="mt-4 inline-block text-lg text-[var(--accent)] hover:underline">
          &larr; Back to all products
        </Link>
      </div>
    );
  }
    
  // THIS DUPLICATE BLOCK BELOW WAS THE ERROR AND HAS BEEN REMOVED.
  // return (
  //   <div className="container mx-auto px-8 py-16 text-center"> ... </div>
  // );

  // The function now correctly continues to this main return statement.
  return (
    <div className="container mx-auto px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-[var(--foreground-secondary)] mb-8">
        <Link to="/" className="hover:text-[var(--accent)]">Home</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-white">{product.category}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Product Image */}
        <div>
          <div className="bg-gradient-to-br from-[var(--card)] to-transparent border border-[var(--border)] rounded-3xl p-8">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-2xl" />
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-lg font-semibold text-[var(--accent)]">{product.brand}</span>
            <h1 className="text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-md text-[var(--foreground-secondary)]">Model: {product.model}</p>
          </div>
          {/* ... Rest of the JSX is the same */}
          <div className="bg-[var(--card)]/50 border border-[var(--border)] rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-white">Quantity</span>
              <div className="flex items-center border border-[var(--border)] rounded-xl">
                <button className="p-3 hover:bg-[var(--border)] rounded-l-xl"><Minus className="h-4 w-4" /></button>
                <input type="text" value="1" readOnly className="w-12 text-center bg-transparent border-x border-[var(--border)]" />
                <button className="p-3 hover:bg-[var(--border)] rounded-r-xl"><Plus className="h-4 w-4" /></button>
              </div>
            </div>
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-[var(--accent)]/90"
            >
              <ShoppingCart className="h-6 w-6" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;