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
              I have Front-End Development experience in Web and Mobile Apps,
              and I'm also familiar with Game Development. I'm particularly
              passionate about UI/UX Design and Development, where I focus on
              creating intuitive UI and engaging user experiences.
              <br />
              <br />
              My most valuable skills are my ability to be flexibile and learn
              quickly, which enable me to easily adapt in fast-paced
              environments and changing requirements, and with a proative
              approach and effective teamwork, I'm able to contribute positvely
              to reach project success with my team.
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
