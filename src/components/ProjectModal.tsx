import React, { useEffect, useState } from 'react';
import '../sass/components/project-modal.scss';
import { IoCloseSharp } from 'react-icons/io5';
import { FaPlay } from 'react-icons/fa';
import { Media, Project } from '../interfaces';

interface ProjectModalProps {
  selectedProject: Project | null;
  onProjectClose: () => void;
  selectedMedia: number;
  setSelectedMedia: (value: number) => void;
}

const ProjectModal = (props: ProjectModalProps) => {
  const [source, setSource] = useState<string | undefined>('');

  useEffect(() => {
    setSource(props.selectedProject?.gallery[props.selectedMedia].src);
  }, [props.selectedMedia, props]);

  return (
    <div className="container">
      <div className="header">
        <h2>{props.selectedProject?.title}</h2>
        <div className="icon">
          <IoCloseSharp onClick={props.onProjectClose} />
        </div>
      </div>
      <div className="wrapper">
        <div className="top">
          {props.selectedProject?.gallery[props.selectedMedia].isVideo ? (
            <video
              key={source}
              controls
              autoPlay
              loop
              height={'100%'}
              width={'100%'}
            >
              <source src={source} type="video/mov" />
              <source src={source} type="video/mp4" />
              <p>
                Sorry, it looks like your browser doesn't support this embedded
                video.
              </p>
            </video>
          ) : (
            <img src={source} alt={`${props.selectedProject?.title} image`} />
          )}
        </div>
        <div className="bottom">
          {props.selectedProject?.gallery.map((media: Media, index: number) =>
            media.isVideo ? (
              <div
                key={index}
                className="video-container"
                onClick={() => props.setSelectedMedia(index)}
              >
                <FaPlay />
                <video height={'100%'} width={'100%'}>
                  <source src={media.src} type="video/mov" />
                  <source src={media.src} type="video/mp4" />
                  <p>
                    Sorry, it looks like your browser doesn't support this
                    embedded video.
                  </p>
                </video>
              </div>
            ) : (
              <img
                src={media.src}
                alt={`${props.selectedProject?.title} thumbnail`}
                onClick={() => props.setSelectedMedia(index)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
