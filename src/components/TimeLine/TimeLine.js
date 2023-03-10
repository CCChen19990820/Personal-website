import React, { useState, useRef, useEffect } from 'react';

import { Expe, BlogCard, CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <div id='Timeline' className="w-full min-h-screen flex justify-center items-center">
      <div className='max-w-screen-xl	w-full h-full my-10 mx-auto p-2 pt-10 justify-center items-center'>
        <p className='py-2 text-4xl text-center'>
          EXPERIENCE
        </p>
        <h2 className='text-5xl text-amber-300 text-[#3CE792] text-center'>
          Work Experience
        </h2>
        <div className='py-8 mx-10'>
          <ol class="px-2 relative border-l border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-4xl font-normal leading-none text-gray-400 dark:text-gray-500">Nov 2022 - Now</time>
              <p class="text-5xl font-semibold text-white">
                National Cheng Kung University Hospital
              </p>
              <p class="text-5xl font-normal text-white">
                Researcher
              </p>
              <p className='text-4xl text-gray-400'>
                - Ultrasonic image analysis of parotid gland tumors.
              </p>
              <p className='text-4xl text-gray-400'>
                - Develop models to automatically segment and classify ultrasound images.
              </p>
              <p className='text-4xl text-gray-400'>
                - Build clinical system and user interface.
              </p>
            </li>
            <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-4xl font-normal leading-none text-gray-400 dark:text-gray-500">Nov 2022 - Now</time>
              <p class="text-5xl font-semibold text-white">
                National Cheng Chi University CS
              </p>
              <p class="text-4xl font-normal text-white">
                Teaching Assistant
              </p>
              <p className='text-4xl text-gray-400'>
                - Assist students in program implementation.
              </p>
              <p className='text-4xl text-gray-400'>
                - Write automated test of python code.
              </p>
              <p className='text-4xl text-gray-400'>
                - Teach students python knowledge.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Timeline;