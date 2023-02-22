import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, GridContainer, List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiLinux, SiReact, SiWindows, SiDocker, SiGit, SiPython, SiJava, SiC, SiPostgresql } from 'react-icons/Si';
import { RiToolsFill } from 'react-icons/Ri';

const Technologies = () =>  (
  <div id='Technologies' className='Technologies'>
    <div className='Technologies section'></div>
    <p className='Technologies title' style={{textAlign: 'center', paddingTop:"0px", fontSize: 30}}>
      I'm familar with
    </p>
    <h2 className='Technologies subtutle' style={{color: '#569A78', textAlign: 'center', paddingBottom:"10px", fontSize: 40}}>
      Developement tools
    </h2>

    <div className='Technologies section divide' style={{}}>
      <GridContainer>
        <BlogCard>
          <SiWindows size="3rem" /><span style={{paddingLeft: '30px'}}>Windows</span>
        </BlogCard>
        <BlogCard>
          <SiLinux size="3rem" /><span style={{paddingLeft: '30px'}}>Linux</span>
        </BlogCard>
        <BlogCard>
          <SiReact size="3rem" /><span style={{paddingLeft: '30px'}}>React</span>
        </BlogCard>
        <BlogCard>
          <SiDocker size="3rem" /><span style={{paddingLeft: '30px'}}>Docker</span>
        </BlogCard>
        <BlogCard>
          <SiGit size="3rem" /><span style={{paddingLeft: '30px'}}>Git</span>
        </BlogCard>
        <BlogCard>
          <SiPostgresql size="3rem" /><span style={{paddingLeft: '30px'}}>PostgreSQL</span>
        </BlogCard>
        <BlogCard>
          <RiToolsFill size="3rem" /><span style={{paddingLeft: '30px'}}>MLflow</span>
        </BlogCard>
        <BlogCard>
          <RiToolsFill size="3rem" /><span style={{paddingLeft: '30px'}}>FreeRTOS</span>
        </BlogCard>
      </GridContainer>
    </div>
    <h2 className='Technologies subtutle' style={{color: '#569A78', textAlign: 'center', paddingBottom:"10px", fontSize: 40}}>
      Programming Languages
    </h2>
    <div className='Technologies section divide' style={{}}>
      <GridContainer>
        <BlogCard>
          <SiPython size="3rem" /><span style={{paddingLeft: '30px'}}>Python</span>
        </BlogCard>
        <BlogCard>
        <SiC size="3rem" /><span style={{paddingLeft: '30px'}}>C++ / C</span>
        </BlogCard>
        <BlogCard>
          <SiJava size="3rem" /><span style={{paddingLeft: '30px'}}>Java</span>
        </BlogCard>
        <BlogCard>
          <SiC size="3rem" /><span style={{paddingLeft: '30px'}}>C#</span>
        </BlogCard>
      </GridContainer>
    </div>
</div>


    // <List>
    //   <ListItem>
    //     <DiFirebase size="3rem"/>
    //     <ListContainer>
    //       <ListTitle>Data Engineering</ListTitle>
    //       <ListParagraph>
    //         Keras <br />
    //         Tensorflow <br />
    //         Scikit-learn
    //       </ListParagraph>
    //     </ListContainer>
    //   </ListItem>
    //   <ListItem>
    //     <DiFirebase size="3rem"/>
    //     <ListContainer>
    //       <ListTitle>Develope Tech</ListTitle>
    //       <ListParagraph>
    //         MySQL <br />
    //         PostgreSQL <br />
    //         Linux <br />
    //         Docker <br />
    //         MLflow <br />
    //         Git <br />
    //       </ListParagraph>
    //     </ListContainer>
    //   </ListItem>
    //   <ListItem>
    //     <DiFirebase size="3rem"/>
    //     <ListContainer>
    //       <ListTitle>Language</ListTitle>
    //       <ListParagraph>
    //         Python <br />
    //         C++ / C <br />
    //         Java <br />
    //         React <br />
    //       </ListParagraph>
    //     </ListContainer>
    //   </ListItem>
    // </List>
);

export default Technologies;
