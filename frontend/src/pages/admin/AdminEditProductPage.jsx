// frontend/src/pages/admin/AdminEditProductPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AdminEditProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams(); // Get the product ID from the URL
  
  const [productData, setProductData] = useState({
    name: '', slug: '', brand: '', model: '', price: '', mrp: '', category: '', stock: '', description: '',
  });
  const [loading, setLoading] = useState(true);

  // useEffect to fetch the product data when the component loads
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/products/${productId}`);
        if (!response.ok) throw new Error('Could not fetch product data');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: 'PUT', // Use PUT for updates
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error('Failed to update product');

      navigate('/admin/products'); // Redirect on success
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  
  if (loading) return <p className="text-white">Loading product...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 space-y-6">
        {/* The form JSX is the same as the Add Product form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminEditProductPage;