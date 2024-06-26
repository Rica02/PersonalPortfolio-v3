import React from 'react';
import './sass/global.scss';
import Navbar from './components/Navbar';
import { NavProvider } from './context/NavContext';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <NavProvider>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </NavProvider>
  );
}

export default App;
