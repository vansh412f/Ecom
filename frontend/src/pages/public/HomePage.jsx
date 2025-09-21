import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/home/HeroSection';
import FilterSidebar from '../../components/product/FilterSidebar';
import ProductGrid from '../../components/product/ProductGrid';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({ categories: [], brands: [], sort: 'price-low' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handler for filter changes
  const handleFilterChange = (type, value) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (type === 'sort') {
        newFilters.sort = value;
      } else {
        if (newFilters[type].includes(value)) {
          newFilters[type] = newFilters[type].filter(item => item !== value);
        } else {
          newFilters[type] = [...newFilters[type], value];
        }
      }
      return newFilters;
    });
  };

  // Function to clear all filters
  const clearFilters = () => {
    setSelectedFilters({ categories: [], brands: [] });
  };

  // Fetch products and derive categories/brands
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);

        // Derive unique categories and brands
        const uniqueCategories = [...new Set(data.map(product => product.category))].map((cat, index) => ({
          id: `cat-${index}`,
          label: cat,
          count: data.filter(p => p.category === cat).length
        }));
        const uniqueBrands = [...new Set(data.map(product => product.brand))].map((brand, index) => ({
          id: `brand-${index}`,
          label: brand,
          count: data.filter(p => p.brand === brand).length
        }));

        setCategories(uniqueCategories);
        setBrands(uniqueBrands);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Re-fetch products when filters change
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (selectedFilters.categories.length > 0) {
          queryParams.append('category', selectedFilters.categories.join(','));
        }
        if (selectedFilters.brands.length > 0) {
          queryParams.append('brand', selectedFilters.brands.join(','));
        }
        const response = await fetch(`http://localhost:8000/api/products?${queryParams}`);
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

    fetchFilteredProducts();
  }, [selectedFilters]);

  let content;
  if (loading) {
    content = <div className="text-center text-white text-xl">Loading products...</div>;
  } else if (error) {
    content = <div className="text-center text-red-500 text-xl">Error: {error}</div>;
  } else {
    content = <ProductGrid 
      products={products} 
      currentSort={selectedFilters.sort}
      onSortChange={handleFilterChange}
    />;
  }

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar 
            categories={categories} 
            brands={brands} 
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            clearFilters={clearFilters}
          />
          <div className="flex-1">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;