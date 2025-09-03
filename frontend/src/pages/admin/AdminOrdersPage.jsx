// src/pages/admin/AdminOrdersPage.jsx

import React from 'react';
import { mockOrders } from '../../data/mockData';
import { Eye } from 'lucide-react';

function AdminOrdersPage() {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Shipped':
        return 'bg-blue-500/20 text-blue-400';
      case 'Processing':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Delivered':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Order Management</h2>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-[var(--foreground-secondary)] uppercase border-b border-[var(--border)]">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-right">Total</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-b border-[var(--border)] hover:bg-[var(--border)]/50">
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4 text-[var(--foreground-secondary)]">{order.user}</td>
                <td className="px-6 py-4 text-[var(--foreground-secondary)]">{order.date}</td>
                <td className="px-6 py-4 text-right">${order.total.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-[var(--foreground-secondary)] hover:text-[var(--accent)]">
                    <Eye className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrdersPage;