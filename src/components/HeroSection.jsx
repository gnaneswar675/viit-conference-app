import React from 'react';
import '../styles/style.css';
const HeroSection = () => {
  return (
    <section className="hero">
      
      <div className="overlay">
        <div className="hero-content">
          <h1>
            International Conference on Mathematical & Statistical Foundations and Applications of Generative AI (MSFA-GAI)
          </h1>
          <div className="date">5th – 6th February 2026</div>
          <br />
          <h1>
            National Workshop on Medical Applications using GAI
          </h1>
          <div className="date">2nd – 6th February 2026</div>
          <div className="venue" style={{ marginTop: '18px' }}>
            <h2>Vignan's Institute of Information Technology, Visakhapatnam, India</h2>
          </div>
        </div>
        <div className="organized-by">
          <strong>Organized By</strong>
          <div>Department of Computer Science Engineering &<br />Department of Advanced Computer Science Engineering</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;