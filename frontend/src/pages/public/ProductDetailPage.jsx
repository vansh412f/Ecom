import React, { useState, useEffect } from 'react'; // 1. Import useState and useEffect
import { useParams, Link } from 'react-router-dom';
import { Star, Shield, Truck, Minus, Plus, ShoppingCart } from 'lucide-react';
import useCartStore from '../../state/cartStore';

function ProductDetailPage() {
  const { productId } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // Re-run if the productId in the URL changes

  if (loading) {
    return <div className="text-center text-white text-xl py-16">Loading product details...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-red-500">Error: {error}</h1>
        <Link to="/" className="mt-4 inline-block text-lg text-[var(--accent)] hover:underline">
          &larr; Back to all products
        </Link>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-8 py-12">
      <nav className="text-sm text-[var(--foreground-secondary)] mb-8">
        <Link to="/" className="hover:text-[var(--accent)]">Home</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-white">{product.category}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-gradient-to-br from-[var(--card)] to-transparent border border-[var(--border)] rounded-3xl p-8">
            <img src={product.images[0] } alt={product.name} className="w-full h-auto object-cover rounded-2xl" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-lg font-semibold text-[var(--accent)]">{product.brand}</span>
            <h1 className="text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-md text-[var(--foreground-secondary)]">Model: {product.model}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.round(product.ratings.average) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
              ))}
            </div>
            <span className="text-md text-white">{product.ratings.average} ({product.ratings.count} reviews)</span>
          </div>

          <div>
            <span className="text-4xl font-bold text-[var(--accent)]">${product.price.toLocaleString()}</span>
            {product.mrp && (
              <span className="text-xl text-[var(--foreground-secondary)] line-through ml-3">${product.mrp.toLocaleString()}</span>
            )}
          </div>
          
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