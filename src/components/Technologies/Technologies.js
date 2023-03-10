import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, GridContainer, List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiLinux, SiReact, SiWindows, SiDocker, SiGit, SiPython, SiJava, SiC, SiPostgresql } from 'react-icons/Si';
import { RiToolsFill } from 'react-icons/Ri';
import TechContainer from "./TechContainer";
import { Dev, Language } from "../../constants/constants";

const Technologies = () =>  (
  <div id='About' className='w-full h-100 flex text-center'>
      <div className='max-w-screen-xl	w-full mx-auto p-2 flex flex-col justify-center items-center'>
      <p className='py-2 text-4xl'>
        I am familiar with
      </p>
      <h2 className='text-5xl text-amber-300 text-[#3CE792]'>
        Programming Language
      </h2>
      <div className='py-2 grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {Language.map((skill) => (
          <TechContainer icon={skill.icon} name={skill.name} />
        ))}
      </div>
      <h2 className='text-5xl text-amber-300 text-[#3CE792]'>
        Developement Tools
      </h2>
      <div className='py-2 grid grid-cols-2 lg:grid-cols-4 gap-4'>          
        {Dev.map((skill) => (
          <TechContainer icon={skill.icon} name={skill.name} />
        ))}
      </div>     
    </div>
  </div>
);

export default Technologies;