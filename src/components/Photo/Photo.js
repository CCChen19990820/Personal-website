import React from 'react';
import Image from "next/image";

import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import PhotoContainer from "./PhotoContainer";
import { photo } from "../../constants/constants";

const Photo = () =>  (
  
  <div id='Photo' className='w-full h-100 flex text-center py-80'>
    <div className='max-w-screen-xl	w-full mx-auto p-2 flex flex-col justify-center items-center'>
      <p className='py-2 text-4xl'>
        Photo
      </p>
      <h2 className='text-5xl text-amber-300 text-[#3CE792]'>
        My Photography
      </h2>
      <div className='py-2 grid grid-cols-1 lg:grid-cols-4 gap-4'>          
        {photo.map(({id, image}) => (
          <PhotoContainer 
            imageUrl={image} 
          />
        ))}
      </div>
    </div>
  </div>
);

export default Photo;
