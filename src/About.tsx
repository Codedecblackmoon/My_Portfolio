
import cv from './assets/Gideon_Lenge_CV.pdf';
import image from './assets/me_.png'

function About() {
  return (
    <>
      <section id="about">
        <div className="min-h-screen text-white flex items-center justify-center p-6 sm:p-10 border-t border-white/20" id="about">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center justify-center">
            {/* Left column: heading + image */}
            <div className="flex flex-col items-center md:items-start">
              <h1
                className="leading-none  text-center md:text-left"
                style={{
                    fontFamily: '"Archivo Black", sans-serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: 200,
                    fontStyle: 'normal',
                    WebkitTextStroke: '0.3px white',
                    color: 'transparent',
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                }}
              >
                ABOUT
                <br />
                ME
              </h1>

              <div className="relative rounded-2xl aspect-[4/3] w-full max-w-xs sm:max-w-80 flex items-center justify-center">
                <img
                  className="top-100 z-10 w-90 h-90 max-w-[220px] sm:max-w-[280px] md:max-w-xs object-contain animate-slide-fade-in-right"
                  src={image}
                  alt="Gideon Lenge"
                />
              </div>
            </div>

            {/* Right column: text + button */}
            <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left bg-#f2ebebff">
              {/* <div className="text-sm leading-relaxed bg-#f9f6f6ff">

              </div> */}
              <p className="text-sm leading-relaxed "
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontOpticalSizing: 'auto',
                fontWeight: 200,
                fontStyle: 'normal',
                color: '#2fed00fd',
                }}
              >
                <span style={{ color: '#cc0abcfd' }}>&gt;$:</span> I'm a dedicated and detail-oriented software developer with a creative 
                approach to problem-solving, always seeking new and visually appealing 
                ways to address technical challenges. With a foundation in both front-end 
                and back-end development, particularly in JavaScript and Python, I enjoy 
                crafting efficient, scalable applications that prioritize user experience.
              </p>

              <p className="text-sm leading-relaxed"
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontOpticalSizing: 'auto',
                fontWeight: 200,
                fontStyle: 'normal',
                color: '#2fed00fd',
                }}
              >
                Known for my creativity, I thrive in collaborative environments where I 
                can contribute unique solutions that enhance functionality and design.
              </p>

              <a href={cv} download="Gideon_Lenge_CV.pdf" className="self-center md:self-start">
                <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                  </span>
                <button className="mt-2 md:mt-4 border border-white/60 rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors ">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;