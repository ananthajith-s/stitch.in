import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar-minimal">
        <div className="nav-left">
          {/* <a href="/" className="nav-link">+1</a> */}
          {/* <a href="/" className="nav-link">PROJECTS</a> */}
        </div>
        <div className="nav-right">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="nav-link">HOME</a>
          <a href="#collection-section" onClick={(e) => scrollToSection(e, 'collection-section')} className="nav-link">COLLECTIONS</a>
          <a href="#launching-soon" onClick={(e) => scrollToSection(e, 'launching-soon')} className="nav-link">SHOP</a>
          {/* <a href="/" className="nav-link">NEW ARRIVALS ▼</a> */}
          <button className="nav-link" onClick={() => setIsContactModalOpen(true)}>CONTACT US</button>
        </div>
      </nav>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setIsContactModalOpen(false)}>✕</button>
            <h2>STITCH.IN</h2>
            <div className="contact-modal-content">
              <p><strong>Email: </strong>stitchofficial.in@gmail.com</p>
              {/* <p><strong>Phone: </strong> +91 73561 29916 | +91 95627 53123</p> */}
              <p><strong>Phone: </strong> 
                 <span>+91 73561 29916 |</span>
                <span className="phone-break">+91 95627 53123</span>
              </p>
              <p><strong>Address: </strong> Ground Floor, Space Mall, Calicut, India 673004</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
