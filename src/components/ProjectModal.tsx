import React, { useEffect, useRef, useState } from 'react';
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
  const modalRef = useRef<any>(null);

  useEffect(() => {
    setSource(props.selectedProject?.gallery[props.selectedMedia].src);
  }, [props.selectedMedia, props]);

  const changeSelectedMedia = (index: number) => {
    props.setSelectedMedia(index);
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="container" ref={modalRef}>
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
            <img src={source} alt={`${props.selectedProject?.title}`} />
          )}
        </div>
        <div className="bottom">
          {props.selectedProject?.gallery.map((media: Media, index: number) =>
            media.isVideo ? (
              <div
                key={index}
                className="video-container"
                onClick={() => changeSelectedMedia(index)}
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
                key={index}
                src={media.src}
                alt={`${props.selectedProject?.title} thumbnail`}
                onClick={() => changeSelectedMedia(index)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
