import React, { useState } from 'react';
import './App.css'; // Ensure your CSS file is linked correctly

const ReactComponent = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme', !darkTheme);
  };

  return (
    <header className="header">
      <a href="#" className="logo">MyPortfolio</a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-btn" onClick={toggleTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </header>
  );
};

export default ReactComponent;
