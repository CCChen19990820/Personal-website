import React from "react";
import Image from "next/image";

const PhotoContainer = ({ imageUrl }) => {
  return (
    <div className='flex items-center justify-center h-auto w-full rounded-xl group'>
      <Image 
        className='rounded-xl' 
        src={imageUrl}
        alt='/'
        width={600}
        height={150}
      />
      
    </div>
  );
}

export default PhotoContainer;