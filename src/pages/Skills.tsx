import React from 'react';
import '../sass/pages/skills.scss';
import { useNav } from '../hooks/useNav';
import { SkillLogos } from '../interfaces';
import { Logos } from '../content';

const Skills = () => {
  const skillsRef = useNav('skills');

  // Skills table
  const Skills = () => {
    return (
      <div className="skills-table">
        {Object.keys(Logos).map((key, index) => (
          <div
            className={`table-row ${
              index % 2 === 0 ? 'right-to-left' : 'left-to-right'
            }`}
            key={key}
          >
            {Logos[key as keyof SkillLogos]
              .concat(Logos[key as keyof SkillLogos])
              .map((item, index) => (
                <div key={index} className="row-item">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" ref={skillsRef}>
      <header className="skills-header">
        <h1>Skills</h1>
      </header>
      <div className="skills-container">
        <div className="top-container">
          {/* Description */}
          <div className="description">
            <p>
              I have front-development experience in web, mobile apps and games,
              as well as UI/UX design and development.
              <br />
              <br />
              I've worked on a variety of projects, gaining diverse and valuable
              skills encompassing web, mobile apps and games. I'm particularly
              passionate about UI/UX design and development.
            </p>
          </div>
          {/* Skills table */}
          <div className="table-container">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
