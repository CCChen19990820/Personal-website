import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const About = (props) => (
  <div id='About' className='w-full h-100 flex text-center pt-40'>
      <div className='max-w-screen-xl	w-full  mx-auto p-2 pt-10 flex flex-col justify-center items-center'>
        <div>
          <p className='py-2 text-4xl'>
            ABOUT
          </p>
          <h2 className='text-5xl text-amber-300 text-[#3CE792]'>
            More About Me
          </h2>
          <p className='text-3xl py-2 text-gray-400 m-auto'>
            在台南讀書的台北人。喜歡分析數據和學習新的技術。<br />
            目前還在求學階段，未來要當一位軟體工程師。<br />
            喜歡從事戶外運動、FPS射擊遊戲、社交。
          </p>
          <div className='border-b border-green-300 my-4 text-black' />
        </div>
      </div>
    </div>
  
);

export default About;