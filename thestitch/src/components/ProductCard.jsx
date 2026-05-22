import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button className="product-wishlist" onClick={(e) => e.stopPropagation()}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-colors">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`color-option ${selectedColor === color ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(color);
              }}
              title={color}
              aria-label={`Select color: ${color}`}
            >
              {color}
            </button>
          ))}
        </div>

        <div className="product-footer">
          <span className="product-price">₹{product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={(e) => e.stopPropagation()}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
