import React, { useEffect, useState } from 'react';
import '../sass/pages/about-me.scss';
import { useNav } from '../hooks/useNav';
import { GiBrain, GiPaintBrush, GiBookPile } from 'react-icons/gi';

const AboutMe = () => {
  const aboutMeRef = useNav('aboutme');

  const cardContent = [
    {
      icon: <GiBrain />,
      title: 'A LOVE FOR LEARNING',
      desc: "I'm very curious about science, art, nature and technology. This curiosity keeps my mind engaged and has helped me succeed academically.",
    },
    {
      icon: <GiPaintBrush />,
      title: 'ENGAGING HOBBIES',
      desc: "Outside my usual activities, I'm a hobbyist digital and vector artist, a casual gamer, a beginner runner and a blue belt in Taekwondo.",
    },
    {
      icon: <GiBookPile />,
      title: 'OBSESSIVELY ORGANISED',
      desc: "I'm all for maximising efficiency and productivity, so I like to keep things around me organised and get even the small details right.",
    },
  ];

  // Returns the 3 cards in About Me page
  const Cards = () => {
    return (
      <>
        {cardContent.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-title">
              <div className="icon">{card.icon}</div>
              <h2>{card.title}</h2>
            </div>
            <div className="card-description">
              <p>{card.desc}</p>
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
      <div className="container">
        <header>
          <h1>About me</h1>
        </header>
        <div className="about-me-container">
          {/* Introduction */}
          <div className="left-container">
            <div className="info">
              <p>
                I studied a Bachelor of IT at Academy of Interactive Technology
                (AIT) in Melbourne, Australia. I graduated in 2022 with an
                Academic Excellence Award.
                <br />
                <br />
                I've worked on a variety of projects, gaining diverse and
                valuable skills encompassing web, mobile apps and games. I'm
                particularly passionate about UI/UX design and development.
                <br />
                <br /> I'm continuously striving to improve, pushing myself out
                of my comfort zone and tackle new challenges. I learned to be
                flexible and open minded, as well as an effective team worker
                and problem solver.
              </p>
            </div>
            <div className="cards-group">
              <Cards />
            </div>
          </div>
          <div className="right-container">
            {/* About me cards */}
            <div className="img-container">
              <div className="img">img</div>
            </div>

            {/* Background text */}
            <div className="bg-text-container">
              <ContinueText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
