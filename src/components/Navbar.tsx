import React, { useContext, useState } from 'react';
import '../sass/components/navbar.scss';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { NavContext } from '../context/NavContext';
import resumeFile from '../assets/resume.pdf';

const Navbar = () => {
  const { activeLinkId } = useContext(NavContext); // Current section ID in view
  const [extendNavbar, setExtendNavbar] = useState(false); // Opens extended menu when screen is small

  const navLinks = ['home', 'about me', 'skills', 'projects', 'contact me'];

  const handleClickNav = (target: string) => {
    // Scroll to selection and close menu (if using extended menu)
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    setExtendNavbar(false);
  };

  // Navbar links
  const Links = () => {
    // Note: section ID is the same as navLink name but without space
    return (
      <>
        {navLinks.map((link, key) => (
          <p
            key={key}
            className={`nav-link ${
              activeLinkId === link.replace(/\s/g, '') ? 'active' : ''
            }`}
            onClick={() => handleClickNav(link.replace(/\s/g, ''))}
          >
            {link} <span className="indicator">&lt;</span>
          </p>
        ))}
      </>
    );
  };

  // Social buttons
  const SocialButtons = () => {
    return (
      <div className="social-btns">
        {/* On hover, show text above icon */}
        <div>
          <p>resume</p>
          <HiDocumentText
            className="icon"
            onClick={() => {
              window.open(resumeFile, '_blank');
            }}
          />
        </div>
        <div>
          <p>contact</p>
          <MdEmail
            className="icon"
            onClick={() =>
              document
                .getElementById('contactme')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </div>
        <div>
          <p>linkedin</p>
          <FaLinkedin
            className="icon"
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/ricamaeaverion/',
                '_blank'
              );
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Side bar (wide screens)*/}
      <nav className="navbar">
        <div
          className={`navbar-social-btns ${
            activeLinkId === 'home' ? '' : 'show'
          }`}
        >
          <SocialButtons />
        </div>
        <div className="navbar-links-container">
          <Links />
        </div>
      </nav>

      {/* Extended menu (small screens) */}
      <nav className={`navbar-mobile ${extendNavbar ? 'active' : ''}`}>
        <div className="navbar-mobile-links-container">
          <Links />
        </div>
      </nav>

      {/* Extended menu button */}
      <div className="menu-btn-mobile">
        <button
          onClick={() => {
            setExtendNavbar(!extendNavbar);
          }}
        >
          {
            extendNavbar ? <IoCloseSharp /> : <IoMenuSharp /> // Bars when menu is closed, X when open
          }
        </button>
      </div>
    </>
  );
};

export default Navbar;
