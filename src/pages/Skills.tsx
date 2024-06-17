import React, { useEffect, useState } from 'react';
import '../sass/pages/skills.scss';
import { useNav } from '../hooks/useNav';

import logoJS from '../assets/logos/logo-javascript.png';
import logoTS from '../assets/logos/logo-typescript.png';
import logoHtml from '../assets/logos/logo-html.png';
import logoCss from '../assets/logos/logo-css.png';
import logoCSharp from '../assets/logos/logo-c-sharp.png';
import logoReact from '../assets/logos/logo-react.jpg';
import logoGit from '../assets/logos/logo-git.png';

import logoVscode from '../assets/logos/logo-vscode.png';
import logoVS from '../assets/logos/logo-visual-studio.png';
import logoAS from '../assets/logos/logo-android-studio.png';
import logoXcode from '../assets/logos/logo-xcode.png';
import logoUnity from '../assets/logos/logo-unity.png';
import logoNode from '../assets/logos/logo-node.png';
import logoNetlify from '../assets/logos/logo-netlify.png';

import logoSQL from '../assets/logos/logo-sql.png';
import logoFB from '../assets/logos/logo-firebase.png';
import logoFigma from '../assets/logos/logo-figma.png';
import logoXD from '../assets/logos/logo-xd.png';
import logoPS from '../assets/logos/logo-photoshop.png';
import logoAI from '../assets/logos/logo-illustrator.png';
import logoAffDes from '../assets/logos/logo-affinity-designer.png';

interface Skill {
  img: string;
  name: string;
}

interface SkillLogos {
  firstRow: Skill[];
  secondRow: Skill[];
  thirdRow: Skill[];
}

const Skills = () => {
  const skillsRef = useNav('skills');

  const LoadingText = () => {
    const [text, setText] = useState('loading');
    let dot = '.';
    let counter = 0;

    useEffect(() => {
      const interval = setInterval(() => {
        if (counter > 2) {
          counter = 0;
          setText('loading');
        } else {
          counter++;
          setText((prev) => prev + dot);
        }
      }, 500);

      return () => clearInterval(interval);
    }, []);

    return <p className="txtFaded bgText">{text}</p>;
  };

  // Skills table
  const Skills = () => {
    const logos: SkillLogos = {
      firstRow: [
        { img: logoJS, name: 'JavaScript' },
        { img: logoTS, name: 'TypeScript' },
        { img: logoHtml, name: 'HTML' },
        { img: logoCss, name: 'CSS' },
        { img: logoCSharp, name: 'C#' },
        { img: logoReact, name: 'React' },
        { img: logoUnity, name: 'Unity' },
      ],
      secondRow: [
        { img: logoVscode, name: 'VS Code' },
        { img: logoVS, name: 'Visual Studio' },
        { img: logoAS, name: 'Android Studio' },
        { img: logoXcode, name: 'XCode' },
        { img: logoFB, name: 'Firebase' },
        { img: logoNode, name: 'Node JS' },
        { img: logoSQL, name: 'SQL' },
      ],
      thirdRow: [
        { img: logoGit, name: 'Git' },
        { img: logoNetlify, name: 'Netlify' },
        { img: logoFigma, name: 'Figma' },
        { img: logoXD, name: 'Adobe XD' },
        { img: logoPS, name: 'Photoshop' },
        { img: logoAI, name: 'Illustrator' },
        { img: logoAffDes, name: 'Affinity Designer' },
      ],
    };

    return (
      <div className="skills-table">
        {Object.keys(logos).map((key, index) => (
          <div
            className={`table-row ${
              index % 2 == 0 ? 'right-to-left' : 'left-to-right'
            }`}
            key={key}
          >
            {logos[key as keyof SkillLogos]
              .concat(logos[key as keyof SkillLogos])
              .map((item, index) => (
                <div className="row-item">
                  <img key={index} src={item.img} alt={item.name} />
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
        {/* Background text */}
        <div className="bg-text">
          <LoadingText />
        </div>
      </div>
    </section>
  );
};

export default Skills;
