import React, { useEffect, useState } from 'react';
import '../sass/pages/about-me.scss';
import { useNav } from '../hooks/useNav';
import { AboutMeCards } from '../content';

const AboutMe = () => {
  const aboutMeRef = useNav('aboutme');

  // Returns the 3 cards in About Me page
  const Cards = () => {
    return (
      <>
        {AboutMeCards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-title">
              <div className="icon">{card.icon}</div>
              <h2>{card.title}</h2>
            </div>
            <div className="card-description">
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  const ContinueText = () => {
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
        <span className={`blinking ${isBlinking ? 'visible' : 'hidden'}`}>
          &gt;
        </span>{' '}
        continue (<span className="txtHighlightCyan">Y</span>/
        <span className="txtHighlightCyan">N</span>)
        <span className="txtHighlightCyan">?</span>
      </p>
    );
  };

  return (
    <section id="aboutme" ref={aboutMeRef}>
      <header>
        <h1>About me</h1>
      </header>
      <div className="about-me-container">
        {/* Introduction */}
        <div className="info">
          <p className="name">I'm Rica, it's nice to meet you!</p>
          <br />
          <p>
            I studied a Bachelor of IT at Academy of Interactive Technology
            (AIT) in Melbourne, Australia. I graduated in 2022 with academic
            excellence Award, and I have since worked on a variety of projects,
            gaining diverse and valuable skills.
            <br />
            <br />
            I'm continuously striving to improve, pushing myself out of my
            comfort zone, and tackling new challenges. I learned to be flexible
            and open minded, as well as an effective team worker and a problem
            solver.
          </p>
        </div>
        {/* About me cards */}
        <div className="cards-group">
          <Cards />
        </div>
        {/* Background text */}
        <div className="bg-text">
          <ContinueText />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
