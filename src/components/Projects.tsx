
// import React, { useState } from 'react';
// import pro1 from '../assets/pro.png';
// import pro2 from '../assets/pro.png'; // Adding another pro.png
// import pro3 from '../assets/pro.png'; // Adding another pro.png
// import stn from '../assets/path14.png'; // SVG-style image

// function Projects() {
//   const slides = [
//     { id: 1, img: pro1, caption: 'Project 1' },
//     { id: 2, img: pro2, caption: 'Project 2' },
//     { id: 3, img: pro3, caption: 'Project 3' },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="Projects_page">
//       <div className="slideshow-container">

//         <a className="prev" onClick={prevSlide}>
//           &#10094;
//         </a>

//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`project_card ${index === currentSlide ? 'active' : ''}`}
//             style={{ display: index === currentSlide ? 'block' : 'none' }}
//           >
//             <img src={slide.img} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
//             <h3>{slide.caption}</h3>
//             <div className="info">
//               <button>
//                 <i className="fa-brands fa-github">Code</i>
//               </button>
//               <button>
//                 <i className="fa-solid fa-globe">Demo</i>
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* Navigation buttons */}
        
//         <a className="next" onClick={nextSlide}>
//           &#10095;
//         </a>
//       </div>

    
//       <div id="stend" >
//         <img src={stn} alt="SVG-style side image" />
//       </div>
//     </div>
//   );
// }

// export default Projects;

import React, { useState } from 'react';
import pro1 from '../assets/pro.png';
import pro2 from '../assets/pro.png'; // Adding another pro.png
import pro3 from '../assets/pro.png'; // Adding another pro.png
import stn from '../assets/path14.png'; // SVG-style image

function Projects() {
  const slides = [
    {
      id: 1,
      img: pro1,
      caption: 'Project 1',
      codeLink: 'https://github.com/user/project1', // Link to GitHub repository
      demoLink: 'https://demo.project1.com', // Link to demo
    },
    {
      id: 2,
      img: pro2,
      caption: 'Project 2',
      codeLink: 'https://github.com/user/project2',
      demoLink: 'https://demo.project2.com',
    },
    {
      id: 3,
      img: pro3,
      caption: 'Project 3',
      codeLink: 'https://github.com/user/project3',
      demoLink: 'https://demo.project3.com',
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
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={slide.img} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            <h3>{slide.caption}</h3>
            <div className="info">
              {/* Code Button */}
              <a href={slide.codeLink} target="_blank" rel="noopener noreferrer">
                <button>
                  <i className="fa-brands fa-github"></i> Code
                </button>
              </a>
              {/* Demo Button */}
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
