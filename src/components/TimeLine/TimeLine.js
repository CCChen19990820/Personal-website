import React, { useState, useRef, useEffect } from 'react';

import { Expe, BlogCard, CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <div id='Timeline' className='about'>
      <div className='experience section'>
          <p className='experience title' style={{textAlign: 'center', paddingTop:"200px", fontSize: 30}}>
            EXPERIENCE
          </p>
          <h2 className='experience subtutle' style={{color: '#569A78', textAlign: 'center', paddingTop:"0px", fontSize: 40}}>
            WORK EXPERIENCE
          </h2>
          <div className='experience section divide' style={{paddingTop:"50px"}}>
          <Expe>
            {TimeLineData.map(({id, year, company, job, text1, text2, text3})=>(
              <BlogCard key={id} style={{paddingBottom: "50px"}}>
                <p style={{color: "#C8CECB", fontSize: 25}}>{year}<br /></p>
                <p style={{color: "#FFFFFF", fontSize: 30, fontWeight: 'bold'}}>{company}<br /></p>
                <p style={{color: "#FFFFFF", fontSize: 30}}>{job}<br /></p>
                <p style={{color: "#C8CECB", fontSize: 20}}>{text1}<br /></p>
                <p style={{color: "#C8CECB", fontSize: 20}}>{text2}<br /></p>
                <p style={{color: "#C8CECB", fontSize: 20}}>{text3}<br /></p>
              </BlogCard>
            ))}
          </Expe>
            
          </div>
      </div>
    </div>
  );
};

export default Timeline;
