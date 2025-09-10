// frontend/src/pages/public/CheckoutPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../state/cartStore';
import useAuthStore from '../../state/authStore';

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const { token } = useAuthStore();

  const [shippingAddress, setShippingAddress] = useState({
    street: '', city: '', postalCode: '', country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxPrice = subtotal * 0.08;
  const shippingPrice = subtotal > 100 ? 0 : 10;
  const totalPrice = subtotal + taxPrice + shippingPrice;

  const placeOrderHandler = async (e) => {
    e.preventDefault();
    try {
      const order = {
        orderItems: items,
        shippingAddress,
        paymentMethod: 'Stripe',
        taxPrice: taxPrice.toFixed(2),
        shippingPrice: shippingPrice.toFixed(2),
        totalPrice: totalPrice.toFixed(2),
      };

      const response = await fetch('http://localhost:8000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the auth token
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      // If successful, clear the cart and redirect to homepage
      clearCart();
      navigate('/');
      alert('Thank you for your order!');

    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };


  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>
      <form onSubmit={placeOrderHandler} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Shipping Form */}
        <div className="lg:col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Shipping Address</h2>
          <div className="space-y-4">
            <input type="text" name="street" placeholder="Street Address" value={shippingAddress.street} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-3" required />
            <input type="text" name="city" placeholder="City" value={shippingAddress.city} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-3" required />
            <input type="text" name="postalCode" placeholder="Postal Code" value={shippingAddress.postalCode} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-3" required />
            <input type="text" name="country" placeholder="Country" value={shippingAddress.country} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-3" required />
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 h-fit">
          <h2 className="text-2xl font-bold text-white border-b border-[var(--border)] pb-4">Order Summary</h2>
          <div className="space-y-4 pt-6">
            <div className="flex justify-between text-lg text-[var(--foreground-secondary)]"><span>Subtotal</span><span className="text-white">${subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between text-lg text-[var(--foreground-secondary)]"><span>Taxes</span><span className="text-white">${taxPrice.toFixed(2)}</span></div>
            <div className="flex justify-between text-lg text-[var(--foreground-secondary)] border-b border-[var(--border)] pb-4"><span>Shipping</span><span className="text-white">${shippingPrice.toFixed(2)}</span></div>
            <div className="flex justify-between text-2xl font-bold text-white pt-4"><span>Total</span><span>${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></div>
          </div>
          {/* 2. The button is now type="submit" */}
          <button type="submit" className="w-full mt-8 bg-[var(--accent)] text-[var(--accent-foreground)] font-bold py-4 rounded-xl text-lg hover:bg-[var(--accent)]/90">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;