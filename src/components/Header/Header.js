import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineMenu, AiFillLinkedin } from 'react-icons/ai';
import { BiGame } from 'react-icons/Bi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {
  const [show, setShow] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#0F1624');
  
  const handleShow = () => {
    setShow(!show);
  };
  console.log(shadow)
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div 
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow 
          ? 'fixed w-full h-40 shadow-xl z-[100] ease-in-out duration-300 !top-0'
          : 'fixed w-full h-40 z-[100] !top-0'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className='flex pl-4 items-center'>
          <BiGame size={40} />
          <p className='pl-4 text-5xl font-semibold'>Jeff Chen</p>
        </div>
        <div className='mx-6'>
          <ul className='hidden md:flex'>  
            <Link href='/#Hero' scroll={false}>
              <li className="ml-10 text-4xl font-semibold uppercase hover:border-b">Home</li>
            </Link>
            <Link href='/#About' scroll={false}>
              <li className="ml-10 text-4xl font-semibold uppercase hover:border-b">About</li>
            </Link>
            <Link href='/#Timeline' scroll={false}>
              <li className="ml-10 text-4xl font-semibold uppercase hover:border-b">Experience</li>
            </Link>
            <Link href='/#Projects' scroll={false}>
              <li className="ml-10 text-4xl font-semibold uppercase hover:border-b">Project</li>
            </Link>
            <Link href='/#Photo' scroll={false}>
              <li className="ml-10 text-4xl font-semibold uppercase hover:border-b">Photo</li>
            </Link>
          </ul>
          <div onClick={handleShow} className='pr-4 md:hidden'>
            <AiOutlineMenu size={30} className='md:hidden text-xl font-semibold' />
          </div>
        </div>
      </div>
      {show && (
        <div className='fixed right-0 top-0 w-full h-screen bg-black/70'>
          <div className='fixed right-0 top-0 sm:w-[50%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex items-center'>
                <BiGame size={40} className='text-black'/>
                <p className='text-xl text-black pl-4 font-semibold'>Jeff Chen</p>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineMenu onClick={handleShow} className='text-black'/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4 text-black' />
            <div>
              <ul>
              <Link href='/#Hero' scroll={false}>
                <li onClick={() => setShow(false)} className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Home</li>
              </Link>
              <Link href='/#About' scroll={false}>
                <li onClick={() => setShow(false)} className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">About</li>
              </Link>
              <Link href='/#Timeline' scroll={false}>
                <li onClick={() => setShow(false)} className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Experience</li>
              </Link>
              <Link href='/#Projects' scroll={false}>
                <li onClick={() => setShow(false)} className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Project</li>
              </Link>
              <Link href='/#Photo' scroll={false}>
                <li onClick={() => setShow(false)} className="px-4 py-4 text-xl font-semibold text-black uppercase hover:border-b">Project</li>
              </Link>
              </ul>
            </div>
            <div className='border-b border-gray-300 my-4 text-black' />
            <div className='flex justify-between items-center py-4'>
              <a className='pl-4' href='https://github.com/CCChen19990820' target='_blank' rel="noreferrer">
                <AiFillGithub className='text-4xl text-black' />
              </a>
              <a className='pl-4' href='https://www.linkedin.com/in/ccchen0820/' target='_blank' rel="noreferrer">
                <AiFillLinkedin className='text-4xl text-black' />
              </a>
              <a className='pl-4' href='https://www.instagram.com/ccchen_1999/' target='_blank' rel="noreferrer">
                <AiFillInstagram className='text-4xl text-black' />
              </a>            
              <a className='pl-4' href='https://www.facebook.com/chen.s.ba/' target='_blank' rel="noreferrer">
                <AiFillFacebook className='text-4xl text-black' />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
