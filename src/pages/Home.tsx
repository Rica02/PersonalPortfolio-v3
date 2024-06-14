import React, { useEffect, useState } from 'react';
import '../sass/pages/home.scss';
import { FaLinkedin } from 'react-icons/fa';
import { BsMouseFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { useNav } from '../hooks/useNav';
import resumeFile from '../assets/resume.pdf';

const Home = () => {
  const homeRef = useNav('home');

  // Background text
  const HelloWorldText = () => {
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
      // Cursor blinking effect
      const interval = setInterval(() => {
        setIsBlinking((prev) => !prev);
      }, 500);

      return () => clearInterval(interval);
    }, []);

    return (
      <p className="txtFaded">
        <span className="txtHighlightCyan">&gt;</span> hello world
        <span
          className={`txtHighlightCyan blinking ${
            isBlinking ? 'visible' : 'hidden'
          }`}
        >
          |
        </span>
      </p>
    );
  };

  return (
    <section id="home" ref={homeRef}>
      <div className="home-container">
        <div className="top-container">
          {/* Introduction */}
          <div className="intro-container">
            <p>Hey there!</p>
            <p className="name">
              I'm <span className="txtHighlightPink">Rica</span>.
            </p>
            <h1>FRONT-END SOFTWARE ENGINEER</h1>
            <p className="titles">
              Web <span className="txtHighlightPink">|</span> Mobile Apps{' '}
              <span className="txtHighlightPink">|</span> Games <br /> UI/UX
              Design & Development
            </p>
          </div>
          {/* Background text */}
          <div className="helloWorld">
            <HelloWorldText />
          </div>
        </div>
        <div className="bottom-container">
          {/* Buttons */}
          <div className="button-group">
            <button
              onClick={() => {
                window.open(resumeFile, '_blank');
              }}
            >
              <HiDocumentText />
              RESUME
            </button>
            <button
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/ricamaeaverion/',
                  '_blank'
                );
              }}
            >
              <FaLinkedin />
              LINKEDIN
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('contactme')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <MdEmail />
              CONTACT
            </button>
          </div>
          {/* Mouse icon */}
          <div
            className="mouse-icon"
            onClick={() =>
              document
                .getElementById('aboutme')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <BsMouseFill />
          </div>
          <div className="helloWorldSml">
            <HelloWorldText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
