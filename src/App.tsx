import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home_page';

function App() {
  return (
    <div className="App">
      
      <nav className="navbar">
        <a href="#_1">Home</a>
        <a href="#_2">about</a>
        <a href="#_3">Expirenc</a>
        <a href="#_4">Projects</a>
        <a href="#_5">Content</a>
      </nav>

      <div id="_1"><HomePage /></div>
      <div id="_2">page 2</div>
      <div id="_3">page 3</div>
      <div id="_4">page 4</div>
      <div id="_5">page 5</div>

      <footer><p>footer</p></footer>
    </div>
  );
}

export default App;
