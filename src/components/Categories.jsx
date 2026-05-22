import React from 'react';
import { categories } from '../data/mockData';
import '../styles/Categories.css';

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2 className="categories-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <button className="category-btn">EXPLORE</button>
                </div>
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="item-count">{category.itemCount} items</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegance Section */}
      <div className="elegance-section">
        <div className="elegance-bg-slider">
          <div className="elegance-bg-track">
            {[...categories, ...categories, ...categories, ...categories].map((category, index) => (
              <img key={index} src={category.image} alt="Background slide" />
            ))}
          </div>
        </div>
        <div className="elegance-container">
          <h2 className="elegance-title">Elegance in every stitch</h2>
          <p className="elegance-subtitle">
            Each piece is carefully curated to meet the highest standards of quality and design.
          </p>
          <button className="category-btn" style={{marginTop: '2rem'}}>Read the Story</button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
