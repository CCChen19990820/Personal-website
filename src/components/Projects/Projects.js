import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectDemo = [{
  title: 'project 1',
  description: 'ppppppppp1'
},{
  title: 'project 2',
  description: 'ppppppppp2'
},{
  title: 'project 3',
  description: 'ppppppppp2'
},{
  title: 'project 4',
  description: 'ppppppppp2'
}];

const Projects = () => (
  // <div>
  //   Project
  // </div>
  <Section nopadding id="Projects">
    <p className='experience title' style={{textAlign: 'center', paddingTop:"200px", fontSize: 30}}>
      PROJECT
    </p>
    <h2 className='experience subtutle' style={{color: '#569A78', textAlign: 'center', paddingTop:"0px", fontSize: 40}}>
      What I've built
    </h2>
    <GridContainer>
        {projects.map(({id, image, title, description, tags, source, visit})=>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
        ))}
    </GridContainer>
  </Section>
);

export default Projects;