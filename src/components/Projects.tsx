
import { useState } from 'react';
import pro1 from '../assets/pro_1.png';
import pro2 from '../assets/pro_2.png';
import pro3 from '../assets/pro_3.png';
import stn from '../assets/path14.png';

function Projects() {
  const slides = [
    {
      id: 1,
      img: pro1,
      caption:
        `
        <p><strong>QR Code Generator</strong><br>
        A modern minimalistic and responsive web website that will allow you to generate QR codes and download them for later use, built with <span>TypeScript</span>, <span>HTML</span> and <span>CSS</span>.
        </p>`,
      codeLink: 'https://github.com/Codedecblackmoon/QR_Code_Generator',
      demoLink: 'https://codedecblackmoon.github.io/QR_Code_Generator/index.html',
    },
    {
      id: 2,
      img: pro2,
      caption: `
        <p><strong>3D artist Inspiration Generator</strong><br>
        The project is a 3D art inspiration generator that helps artists brainstorm ideas. Based on the chosen difficulty (Easy, Medium, or Hard), it suggests an object with 2, 3, or 4 colors (including HEX codes), built with <span>Python</span>, <span>Flask</span>, <span>HTML</span> and <span>CSS</span>.
        </p>`,
      codeLink: 'https://github.com/Codedecblackmoon/3D-Artist-Inspiration-Generator',
      demoLink: 'https://portfolio-error-handling.vercel.app/',
    },
    {
      id: 3,
      img: pro3,
      caption: `
        <p><strong>Design Gallery</strong><br>
        "Still in development" A responsive web application that allows photos to be shared and find design inspiration, built with <span>React</span>, <span>HTML</span>, <span>CSS</span> and <span>TypeScript</span>.
        </p>`,
      codeLink: 'https://github.com/Codedecblackmoon/Design-Gallery',
      demoLink: 'https://design-gallery-two.vercel.app/',
    },
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
            style={{ display: index === currentSlide ? 'block' : 'none', textAlign: 'left' }}
          >
            <img src={slide.img} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            <div
              className="caption"
              dangerouslySetInnerHTML={{ __html: slide.caption }}
            />
            <div className="info">
              <a href={slide.codeLink} target="_blank" rel="noopener noreferrer">
                <button>
                  <i className="fa-brands fa-github"></i> Code
                </button>
              </a>
              <a href={slide.demoLink} target="_blank" rel="noopener noreferrer">
                <button>
                  <i className="fa-solid fa-globe"></i> Demo
                </button>
              </a>
            </div>
          </div>
        ))}

        <a className="next" onClick={nextSlide}>
          &#10095;
        </a>
      </div>

      <div id="stend">
        <img src={stn} alt="SVG-style side image" />
      </div>
    </div>
  );
}

export default Projects;

