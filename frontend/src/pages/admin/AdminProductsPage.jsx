// src/pages/admin/AdminProductsPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { sampleProducts } from '../../data/mockData';
import { PlusCircle, FilePen, Trash2 } from 'lucide-react';

function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Product Management</h2>
        <button className="bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
          <PlusCircle className="h-5 w-5" />
          Add New Product
        </button>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-[var(--foreground-secondary)] uppercase border-b border-[var(--border)]">
            <tr>
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">Brand</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3 text-right">Price</th>
              <th className="px-6 py-3 text-center">Stock</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {sampleProducts.map((product) => (
              <tr key={product.id} className="border-b border-[var(--border)] hover:bg-[var(--border)]/50">
                <td className="px-6 py-4 font-medium">{product.name}</td>
                <td className="px-6 py-4 text-[var(--foreground-secondary)]">{product.brand}</td>
                <td className="px-6 py-4 text-[var(--foreground-secondary)]">{product.category}</td>
                <td className="px-6 py-4 text-right">${product.price.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">{product.stock || 'N/A'}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button className="text-[var(--foreground-secondary)] hover:text-[var(--accent)]">
                      <FilePen className="h-4 w-4" />
                    </button>
                    <button className="text-[var(--foreground-secondary)] hover:text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductsPage;