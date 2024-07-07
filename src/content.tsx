import React from 'react';
import { AboutMeCard, Project, SkillLogos } from './interfaces';
import { GiBrain, GiPaintBrush, GiBookPile } from 'react-icons/gi';

import logoJS from './assets/logos/logo-javascript.png';
import logoTS from './assets/logos/logo-typescript.png';
import logoHtml from './assets/logos/logo-html.png';
import logoCss from './assets/logos/logo-css.png';
import logoCSharp from './assets/logos/logo-c-sharp.png';
import logoReact from './assets/logos/logo-react.jpg';
import logoGit from './assets/logos/logo-git.png';

import logoVscode from './assets/logos/logo-vscode.png';
import logoVS from './assets/logos/logo-visual-studio.png';
import logoAS from './assets/logos/logo-android-studio.png';
import logoXcode from './assets/logos/logo-xcode.png';
import logoUnity from './assets/logos/logo-unity.png';
import logoNode from './assets/logos/logo-node.png';
import logoNetlify from './assets/logos/logo-netlify.png';

import logoSQL from './assets/logos/logo-sql.png';
import logoFB from './assets/logos/logo-firebase.png';
import logoFigma from './assets/logos/logo-figma.png';
import logoXD from './assets/logos/logo-xd.png';
import logoPS from './assets/logos/logo-photoshop.png';
import logoAI from './assets/logos/logo-illustrator.png';
import logoAffDes from './assets/logos/logo-affinity-designer.png';

import ptMetaLogo from './assets/projects/pt-metaverse-logo.png';
import ptMetaImg from './assets/projects/pt-metaverse-img.png';
import ptMeta1 from './assets/projects/pt-metaverse-gallery-1.mp4';
import ptMeta2 from './assets/projects/pt-metaverse-gallery-2.mp4';
import ptMeta3 from './assets/projects/pt-metaverse-gallery-3.png';
import ptMeta4 from './assets/projects/pt-metaverse-gallery-4.png';
import ptMeta5 from './assets/projects/pt-metaverse-gallery-5.png';
import ptMeta6 from './assets/projects/pt-metaverse-gallery-6.png';
import ptMeta7 from './assets/projects/pt-metaverse-gallery-7.png';
import ptMeta8 from './assets/projects/pt-metaverse-gallery-8.png';
import ptMeta9 from './assets/projects/pt-metaverse-gallery-9.png';

import ptAiLogo from './assets/projects/pt-ai-logo.png';
import ptAiImg from './assets/projects/pt-ai-img.png';
import ptAi1 from './assets/projects/pt-ai-gallery-1.mp4';
import ptAi2 from './assets/projects/pt-ai-gallery-2.mov';
import ptAi3 from './assets/projects/pt-ai-gallery-3.png';
import ptAi4 from './assets/projects/pt-ai-gallery-4.png';
import ptAi5 from './assets/projects/pt-ai-gallery-5.png';
import ptAi6 from './assets/projects/pt-ai-gallery-6.png';

import ptGolfLogo from './assets/projects/pt-golf-logo.png';
import ptGolfImg from './assets/projects/pt-golf-img.png';
import ptGolf1 from './assets/projects/pt-golf-gallery-1.mp4';
import ptGolf2 from './assets/projects/pt-golf-gallery-2.png';

import scusamiLogo from './assets/projects/scusami-logo.png';
import scusamiImg from './assets/projects/scusami-img.png';
import scusami1 from './assets/projects/scusami-gallery-1.mov';
import scusami2 from './assets/projects/scusami-gallery-2.png';
import scusami3 from './assets/projects/scusami-gallery-3.png';

import portfolioLogo from './assets/projects/portfolio-logo.png';
import portfolio1 from './assets/projects/portfolio-gallery-1.mov';
import portfolio2 from './assets/projects/portfolio-gallery-2.png';

