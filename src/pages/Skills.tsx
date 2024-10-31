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
              My skills are varied, encompassing a range of platforms with a
              focus on front-end development. While I'm particularly passionate
              about UI/UX, my experience with various tools and languages allows
              me to be a flexible developer, able to easily adapt to different
              projects and stacks.
              <br />
              <br />
              Having worked at the core of two startup companies, I bring
              adaptability, a proactive approach, and strong teamwork skills,
              which enable me thrive in fast-paced environments and contribute
              meaningfully to team success and project outcomes.
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
