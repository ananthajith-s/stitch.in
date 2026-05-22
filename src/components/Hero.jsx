import React from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/images/WhatsApp Image 2026-05-20 at 9.31.59 AM (1).jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-tagline">A new standard in everyday elegance</h1>
        <p className="hero-description">
          Meticulously crafted shirts that bridge the gap between comfort and sophistication.
          From classic cottons to bold patterns, each piece is designed for the modern man who
          refuses to compromise.
        </p>
        <button className="hero-cta">SHOP NOW</button>
      </div>
      <div className="hero-image">
        <img
          src={heroImg}
          alt="Man wearing premium STITCH.IN shirt"
        />
      </div>
    </section>
  );
};

export default Hero;
