// import logo from '../assets/coool.png'

// function Home() {
//     return (
//         <div className="home_page">
//           <div>
//              <img src={logo} alt="" />
//           </div>
         
//           <section>
//             <h1 className="name">Hi, I'm Gideon Lenge</h1>
//             <h3>
//             <span style={{ color: "#008cff", fontSize: "20px", fontStyle: "bold" }}>"</span>There are three responses to a piece of design – yes, no, and WOW!
//               Wow is the one to aim for<span style={{ color: "#008cff", fontSize: "20px", fontStyle: "bold" }}>"</span>
//             </h3>
//             <h4>― Milton Glaser ―</h4>
//             <a href="#_5">
//               <button>Contact me</button>
//             </a>
            
//           </section>
//         </div>
//       );
// }

// export default Home 

import React, { useState, useEffect } from 'react';
import logo from '../assets/coool.png';

const Home: React.FC = () => {
  const [text, setText] = useState(''); // Current text being typed
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
  const [loopIndex, setLoopIndex] = useState(0); // Current phrase index
  const [speed, setSpeed] = useState(150); // Typing speed

  const phrases = ["Gideon Lenge", "a Developer", "a Graphic Designer"]; // Phrases to type

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length]; // Get current phrase

    if (!isDeleting && text === currentPhrase) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      // Switch to next phrase after deleting
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1) // Remove characters
          : currentPhrase.substring(0, prev.length + 1) // Add characters
      );

      setSpeed(isDeleting ? 100 : 150); // Adjust speed dynamically
    }, speed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [text, isDeleting, loopIndex, speed, phrases]);

  return (
    <div className="home_page">
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <section>
        <h1 className="name">
          Hi, I'm <span className="animated-name">{text}</span>
          <span className="cursor">|</span>
        </h1>
        <h3>
          <span style={{ color: "#008cff", fontSize: "20px", fontWeight: "bold" }}>"</span>There are three responses to a piece of design – yes, no, and WOW!
          Wow is the one to aim for
          <span style={{ color: "#008cff", fontSize: "20px", fontWeight: "bold" }}>"</span>
        </h3>
        <h4>― Milton Glaser ―</h4>
        <a href="#_5">
          <button>Contact me</button>
        </a>
      </section>
    </div>
  );
};

export default Home;

