import React, { useRef } from 'react';
import '../styles/Home.css';
import VariableProximity from '../components/VariableProximity';
import modelImg from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.07 AM.jpeg';

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
                <p>We believe great shirts are more than fabric and thread. They're an extension of who you are—a quiet confidence worn close to the skin. </p>
                <p>Each collection is built on precision, passion, and purpose.</p>
                <p>KEEP UNSEEN.</p>
              </div>
              <div className="tech-text-block">
                <div className="tech-line" style={{ marginTop: '1.2rem' }}></div>
              </div>
            </div>

            <h1 className="hero-title">
              <VariableProximity
                label="stitch."
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={200}
                falloff="linear"
              />
            </h1>
            <div className="hero-bottom-left">
              <div className="vertical-text"><br></br>001</div>
              <div className="arrow-box">→</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="model-image-container">
              <img src={modelImg} alt="Stitch Model" className="model-image" />
              <div className="vertical-label">
                <strong>STITCH OFFICIAL</strong>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="launching-soon" className="launching-soon">
        <div className="launching-content">
          <h2>LAUNCHING SOON</h2>
          <p>A NEW STANDARD IN EVERYDAY ELEGANCE.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
