// src/components/cart/CartItem.jsx

import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="flex items-center gap-6 border-b border-[var(--border)] py-6">
      <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
      
      <div className="flex-grow">
        <p className="text-sm font-semibold text-[var(--accent)]">{item.brand}</p>
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
        <p className="text-sm text-[var(--foreground-secondary)]">Model: {item.model}</p>
      </div>
      <div className="flex items-center border border-[var(--border)] rounded-xl">
        <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="p-3 hover:bg-[var(--border)] rounded-l-xl"><Minus className="h-4 w-4" /></button>
        <input type="text" value={item.quantity} readOnly className="w-12 text-center bg-transparent" />
        <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="p-3 hover:bg-[var(--border)] rounded-r-xl"><Plus className="h-4 w-4" /></button>
      </div>
      <div>
        <p className="text-lg font-bold text-white">${(item.price * item.quantity).toLocaleString()}</p>
      </div>
      <button onClick={() => removeFromCart(item._id)} className="text-[var(--foreground-secondary)] hover:text-red-500">
        <X className="h-6 w-6" />
      </button>
    </div>
  );
}

export default CartItem;