import React from 'react';

// import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
// import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div id='hero' className="hero" >
    <div className='hero section'>
      <h1 className='hero-h1-text' style={{textAlign: 'center', paddingTop:"200px", fontSize: 70}}>
        Hello, I'm <span style={{color: '#8DF2C0'}}>Jeff Chen</span>
      </h1>
      <h2 className='hero-h2-text' style={{color: '#569A78', textAlign: 'center', paddingBottom:"20px", fontSize: 40}}>
            Backend | Machine Learning | Firmware
      </h2>
      <p className='hero-p-text' style={{textAlign: 'center', paddingBottom:"20px", fontSize: 20}}>
            I am a master student majoring in CSIE at NCKU. <br />
            Passion in machine learning, firmware technology and backend. <br />
      </p>
    </div>
  </div>
);

export default Hero;