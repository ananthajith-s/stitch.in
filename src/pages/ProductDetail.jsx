import React, { useState } from 'react';
import { products } from '../data/mockData';
import '../styles/ProductDetail.css';

const ProductDetail = ({ productId = 1 }) => {
  const product = products.find(p => p.id === productId) || products[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    alert(`Added to cart: ${product.name} in ${selectedColor}, Size ${selectedSize}, Quantity: ${quantity}`);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* Image Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="thumbnail-gallery">
            {[1, 2, 3].map((_, index) => (
              <button key={index} className="thumbnail">
                <img src={product.image} alt={`View ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-details-section">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-category">{product.category}</p>

          {/* Price */}
          <div className="price-section">
            <span className="product-detail-price">₹{product.price.toFixed(2)}</span>
            <p className="price-note">Inclusive of all taxes</p>
          </div>

          {/* Color Selection */}
          <div className="selection-group">
            <label>Color</label>
            <div className="color-selector">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`color-select ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="selection-group">
            <label>Size</label>
            <div className="size-selector">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-select ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <a href="#" className="size-guide">View Size Guide</a>
          </div>

          {/* Quantity Selection */}
          <div className="selection-group">
            <label>Quantity</label>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-primary" onClick={handleAddToCart}>
            ADD TO CART
          </button>

          {/* Wishlist Button */}
          <button className="wishlist-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ADD TO WISHLIST
          </button>

          {/* Product Details */}
          <div className="product-meta">
            <p><strong>SKU:</strong> STITCH-{String(product.id).padStart(4, '0')}</p>
            <p><strong>Material:</strong> {product.details.material}</p>
            <p><strong>Fit:</strong> {product.details.fit}</p>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="badge">
              <span>✓</span> Premium Quality
            </div>
            <div className="badge">
              <span>↩</span> Easy Returns
            </div>
            <div className="badge">
              <span>🚚</span> Free Shipping
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs-section">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`tab-button ${activeTab === 'care' ? 'active' : ''}`}
            onClick={() => setActiveTab('care')}
          >
            Care Guide
          </button>
          <button
            className={`tab-button ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping Info
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'description' && (
            <div className="tab-pane">
              <h3>Product Description</h3>
              <p>{product.description}</p>
              <h4>Materials & Fit</h4>
              <p><strong>Material:</strong> {product.details.material}</p>
              <p><strong>Fit:</strong> {product.details.fit}</p>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="tab-pane">
              <h3>Care Instructions</h3>
              <p>{product.details.care}</p>
              <ul>
                <li>Wash inside out for colored items</li>
                <li>Use cold water to prevent fading</li>
                <li>Air dry when possible for longevity</li>
                <li>Iron on low heat if needed</li>
                <li>Keep away from direct heat when drying</li>
              </ul>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="tab-pane">
              <h3>Shipping Information</h3>
              <p><strong>Standard Shipping:</strong> 5-7 business days (Free on orders over ₹1000)</p>
              <p><strong>Express Shipping:</strong> 2-3 business days (₹150)</p>
              <p><strong>Overnight Shipping:</strong> Next business day (₹300)</p>
              <p>Orders are processed within 24 hours. Tracking information will be sent via email.</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products-section">
        <h2>You May Also Like</h2>
        <div className="related-products-grid">
          {products.slice(0, 4).map((prod) => (
            <div key={prod.id} className="related-product-card">
              <img src={prod.image} alt={prod.name} />
              <h4>{prod.name}</h4>
              <p>₹{prod.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
