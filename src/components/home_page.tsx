import React from 'react';
import logo from '../assets/coool.png';

// Rename the component to HomePage
const HomePage: React.FC = () => {
  return (
    <div className="home_page">

      <img src={logo} alt="" />
      <section>
        <h1>“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for"</h1>
        <h2>― Milton Glaser.</h2>
        <button>Know me</button>
      </section>
    </div>
  );
};

export default HomePage;
