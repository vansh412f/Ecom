// src/pages/public/HomePage.jsx

import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import FilterSidebar from '../../components/product/FilterSidebar';
import ProductGrid from '../../components/product/ProductGrid';
import { categories, brands, sampleProducts } from '../../data/mockData.js';

function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar categories={categories} brands={brands} />
          <ProductGrid products={sampleProducts} />
        </div>
      </div>
    </>
  );
}

export default HomePage;