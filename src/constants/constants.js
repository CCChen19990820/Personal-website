import { SiLinux, SiReact, SiWindows, SiDocker, SiGit, SiPython, SiJava, SiC, SiPostgresql } from 'react-icons/Si';
import { RiToolsFill } from 'react-icons/Ri';

export const projects = [
  {
    title: 'PGT ultrasound image segmentation and classification',
      image: '/../public/images/p1.png',
      tags: 'Tensorflow - Scikit-learn - Python - Docker',
    source: 'https://github.com/CCChen19990820/PGT-ultrasound-image-segmentation-and-classification',
    id: 0,
  },
  {
    title: 'Cyber Warrior Detection on YouTube',
    image: '/../public/images/p2.png',
    tags: 'Machine Learning - Scrapy - Python - Node.js',
    source: 'https://github.com/CCChen19990820/Cyber_Warrior_Detection_on_YouTube',
    id: 1,
  },
  {
    title: 'Brawl Fight Game',
    image: '/../public/images/p3.png',
    tags: 'OS mutex - Unity3D - C#',
    source: 'https://github.com/CCChen19990820/Unity-Brawl-Fight',
    id: 2,
  },
  {
    title: 'Job Platform',
    image: '/../public/images/p4.png',
    tags: 'Python - PostgreSQL - Scrapy - Docker',
    source: 'https://github.com/CCChen19990820/job-platform',
    id: 3,
  },
  {
    title: 'OOP Farm Ecology Simulation',
    image: '/../public/images/p5.png',
    tags: 'OOP - C++ - Linux',
    source: 'https://github.com/CCChen19990820/OOP-Farm-Ecology',
    id: 4,
  },
  {
    title: 'Kinectv1 Human Skeleton Detection',
    image: '/../public/images/p6.png',
    tags: 'Kinectv1 - Unity3D - C# - OS mutex',
    source: 'https://github.com/CCChen19990820/HCI_Unity-kinect-Play-Footballs',
    id: 5,
  },
];

export const TimeLineData = [
  {
    year: 'Mar. 2022 - Jun. 2023',
    job: 'Researcher',
    company: 'National Cheng Kung University Hospital',
    text1: '- Ultrasonic image analysis of parotid gland tumors. ',
    text2: '- Develop models to automatically segment and classify ultrasound images.',
    text3: '- Build clinical system and user interface.',
    id: 0,
  },{ 
    year: 'Mar. 2020 - July. 2021',
    job: 'Teaching Assistant',
    company: 'National Cheng Chi University CS',
    text1: '- Assist students in program implementation.',
    text2: '- Write automated test of python code.',
    text3: '- Teach students python knowledge.',
    id: 1,  
  },
];

export const Language = [
  {
    icon: <SiC size="3rem" />,
    name: 'C / C++'
  },
  {
    icon: <SiPython size="3rem" />,
    name: 'Python'
  },
  {
    icon: <SiC size="3rem" />,
    name: 'C#'
  },
  {
    icon: <SiJava size="3rem" />,
    name: 'Java'
  }
];

export const Dev = [
  {
    icon: <SiLinux size="3rem" />,
    name: 'Linux'
  },
  {
    icon: <SiWindows size="3rem" />,
    name: 'Windows'
  },
  {
    icon: <RiToolsFill size="3rem" />,
    name: 'FreeRTOS'
  },
  {
    icon: <SiReact size="3rem" />,
    name: 'Reactjs'
  },
  {
    icon: <SiDocker size="3rem" />,
    name: 'Docker'
  },
  {
    icon: <SiGit size="3rem" />,
    name: 'Git'
  },
  {
    icon: <SiPostgresql size="3rem" />,
    name: 'Postgresql'
  },
  {
    icon: <RiToolsFill size="3rem" />,
    name: 'MLflow'
  }
];

export const photo = [
  {
    id: 1,
    image: '/../public/images/l1.jpg',
  },
  {
    id: 2,
    image: '/../public/images/l2.jpg',
  },
  {
    id: 3,
    image: '/../public/images/l3.jpg',
  },
  {
    id: 4,
    image: '/../public/images/l4.jpg',
  }
];