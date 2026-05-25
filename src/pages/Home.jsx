import React, { useRef } from 'react';
import '../styles/Home.css';
import VariableProximity from '../components/VariableProximity';
import modelImg from '../assets/images/Firefly-4.png';
import fullImg from '../assets/images/Main.png';
import HalfImg from '../assets/images/half.jpeg';
import pairLeft from '../assets/images/Firefly-6.jpg';
import pairRight from '../assets/images/Firefly-7.jpg';
import splitLeft from '../assets/images/Firefly-9.jpg';
import splitRight from '../assets/images/splitleft.jpg';
import thumb1 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.23 AM.jpeg';
import thumb2 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.20 AM.jpeg';
import thumb4 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.19 AM.jpeg';
import thumb3 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.18 AM.jpeg';
import whatsappIcon from '../assets/images/whatsapp_icon.png';
import InstaIcon from '../assets/images/insta.png';

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
              <div className="mobile-only">
                  <span className="stitch-part">stitch </span>
                  <span className="in-part" >.in</span>
              </div>
            </h1>
            <div className="hero-bottom-left">
              <div className="vertical-text"><br></br></div>
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

      <section className="collection-section" id ="collection-section">
        
        <div className="collection-header">
            <h1 className="brand-logo">STITCH.IN</h1>
            <p className="collection-subtitle">NEW COLLECTION</p>
        </div>

        <div className="collection-inner">
          <div className="hero-collection">
            <img src={fullImg} alt="Collection large" />
          </div>

          <div className="collection-grid">
            <div className="grid-item"><img src={pairLeft} alt="Collection left" /></div>
            <div className="grid-item"><img src={pairRight} alt="Collection right" /></div>
          </div>

          <div className="half-collection">
            <img src={HalfImg} alt="Collection-half" className="w-full h-[750px] object-cover object-[90%_70%]" />
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
            <img src={thumb4} alt="thumb 4" />
          </div>
        </div>
      </section>

    <section id="launching-soon" className="launching-soon">
  <div className="launching-content">
    <h1>stitchofficial.in</h1>
    <h2>LAUNCHING SOON</h2>
    <p>A NEW STANDARD IN EVERYDAY ELEGANCE.</p>
  </div>
</section>
    <div className="social-contact-bar">

        <div className="contact-item">
      <a href="https://wa.me/917356129916" target="_blank" rel="noopener noreferrer" className="contact-icon">
        <img src={whatsappIcon} alt="WhatsApp" className="contact-img" />
      </a>
      <p className="contact-text">Order With WhatsApp</p>
      {/* <span className="contact-description">For Early Orders & Inquiries</span> */}
    </div>

    <div className="contact-item">
      <a href="https://instagram.com/stitch.in__" target="_blank" rel="noopener noreferrer" className="contact-icon">
        <img src={InstaIcon} alt="Instagram" className="contact-img" />
      </a>
      <p className="contact-text">Follow on Instagram</p>
      {/* <span className="contact-description">For Latest Designs & Updates</span> */}
    </div>



    <div className="contact-item">
      <a href="tel:+917356129916" className="contact-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </a>
      <p className="contact-text">Call Us</p>
      {/* <span className="contact-description">+91 73561 29916</span> */}
    </div>
  </div>
    </div>
  );
};

export default Home;
