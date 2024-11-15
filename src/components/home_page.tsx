import React from 'react';
import logo from '../assets/PP2.png';

// Rename the component to HomePage
const HomePage: React.FC = () => {
  return (
    <div>
        <img src={logo} alt="" />
      <p>“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for"</p>
      <h2>― Milton Glaser.</h2>
    </div>
  );
};

export default HomePage;
