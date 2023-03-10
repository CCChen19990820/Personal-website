import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
// import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div id='Hero' className="w-full h-screen flex text-center">
      <div className='max-w-screen-xl	w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-2 text-8xl text-slate-200'>
            Hello, I&apos;m <span className='text-[#8DF2C0]'>Jeff Chen</span>
          </h1>
          <h2 className='text-[#3CE792] text-6xl'>
            Backend | Machine Learning | Firmware
          </h2>
          <p className='py-4 text-4xl text-gray-300 m-auto'>
            I am a master student majoring in CSIE at NCKU. <br />
            Passion in machine learning, firmware technology and backend. <br />
          </p>
          <div className='flex item-center justify-between m-auto py-4 px-6'>
            <div className='mx-4 rounded-full shadow-inner shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://github.com/CCChen19990820' target='_blank' rel="noreferrer">
                <AiFillGithub className='text-5xl text-slate-200' />
              </a>
            </div>
            <div className='mx-4 rounded-full shadow-inner shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://www.linkedin.com/in/ccchen0820/' target='_blank' rel="noreferrer">
                <AiFillLinkedin className='text-5xl text-slate-200' />
              </a>
            </div>
            <div className='mx-4 rounded-full shadow-inner shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://www.instagram.com/ccchen_1999/' target='_blank' rel="noreferrer">
                <AiFillInstagram className='text-5xl text-slate-200' />
              </a>
            </div>
            <div className='mx-4 rounded-full shadow-inner shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://www.facebook.com/chen.s.ba/' target='_blank' rel="noreferrer">
                <AiFillFacebook className='text-5xl text-slate-200' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
);

export default Hero;