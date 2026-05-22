import React, { useRef } from 'react';
import '../styles/Home.css';
import VariableProximity from '../components/VariableProximity';
import modelImg from '../assets/images/Firefly-3.png';

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

      <section id="launching-soon" className="launching-soon">
        <div className="launching-content">
          <h1>STITCH.IN</h1>
          <h2>LAUNCHING SOON</h2>
          <p>A NEW STANDARD IN EVERYDAY ELEGANCE.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
