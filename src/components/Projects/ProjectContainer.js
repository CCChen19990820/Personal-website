import React from "react";
import Image from "next/image";

const ProjectContainer = ({imageUrl, title, tech, linkUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r '>
      <Image 
        className='rounded-xl group-hover:opacity-10' 
        src={imageUrl} 
        alt='/'
        width={600}
        height={150}
      /> 
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center whitespace-nowrap'>
          {tech}
        </p>
        <a href={linkUrl} target='_blank' rel="noreferrer">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github</p>
        </a>
      </div>
    </div>    
  )
}

export default ProjectContainer;