import techConnectLogo from './assets/projects/techconnect-logo.png';
import techConnectImg from './assets/projects/techconnect-img.png';
import techConnect1 from './assets/projects/techconnect-gallery-1.mp4';
import techConnect2 from './assets/projects/techconnect-gallery-2.png';
import techConnect3 from './assets/projects/techconnect-gallery-3.png';
import techConnect4 from './assets/projects/techconnect-gallery-4.png';
import techConnect5 from './assets/projects/techconnect-gallery-5.png';

import myStoryLogo from './assets/projects/mystory-logo.png';
import myStoryImg from './assets/projects/mystory-img.png';
import myStory1 from './assets/projects/mystory-gallery-1.mov';
import myStory2 from './assets/projects/mystory-gallery-2.png';
import myStory3 from './assets/projects/mystory-gallery-3.png';
import myStory4 from './assets/projects/mystory-gallery-4.png';

import articLogo from './assets/projects/artic-logo.png';
import articImg from './assets/projects/artic-img.png';
import artic1 from './assets/projects/artic-gallery-1.mp4';
import artic2 from './assets/projects/artic-gallery-2.png';

import bookwormLogo from './assets/projects/bookwormden-logo.png';
import bookwormImg from './assets/projects/bookwormden-img.png';
import bookworm1 from './assets/projects/bookwormden-gallery-1.mov';
import bookworm2 from './assets/projects/bookwormden-gallery-2.png';
import bookworm3 from './assets/projects/bookwormden-gallery-3.png';

export const AboutMeCards: AboutMeCard[] = [
  {
    icon: <GiBrain />,
    title: 'A LOVE FOR LEARNING',
    description:
      "I'm very curious about science, art, nature and technology. I've always enjoyed learning new things and keeping my mind enganged.",
  },
  {
    icon: <GiPaintBrush />,
    title: 'ENGAGING HOBBIES',
    description:
      "Outside my usual activities, I'm a hobbyist digital and vector artist, a casual gamer, a beginner runner and a blue belt in Taekwondo.",
  },
  {
    icon: <GiBookPile />,
    title: 'OBSESSIVELY ORGANISED',
    description:
      "I'm all for maximising efficiency and productivity, so I like to keep things around me organised and get even the small details right.",
  },
];

