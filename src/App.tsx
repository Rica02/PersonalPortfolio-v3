import React from 'react';
import './sass/global.scss';
import Navbar from './components/Navbar';
import { NavProvider } from './context/NavContext';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';

function App() {
  return (
    <NavProvider>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
    </NavProvider>
  );
}

export default App;
