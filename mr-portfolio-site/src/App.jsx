import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import BottomNavbar from './pages/BottomNavbar'; 


const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace('/', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // fallback scroll
    }
  }, [location]);

  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="resume"><Resume /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"><Footer /></div>
      <div id="bottom-navbar"><BottomNavbar /></div>
    </>
  );
};

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<ScrollToSection />} />
        <Route path="/about" element={<ScrollToSection />} />
        <Route path="/skills" element={<ScrollToSection />} />
        <Route path="/resume" element={<ScrollToSection />} />
        <Route path="/contact" element={<ScrollToSection />} />
        <Route path="/footer" element={<ScrollToSection />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path='bottom-navbar' element={<ScrollToSection />} />
      </Routes>
      
  );
}

export default App;
