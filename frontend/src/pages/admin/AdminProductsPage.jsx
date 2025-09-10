// src/pages/admin/AdminProductsPage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, FilePen, Trash2 } from 'lucide-react';

function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect to fetch data when the component loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); // Empty array ensures this runs only once on mount
const handleDelete = async (productId) => {
    // Add a confirmation dialog to prevent accidental deletion
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete product');
        }

        // On success, refresh the product list to show the change
        fetchProducts(); 
      } catch (err) {
        console.error(err);
        // Optionally, set an error state to show an error message to the admin
      }
    }
  };

  if (loading) return <p className="text-white">Loading products...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Product Management</h2>
        <Link to="/admin/products/add" className="bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
          <PlusCircle className="h-5 w-5" />
          Add New Product
        </Link>
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
            {products.map((product) => (
              <tr key={product._id} className="border-b border-[var(--border)] hover:bg-[var(--border)]/50">
                <td className="px-6 py-4 font-medium">{product.name}</td>
                <td className="px-6 py-4 text-[var(--foreground-secondary)]">{product.brand}</td>
                <td className="px-6 py-4 text-[var(--foreground-secondary)]">{product.category}</td>
                <td className="px-6 py-4 text-right">${product.price.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">{product.stock || 'N/A'}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <Link to={`/admin/products/${product._id}/edit`} className="text-[var(--foreground-secondary)] hover:text-[var(--accent)]">
                  <FilePen className="h-4 w-4" />
                </Link>
                    <button onClick={() => handleDelete(product._id)} className="text-[var(--foreground-secondary)] hover:text-red-500">
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