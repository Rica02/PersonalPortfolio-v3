import React, { useEffect, useState } from 'react';
import '../sass/pages/projects.scss';
import { useNav } from '../hooks/useNav';
import { Project } from '../interfaces';
import { ProjectList } from '../content';
import ProjectModal from '../components/ProjectModal';
import { sendAnalyticsEvent } from '../utils/generalUtils';
import { ANALYTICS_EVENTS } from '../constants';

const Projects = () => {
  const projectsRef = useNav('projects');
  const [modalActive, setModalActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMedia, setSelectedMedia] = useState(1);

  useEffect(() => {
    // Disable scrolling while modal is open
    if (modalActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalActive, selectedProject]);

  // On click, open project details modal
  const onProjectClick = (project: Project) => {
    setModalActive(true);
    setSelectedProject(project);
    sendAnalyticsEvent(ANALYTICS_EVENTS.OPENED_PROJECT, {
      project_name: project.title,
    });
  };

  // Close modal and reset selected project
  const onProjectClose = () => {
    setModalActive(false);
    setSelectedProject(null);
    setSelectedMedia(1);
  };

  const LoadingText = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter === 3 ? 0 : prevCounter + 1;
          return newCounter;
        });
      }, 500);

      return () => clearInterval(interval);
    }, []);

    return (
      <p className="txtFaded bgText">
        loading
        <span className={`${counter > 0 && counter < 4 ? 'on' : ''}`}> .</span>
        <span className={`${counter > 1 && counter < 4 ? 'on' : ''}`}> .</span>
        <span className={`${counter > 2 && counter < 4 ? 'on' : ''}`}> .</span>
      </p>
    );
  };

  const ProjectCard = (project: Project) => {
    return (
      <div className="project-card" onClick={() => onProjectClick(project)}>
        <img
          className="thumbnail"
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
        />
        <div className="title-group">
          <h2>{project.title}</h2>
        </div>
        <p className="description">{project.description}</p>
        <div className="tools-container">
          {project.tools.map((tool, index) => (
            <div className="tool" key={index}>
              <p>{tool}</p>
            </div>
          ))}
        </div>

        <div className="project-card-hover">
          <div className="see-demo-text">SEE DEMO</div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" ref={projectsRef}>
      {/* Project details modal */}
      <div className={`modal-container ${modalActive ? 'modal-active' : ''}`}>
        <ProjectModal
          selectedProject={selectedProject}
          onProjectClose={onProjectClose}
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
        />
      </div>
      <div
        className={`dark-overlay ${modalActive ? 'overlay-active' : ''}`}
        onClick={onProjectClose}
      ></div>
      <header className="projects-header">
        <h1>Projects</h1>
      </header>
      {/* Project list */}
      <div className="projects-container">
        <div className="projects">
          {ProjectList.map((project: Project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
        {/* Background text */}
        <div className="bg-text">
          <LoadingText />
        </div>
      </div>
    </section>
  );
};

export default Projects;
