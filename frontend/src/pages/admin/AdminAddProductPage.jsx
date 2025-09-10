// frontend/src/pages/admin/AdminAddProductPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminAddProductPage() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    slug: '',
    brand: '',
    model: '',
    price: '',
    mrp: '',
    category: '',
    stock: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      // On success, redirect back to the product list
      navigate('/admin/products');
    } catch (error) {
      console.error('Error creating product:', error);
      // Here you could set an error state to show a message to the user
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Product Name</label>
            <input type="text" name="name" id="name" value={productData.name} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required />
          </div>
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-white mb-2">Slug</label>
            <input type="text" name="slug" id="slug" value={productData.slug} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required />
          </div>
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-white mb-2">Brand</label>
            <input type="text" name="brand" id="brand" value={productData.brand} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required />
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-white mb-2">Model</label>
            <input type="text" name="model" id="model" value={productData.model} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-white mb-2">Price ($)</label>
            <input type="number" name="price" id="price" value={productData.price} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required />
          </div>
          <div>
            <label htmlFor="mrp" className="block text-sm font-medium text-white mb-2">MRP ($)</label>
            <input type="number" name="mrp" id="mrp" value={productData.mrp} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" />
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-white mb-2">Stock</label>
            <input type="number" name="stock" id="stock" value={productData.stock} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-white mb-2">Category</label>
            <input type="text" name="category" id="category" value={productData.category} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white mb-2">Description</label>
          <textarea name="description" id="description" rows="4" value={productData.description} onChange={handleChange} className="w-full bg-transparent border border-[var(--border)] rounded-lg p-2" required></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold py-2 px-6 rounded-lg">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminAddProductPage;