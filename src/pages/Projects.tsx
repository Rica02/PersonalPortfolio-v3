import React, { useState } from 'react';
import '../sass/pages/projects.scss';
import { useNav } from '../hooks/useNav';
import { Project } from '../interfaces';
import { ProjectList } from '../content';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const projectsRef = useNav('projects');
  const [modalActive, setModalActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMedia, setSelectedMedia] = useState(1);

  // On click, open project details modal
  const onProjectClick = (project: Project) => {
    setModalActive(true);
    setSelectedProject(project);
  };

  // Close modal and reset selected project
  const onProjectClose = () => {
    setModalActive(false);
    setSelectedProject(null);
    setSelectedMedia(1);
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
      <div className="projects-container">
        <div className="projects">
          {ProjectList.map((project: Project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
