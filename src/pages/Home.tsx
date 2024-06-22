import React, { useEffect, useState } from 'react';
import '../sass/pages/home.scss';
import { FaLinkedin } from 'react-icons/fa';
import { BsMouseFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { useNav } from '../hooks/useNav';
import resumeFile from '../assets/resume.pdf';
import comfImg1 from '../assets/images/comf-1.png';
import comfImg2 from '../assets/images/comf-2.png';
import comfImg3 from '../assets/images/comf-3.png';
import comfImg4 from '../assets/images/comf-4.png';
import comfImg5 from '../assets/images/comf-5.png';
import comfImgMobile from '../assets/images/comf-portrait.png';

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

  const ImageAnimation = () => {
    const imgFrames = [comfImg1, comfImg2, comfImg3, comfImg4, comfImg5];
    const [hovering, setHovering] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
      // Preload images
      for (const image of imgFrames) {
        const imageElement = new Image();
        imageElement.src = image;
      }
      // eslint-disable-next-line
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        if (hovering) {
          setCurrentImg((prev) =>
            prev < imgFrames.length - 1 ? prev + 1 : prev
          );
        } else {
          setCurrentImg(0);
        }
      }, 75);

      return () => clearInterval(interval);
      // eslint-disable-next-line
    }, [hovering]);

    return (
      <img
        src={imgFrames[currentImg]}
        alt="drawing of me"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
    );
  };

  return (
    <section id="home" ref={homeRef}>
      <div className="home-container">
        <div className="top-container">
          {/* Introduction */}
          <div className="intro-container">
            <p>
              Hey there! I'm <span className="txtHighlightPink">Rica</span>.
            </p>
            <h1>FRONT-END SOFTWARE ENGINEER</h1>
            <p className="titles">
              Web <span className="txtHighlightPink">|</span> Mobile Apps{' '}
              <span className="txtHighlightPink">|</span> Games <br /> UI/UX
              Design & Development
            </p>
          </div>
          {/* Background text & drawing */}
          <div className="bg-text-container">
            <HelloWorldText />
            <div className="img-container">
              <ImageAnimation />
            </div>
          </div>
        </div>
        {/* Drawing for small laptop */}
        <div className="drawing-tablet">
          <img src={comfImgMobile} alt="drawing of me" />
        </div>

        {/* Drawing for mobile */}
        <div className="drawing-mobile">
          <img src={comfImgMobile} alt="drawing of me" />
        </div>

        {/* Buttons */}
        <div className="bottom-container">
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
        </div>

        {/* Background text for mobile */}
        <div className="bg-text-container-mobile">
          <HelloWorldText />
        </div>
      </div>
    </section>
  );
};

export default Home;
