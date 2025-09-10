// frontend/src/pages/user/OrderHistoryPage.jsx

import React, { useState, useEffect } from 'react';
import useAuthStore from '../../state/authStore';

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/orders/myorders', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  if (loading) return <p className="text-white text-center">Loading order history...</p>;

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">My Orders</h1>
      {/* Table to display orders would go here */}
       <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl">
         <table className="w-full text-sm text-left">
           <thead className="text-xs text-[var(--foreground-secondary)] uppercase">
             <tr>
               <th className="px-6 py-3">Order ID</th>
               <th className="px-6 py-3">Date</th>
               <th className="px-6 py-3 text-right">Total</th>
               <th className="px-6 py-3 text-center">Paid</th>
               <th className="px-6 py-3 text-center">Delivered</th>
             </tr>
           </thead>
           <tbody className="text-white">
             {orders.map((order) => (
               <tr key={order._id} className="border-t border-[var(--border)]">
                 <td className="px-6 py-4 font-mono">{order._id}</td>
                 <td className="px-6 py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                 <td className="px-6 py-4 text-right">${order.totalPrice.toFixed(2)}</td>
                 <td className="px-6 py-4 text-center">{order.isPaid ? 'Yes' : 'No'}</td>
                 <td className="px-6 py-4 text-center">{order.isDelivered ? 'Yes' : 'No'}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
    </div>
  );
}

export default OrderHistoryPage;