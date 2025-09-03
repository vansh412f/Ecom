// src/pages/admin/AdminDashboard.jsx

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockSalesData, mockOrders, sampleProducts, monthlySalesChartData } from '../../data/mockData';
import { DollarSign, ShoppingBag, Package, Users } from 'lucide-react';

function AdminDashboard() {
  const lowStockItems = sampleProducts.filter(p => p.stock && p.stock < 10);

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-[var(--foreground-secondary)]">Total Revenue</h3>
            <DollarSign className="h-4 w-4 text-[var(--foreground-secondary)]" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">${mockSalesData.thisMonth.toLocaleString()}</div>
            <p className="text-xs text-[var(--foreground-secondary)]">+20.1% from last month</p>
          </div>
        </div>
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-[var(--foreground-secondary)]">New Orders</h3>
            <ShoppingBag className="h-4 w-4 text-[var(--foreground-secondary)]" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">+{mockOrders.length}</div>
            <p className="text-xs text-[var(--foreground-secondary)]">in the last 7 days</p>
          </div>
        </div>
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-[var(--foreground-secondary)]">Total Products</h3>
            <Package className="h-4 w-4 text-[var(--foreground-secondary)]" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{sampleProducts.length}</div>
            <p className="text-xs text-[var(--foreground-secondary)]">active in store</p>
          </div>
        </div>
         <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-[var(--foreground-secondary)]">New Customers</h3>
            <Users className="h-4 w-4 text-[var(--foreground-secondary)]" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">+23</div>
            <p className="text-xs text-[var(--foreground-secondary)]">+5 since yesterday</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Chart and Recent Orders */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Sales Overview (Last 7 Months)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlySalesChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--foreground-secondary)" />
              <YAxis stroke="var(--foreground-secondary)" />
              <Tooltip cursor={{fill: 'var(--border)'}} contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}/>
              <Legend />
              <Bar dataKey="sales" fill="var(--accent)" name="Sales ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:col-span-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {mockOrders.slice(0, 4).map(order => (
              <div key={order.id} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-white">{order.user}</p>
                  <p className="text-[var(--foreground-secondary)]">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">${order.total.toLocaleString()}</p>
                  <p className="text-[var(--foreground-secondary)]">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Low Stock Items</h3>
           <table className="w-full text-sm text-left">
            <thead className="text-xs text-[var(--foreground-secondary)] uppercase">
                <tr>
                    <th className="py-2">Product Name</th>
                    <th className="py-2">Brand</th>
                    <th className="py-2 text-center">Stock Left</th>
                </tr>
            </thead>
            <tbody>
                {lowStockItems.map(item => (
                    <tr key={item.id} className="border-b border-[var(--border)]">
                        <td className="py-3 font-medium text-white">{item.name}</td>
                        <td className="py-3">{item.brand}</td>
                        <td className="py-3 text-center text-red-500 font-bold">{item.stock}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    </div>
  );
}

export default AdminDashboard;