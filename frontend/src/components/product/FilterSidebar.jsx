import React from 'react';
import { Filter, X } from 'lucide-react';

function FilterSidebar({ categories, brands, selectedFilters, onFilterChange, clearFilters }) {
  return (
    <aside className="w-80 flex-shrink-0 hidden lg:block">
      <div className="bg-gradient-to-b from-[var(--card)] to-transparent border border-[var(--border)] rounded-3xl p-6 h-fit">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
          <div className="flex items-center space-x-3">
            <Filter className="h-6 w-6 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-white">Filters</h3>
          </div>
          <button 
            className="text-[var(--foreground-secondary)] hover:text-white"
            onClick={clearFilters}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-8 pt-6">
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <label htmlFor={category.id} className="flex items-center space-x-3 text-white cursor-pointer">
                    <input 
                      id={category.id} 
                      type="checkbox" 
                      className="h-4 w-4 rounded bg-[var(--card)] border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
                      checked={selectedFilters.categories.includes(category.label)}
                      onChange={() => onFilterChange('categories', category.label)}
                    />
                    <span>{category.label}</span>
                  </label>
                  <span className="text-sm text-[var(--foreground-secondary)]">({category.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Brands</h4>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center justify-between">
                  <label htmlFor={brand.id} className="flex items-center space-x-3 text-white cursor-pointer">
                    <input 
                      id={brand.id} 
                      type="checkbox" 
                      className="h-4 w-4 rounded bg-[var(--card)] border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
                      checked={selectedFilters.brands.includes(brand.label)}
                      onChange={() => onFilterChange('brands', brand.label)}
                    />
                    <span>{brand.label}</span>
                  </label>
                  <span className="text-sm text-[var(--foreground-secondary)]">({brand.count})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
