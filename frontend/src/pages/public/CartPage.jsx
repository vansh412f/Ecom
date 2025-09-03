// src/pages/public/CartPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { sampleProducts } from '../../data/mockData';
import CartItem from '../../components/cart/CartItem';
import useCartStore from '../../state/cartStore';

function CartPage() {
  // For static build, we'll pretend the first two products are in the cart
  const { items, updateQuantity, removeFromCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">Your Cart is Empty</h1>
        <Link to="/" className="mt-6 inline-block bg-[var(--accent)] text-[var(--accent-foreground)] font-bold py-3 px-8 rounded-xl text-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Cart Items */}
        <div className="lg:col-span-2">
          {/* THIS WAS THE LINE WITH THE ERROR. It should be items.map, not cartItems.map */}
          {items.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
            />
          ))}
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 h-fit">
          <h2 className="text-2xl font-bold text-white border-b border-[var(--border)] pb-4">Order Summary</h2>
          <div className="space-y-4 pt-6">
            <div className="flex justify-between text-lg text-[var(--foreground-secondary)]">
              <span>Subtotal</span>
              <span className="text-white">${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg text-[var(--foreground-secondary)]">
              <span>Taxes</span>
              <span className="text-white">${tax.toFixed(2)}</span>
            </div>
             <div className="flex justify-between text-lg text-[var(--foreground-secondary)] border-b border-[var(--border)] pb-4">
              <span>Shipping</span>
              <span className="text-green-400">FREE</span>
            </div>
            <div className="flex justify-between text-2xl font-bold text-white pt-4">
              <span>Total</span>
              <span>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
          <button className="w-full mt-8 bg-[var(--accent)] text-[var(--accent-foreground)] font-bold py-4 rounded-xl text-lg hover:bg-[var(--accent)]/90">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;