export const Logos: SkillLogos = {
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

export const ProjectList: Project[] = [
  {
    thumbnail: ptMetaImg,
    logo: ptMetaLogo,
    title: 'Play Today. Metaverse',
    description:
      'An open world 3D space tailored to golf enthusiasts where users can interact, socialise, and engage in various activities.',
    tools: [
      'TypeScript',
      'JavaScript',
      'React',
      'C#',
      'Unity',
      'WebGL',
      'iOS',
      'Android',
    ],
    // MAX 9 long images
    gallery: [
      { src: ptMetaLogo, isVideo: false },
      { src: ptMeta1, isVideo: true },
      { src: ptMeta2, isVideo: true },
      { src: ptMeta4, isVideo: false },
      { src: ptMeta5, isVideo: false },
      { src: ptMeta6, isVideo: false },
      { src: ptMeta7, isVideo: false },
      { src: ptMeta9, isVideo: false },
      { src: ptMeta8, isVideo: false },
      { src: ptMeta3, isVideo: false },
    ],
  },
  {
    thumbnail: ptAiImg,
    logo: ptAiLogo,
    title: 'Play Today. AI',
    description:
      'Meet New Tom, an interactive AI powered chatbot who is an expert on golf rules and can answer any golf related question.',
    tools: [
      'TypeScript',
      'JavaScript',
      'React',
      'Web',
      'OpenAI',
      'ElevenLabs API',
    ],
    gallery: [
      { src: ptAiLogo, isVideo: false },
      { src: ptAi1, isVideo: true },
      { src: ptAi2, isVideo: true },
      { src: ptAi3, isVideo: false },
      { src: ptAi4, isVideo: false },
      { src: ptAi5, isVideo: false },
      // { src: ptAi6, isVideo: false },
    ],
  },
  {
    thumbnail: ptGolfImg,
    logo: ptGolfLogo,
    title: 'Play Today. Golf',
    description:
      'A mobile app that provides golfers with digital scoring for competitions, live leaderboards, GPS functionality and more.',
    tools: [
      'TypeScript',
      'React Native',
      'iOS',
      'Android',
      'Firebase',
      'Google Maps API',
    ],
    gallery: [
      { src: ptGolfLogo, isVideo: false },
      { src: ptGolf1, isVideo: true },
      { src: ptGolfImg, isVideo: false },
      { src: ptGolf2, isVideo: false },
    ],
  },
  {
    thumbnail: scusamiImg,
    logo: scusamiLogo,
    title: 'Scusa Mi! App',
    description:
      'Mobile app prototype for a local popular Italian restaurant to browse the menu, place orders and make reservations.',
    tools: ['TypeScript', 'React Native', 'iOS', 'Android'],
    gallery: [
      { src: scusamiLogo, isVideo: false },
      { src: scusami1, isVideo: true },
      { src: scusamiImg, isVideo: false },
      { src: scusami2, isVideo: false },
      { src: scusami3, isVideo: false },
    ],
  },
  {
    thumbnail: portfolioLogo,
    logo: portfolioLogo,
    title: 'Personal Portfolio',
    description:
      "Website developed from scratch as a portfolio to showcase my skills and work (you're looking at it!).",
    tools: ['TypeScript', 'React', 'Web'],
    gallery: [
      { src: portfolioLogo, isVideo: false },
      { src: portfolio1, isVideo: true },
      { src: portfolio2, isVideo: false },
    ],
  },
  {
    thumbnail: techConnectImg,
    logo: techConnectLogo,
    title: 'TechConnect',
    description:
      'TechConnect is a website that provides tutoring services to users wanting to learn about tech devices.',
    tools: ['JavaScript', 'React', 'Web', 'Zoom API'],
    gallery: [
      { src: techConnectLogo, isVideo: false },
      { src: techConnect1, isVideo: true },
      { src: techConnect3, isVideo: false },
      { src: techConnect2, isVideo: false },
      { src: techConnect5, isVideo: false },
      { src: techConnect4, isVideo: false },
    ],
  },
  {
    thumbnail: myStoryImg,
    logo: myStoryLogo,
    title: 'MyStory',
    description:
      'MyStory is an Android journal keeping app where users can write daily entries, upload images and track their locations.',
    tools: ['Java', 'Android Studio', 'Firebase', 'Android'],
    gallery: [
      { src: myStoryLogo, isVideo: false },
      { src: myStory1, isVideo: true },
      { src: myStory2, isVideo: false },
      { src: myStory3, isVideo: false },
      { src: myStory4, isVideo: false },
    ],
  },
  {
    thumbnail: articImg,
    logo: articLogo,
    title: 'Artic',
    description:
      ' Artic is an iOS app tailored for artists, where users can post media, leave likes, write comments and follow their favourite artists.',
    tools: ['Objective C', 'Xcode', 'Firebase', 'iOS'],
    gallery: [
      { src: articLogo, isVideo: false },
      { src: artic1, isVideo: true },
      { src: articImg, isVideo: false },
      { src: artic2, isVideo: false },
    ],
  },

  {
    thumbnail: bookwormImg,
    logo: bookwormLogo,
    title: 'Bookworm Den',
    description:
      ' Bookworm Den is a simple online library where users can browse books, view book information and leave reviews.',
    tools: ['JavaScript', 'React', 'Web', 'Node'],
    gallery: [
      { src: bookwormLogo, isVideo: false },
      { src: bookworm1, isVideo: true },
      { src: bookworm2, isVideo: false },
      { src: bookworm3, isVideo: false },
    ],
  },
];
