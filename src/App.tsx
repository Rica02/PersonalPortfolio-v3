import React from 'react';
import './sass/global.scss';
import Navbar from './components/Navbar';
import { NavProvider } from './context/NavContext';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <NavProvider>
      <Navbar />
      <Home />
      <AboutMe />
    </NavProvider>
  );
}

export default App;
