import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './HeroStyles.css'; 

const Hero = () => {
  const [leftImageHovered, setLeftImageHovered] = useState(false);
  const [rightImageHovered, setRightImageHovered] = useState(false);
  
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200,
  });

  // More reliable image URLs 
  const leftImageUrl = "https://images.pexels.com/photos/3513239/pexels-photo-3513239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const rightImageUrl = "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <section className="hero-split">
      <div ref={leftRef} className={`hero-left ${leftInView ? 'fade-in-up' : ''}`}>
        <div 
          className={`hero-image-container ${leftImageHovered ? 'image-hovered' : ''}`}
          onMouseEnter={() => setLeftImageHovered(true)}
          onMouseLeave={() => setLeftImageHovered(false)}
        >
          <img 
            src={leftImageUrl} 
            alt="Vibrant design representing creativity" 
            className="hero-image-left" 
          />
        </div>
        <div className="hero-text-content">
          <h2>YOU HAVE ONE SHOT, SO HIT THE RIGHT SPOT</h2>
          <p>
            There is no stroke of luck or a magic bullet. Just cold hard research,
            sound strategy, and inspired ideas. We value the authenticity of your
            brand, and we can help bring it forth with a touch of simplicity.
          </p>
        </div>
        <a href="#about" className="scroll-down-arrow hero-split-arrow">
          &darr;
        </a>
      </div>
      <div ref={rightRef} className={`hero-right ${rightInView ? 'fade-in' : ''}`}>
        <div 
          className={`hero-image-container ${rightImageHovered ? 'image-hovered' : ''}`}
          onMouseEnter={() => setRightImageHovered(true)}
          onMouseLeave={() => setRightImageHovered(false)}
        >
          <img 
            src={rightImageUrl} 
            alt="Abstract portrait representing strategy" 
            className="hero-image-right"
          />
          <div className="works-text">Works.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;