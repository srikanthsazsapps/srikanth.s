import React from 'react';
import './BottomNavBar.css';

const BottomNavBar = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bottom-nav">
      <a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a>
      <a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
      <a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</a>
      <a href="#resume" onClick={(e) => handleClick(e, 'resume')}>Resume</a>
      <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a>
    </div>
  );
};

export default BottomNavBar;
