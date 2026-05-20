import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = (e) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <>
      <div style={{
        background: '#f0f0f0',
        padding: '12px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        🔧 This is a placeholder site. Full platform coming soon.
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="/">STITCH.IN</a>
          </div>

          {/* Hamburger Menu */}
          <div
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Nav Links */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="/" className="nav-link">MEN</a>
            </li>
            <li className="nav-item">
              <a href="/shop" className="nav-link">NEW ARRIVALS</a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={openContactModal} className="nav-link">CONTACT US</a>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="navbar-right">
            <button className="navbar-icon" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <button className="navbar-icon" aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="navbar-icon" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            <button className="navbar-icon" aria-label="Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setIsContactModalOpen(false)}>✕</button>
            <h2>Contact STITCH.IN</h2>
            <div className="contact-modal-content">
              <p><strong>Email: </strong>stitchofficial.in@gmail.com</p>
              <p><strong>Phone: </strong> +91 73561 29916</p>
              <p><strong>Address: </strong> Ground Floor, Space Mall, Calicut, India 673004</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
