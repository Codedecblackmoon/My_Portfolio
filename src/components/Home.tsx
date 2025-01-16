import React, { useState, useEffect } from 'react';
import logo from '../assets/coool.png';

const Home: React.FC = () => {
  const [text, setText] = useState(''); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [loopIndex, setLoopIndex] = useState(0); 
  const [speed, setSpeed] = useState(150); 

  const phrases = ["Gideon Lenge", "a Developer", "a Graphic Designer"];

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];

    if (!isDeleting && text === currentPhrase) {
      
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
     
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1) 
          : currentPhrase.substring(0, prev.length + 1) 
      );

      setSpeed(isDeleting ? 100 : 150); 
    }, speed);

    return () => clearTimeout(timeout); 
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
        <a href="#About">
          <button>About me</button>
        </a>
      </section>
    </div>
  );
};

export default Home;

