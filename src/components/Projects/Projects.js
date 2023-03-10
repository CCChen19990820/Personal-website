import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ProjectContainer from "./ProjectContainer";


const Projects = () => (
  <div id='Projects' className='w-full min-h-screen text-center pt-40'>
      <div className='max-w-screen-xl mx-auto  px-2 py-16'>
        <p className='py-2 text-4xl text-center'>
          PROJECT
        </p>
        <h2 className='text-5xl text-amber-300 text-[#3CE792] text-center'>
          My Projects
        </h2>
        <div className='my-6 grid md:grid-cols-2 gap-8'>
          {projects.map(({id, image, title, tags, source})=>(
            <ProjectContainer
              imageUrl={image}
              title={title}
              tech={tags}
              linkUrl={source}
            />
          ))}
        </div>
      </div>
    </div>
  
);

export default Projects;