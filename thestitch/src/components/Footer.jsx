import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Collections Section */}
        <div className="footer-section">
          <h4>Collections</h4>
          <ul>
            <li><a href="/">Essentials</a></li>
            <li><a href="/">Signature</a></li>
            <li><a href="/">Heritage Denim</a></li>
            <li><a href="/">Statement</a></li>
            <li><a href="/">New Arrivals</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Shipping Info</a></li>
            <li><a href="/">Returns</a></li>
            <li><a href="/">Size Guide</a></li>
            <li><a href="/">Care Guide</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter-section">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for exclusive offers and new arrivals.</p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://instagram.com/stitch.in__" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"></path>
                <circle cx="17.5" cy="6.5" r="1.5" fill="white"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2026 STITCH.IN. All rights reserved.</p>
          <div className="footer-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
