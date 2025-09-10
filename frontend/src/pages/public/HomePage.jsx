import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/home/HeroSection';
import FilterSidebar from '../../components/product/FilterSidebar';
import ProductGrid from '../../components/product/ProductGrid';
import { categories, brands, sampleProducts } from '../../data/mockData.js';

function HomePage() {
  // 2. Set up state for products, loading, and errors
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. useEffect hook to fetch data when the component loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from our backend API
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data); // Set the fetched products into state
      } catch (error) {
        setError(error.message); // Set error state if fetching fails
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchProducts();
  }, []); // The empty array [] ensures this effect runs only once

  // 4. Conditionally render based on loading and error states
  let content;
  if (loading) {
    content = <div className="text-center text-white text-xl">Loading products...</div>;
  } else if (error) {
    content = <div className="text-center text-red-500 text-xl">Error: {error}</div>;
  } else {
    content = <ProductGrid products={products} />;
  }

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar categories={categories} brands={brands} />
          <div className="flex-1">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;