import React, { useState, useMemo } from 'react';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import '../styles/CategoryGrid.css';

const CategoryGrid = ({ selectedCategory = 'all' }) => {
  const [filters, setFilters] = useState({
    category: selectedCategory,
    color: [],
    size: [],
    priceRange: [0, 1000]
  });

  const [sortBy, setSortBy] = useState('newest');

  // Get unique colors and sizes from products
  const uniqueColors = [...new Set(products.flatMap(p => p.colors))];
  const uniqueSizes = [...new Set(products.flatMap(p => p.sizes))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products;

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Color filter
    if (filters.color.length > 0) {
      result = result.filter(p =>
        filters.color.some(c => p.colors.includes(c))
      );
    }

    // Size filter
    if (filters.size.length > 0) {
      result = result.filter(p =>
        filters.size.some(s => p.sizes.includes(s))
      );
    }

    // Price filter
    result = result.filter(p =>
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    // 'newest' is default order

    return result;
  }, [filters, sortBy]);

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category });
  };

  const handleColorChange = (color) => {
    setFilters(prev => ({
      ...prev,
      color: prev.color.includes(color)
        ? prev.color.filter(c => c !== color)
        : [...prev.color, color]
    }));
  };

  const handleSizeChange = (size) => {
    setFilters(prev => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter(s => s !== size)
        : [...prev.size, size]
    }));
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    setFilters(prev => ({
      ...prev,
      priceRange: [prev.priceRange[0], newPrice]
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      color: [],
      size: [],
      priceRange: [0, 1000]
    });
    setSortBy('newest');
  };

  return (
    <div className="category-grid-page">
      <div className="category-grid-header">
        <h1>Shop All</h1>
        <p>{filteredProducts.length} products</p>
      </div>

      <div className="category-grid-container">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Category</h3>
            <div className="filter-options">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={filters.category === 'all'}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                />
                All Products
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="Essentials"
                  checked={filters.category === 'Essentials'}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                />
                Essentials
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="Signature"
                  checked={filters.category === 'Signature'}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                />
                Signature
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="Heritage Denim"
                  checked={filters.category === 'Heritage Denim'}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                />
                Heritage Denim
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="Statement"
                  checked={filters.category === 'Statement'}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                />
                Statement
              </label>
            </div>
          </div>

          {/* Color Filter */}
          <div className="filter-section">
            <h3>Color</h3>
            <div className="filter-options">
              {uniqueColors.map(color => (
                <label key={color}>
                  <input
                    type="checkbox"
                    checked={filters.color.includes(color)}
                    onChange={() => handleColorChange(color)}
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="filter-section">
            <h3>Size</h3>
            <div className="filter-options">
              {uniqueSizes.map(size => (
                <label key={size}>
                  <input
                    type="checkbox"
                    checked={filters.size.includes(size)}
                    onChange={() => handleSizeChange(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-filter">
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={handlePriceChange}
                className="price-slider"
              />
              <div className="price-display">
                ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear All Filters
          </button>
        </aside>

        {/* Products Section */}
        <section className="products-section">
          {/* Sort Options */}
          <div className="sort-bar">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => {
                      // Navigate to product detail
                      console.log('Navigate to product:', product.id);
                    }}
                  />
                ))}
              </div>
              
              <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '4rem', paddingBottom: '2rem' }}>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>1</button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'transparent', color: '#666', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>2</button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'transparent', color: '#666', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>3</button>
                <span style={{ color: '#666' }}>...</span>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'transparent', color: '#666', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>12</button>
                <button style={{ background: 'transparent', color: '#1a1a1a', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginLeft: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Next Page <span>→</span>
                </button>
              </div>
            </>
          ) : (
            <div className="no-products">
              <p>No products found matching your filters.</p>
              <button onClick={clearFilters} className="reset-btn">
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CategoryGrid;
