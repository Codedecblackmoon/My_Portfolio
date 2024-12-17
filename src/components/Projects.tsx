
import React, { useState } from 'react';
import pro1 from '../assets/pro.png';
import pro2 from '../assets/pro.png'; // Adding another pro.png
import pro3 from '../assets/pro.png'; // Adding another pro.png
import stn from '../assets/path14.png'; // SVG-style image

function Projects() {
  const slides = [
    { id: 1, img: pro1, caption: 'Project 1' },
    { id: 2, img: pro2, caption: 'Project 2' },
    { id: 3, img: pro3, caption: 'Project 3' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="Projects_page">
      <div className="slideshow-container">

        <a className="prev" onClick={prevSlide}>
          &#10094;
        </a>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`project_card ${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={slide.img} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            <h3>{slide.caption}</h3>
            <div className="info">
              <button>
                <i className="fa-brands fa-github">Code</i>
              </button>
              <button>
                <i className="fa-solid fa-globe">Demo</i>
              </button>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        
        <a className="next" onClick={nextSlide}>
          &#10095;
        </a>
      </div>

    
      <div id="stend" >
        <img src={stn} alt="SVG-style side image" />
      </div>
    </div>
  );
}

export default Projects;

