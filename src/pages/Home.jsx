import React, { useRef } from 'react';
import '../styles/Home.css';
import VariableProximity from '../components/VariableProximity';
import modelImg from '../assets/images/Firefly-3.png';
import fullImg from '../assets/images/AEDEAFEA-F917-45A5-8DCD-2D1F706EFC4E_1_201_a.jpeg';
import pairLeft from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.19 AM.jpeg';
import pairRight from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.20 AM.jpeg';
import splitLeft from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.22 AM.jpeg';
import splitRight from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.07 AM.jpeg';
import thumb1 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.02 AM.jpeg';
import thumb2 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.04 AM.jpeg';
import thumb3 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.06 AM.jpeg';

const Home = () => {
  const containerRef = useRef(null);

  return (
    <div className="home-wrapper">
      <section id="hero" className="hero-minimal">
        {/* Grey background block for the image */}
        <div className="image-bg-block"></div>

        <div className="hero-content">
          <div className="hero-left" ref={containerRef}>
            <div className="tech-text-container">
              <div className="tech-text-block">
                <h4>ELEGANCE IN EVERY STITCH</h4>
                <div className="tech-line"></div>
                <p>We believe great shirts are more than fabric and thread.</p>
                <p>They're an extension of who you are a quiet confidence worn close to the skin.</p>
                <p>Each collection is built on precision, passion, and purpose. KEEP UNSEEN.</p>
                <p></p>
              </div>
              <div className="tech-text-block">
               
              </div>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-text">
                <VariableProximity
                  label="stitch "
                  className="variable-proximity-demo stitch-part"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={200}
                  falloff="linear"
                  style={{ color: '#020000' }}
                />
                <VariableProximity
                  label=".in"
                  className="variable-proximity-demo in-part"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={200}
                  falloff="linear"
                  style={{ color: '#fff' }}
                />
              </span>
            </h1>
            <div className="hero-bottom-left">
              <div className="vertical-text"><br></br></div>
              <div className="arrow-box">→</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="model-image-container">
              <img src={modelImg} alt="Stitch Model" className="model-image" style={{ width: '500px', height: '800px' }}/>
              <div className="vertical-label">
                <strong>STITCH OFFICIAL</strong>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collection-section">

        <div className="collection-header">
            <h1 className="brand-logo">STITCH.IN</h1>
            <p className="collection-subtitle">new collection</p>
        </div>

        <div className="collection-inner">
          <div className="hero-collection">
            <img src={fullImg} alt="Collection large" />
          </div>

          <div className="collection-grid">
            <div className="grid-item"><img src={pairLeft} alt="Collection left" /></div>
            <div className="grid-item"><img src={pairRight} alt="Collection right" /></div>
          </div>

          <div className="split-row">
            <div className="split-left"><img src={splitLeft} alt="Split left" /></div>
            <div className="split-right"><img src={splitRight} alt="Split right" /></div>
          </div>

          <div className="section-title"><span>THE CHAIN COLLAR SHIRT</span></div>

          <div className="thumbs">
            <img src={thumb1} alt="thumb 1" />
            <img src={thumb2} alt="thumb 2" />
            <img src={thumb3} alt="thumb 3" />
          </div>
        </div>
      </section>

      <section id="launching-soon" className="launching-soon">
        <div className="launching-content">
          <h1>STITCH OFFICIAL.IN</h1>
          <h2>LAUNCHING SOON</h2>
          <p>A NEW STANDARD IN EVERYDAY ELEGANCE.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
