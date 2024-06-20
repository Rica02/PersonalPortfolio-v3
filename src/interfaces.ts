import { ReactNode } from 'react';

export interface NavContextType {
  activeLinkId: string;
  setActiveLinkId: (id: string) => void;
}

export interface NavProviderProps {
  children: ReactNode;
}

export interface AboutMeCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Skill {
  img: string;
  name: string;
}

export interface SkillLogos {
  firstRow: Skill[];
  secondRow: Skill[];
  thirdRow: Skill[];
}

export interface Media {
  src: string;
  isVideo: boolean;
}

export interface Project {
  thumbnail: string;
  logo: string;
  title: string;
  description: string;
  tools: string[];
  gallery: Media[];
}
