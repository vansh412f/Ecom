// frontend/src/pages/public/CategoryPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterSidebar from '../../components/product/FilterSidebar';
import ProductGrid from '../../components/product/ProductGrid';
import { categories, brands } from '../../data/mockData.js';

function CategoryPage() {
  const { categoryName } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Fetch data from our backend, passing the category name as a query
        const response = await fetch(`http://localhost:8000/api/products?category=${categoryName}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]); // Re-run this effect whenever the categoryName changes

  let content;
  if (loading) {
    content = <div className="text-center text-white text-xl">Loading products...</div>;
  } else if (error) {
    content = <div className="text-center text-red-500 text-xl">Error: {error}</div>;
  } else {
    content = <ProductGrid products={products} />;
  }

  return (
    <div className="container mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar categories={categories} brands={brands} />
        <div className="flex-1">
          {content}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;