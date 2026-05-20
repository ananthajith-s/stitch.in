import React from 'react';
import { instagramFeed } from '../data/mockData';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home-page">
      {/* Instagram Feed Section */}
      <div className="instagram-section">
        <div className="instagram-container">
          <h2>Follow us @stitch.in__</h2>
          <p>Join our community and see how our customers style STITCH.IN</p>

          <div className="instagram-grid">
            {instagramFeed.map((post) => (
              <div key={post.id} className="instagram-card">
                <img src={post.image} alt="Instagram post" />
                <div className="instagram-overlay">
                  <div className="instagram-stats">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.instagram.com/stitch.in__"
            target="_blank"
            rel="noopener noreferrer"
            className="view-instagram-btn"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            VIEW ON INSTAGRAM
          </a>
        </div>
      </div>

      {/* Trust Section */}
      <div className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <h3>Premium Quality</h3>
            <p>Crafted with the finest materials and attention to detail</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">↩</div>
            <h3>Easy Returns</h3>
            <p>30-day return policy for your peace of mind</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free shipping on orders over ₹1000</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">💬</div>
            <h3>Support</h3>
            <p>Dedicated customer service team ready to help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
