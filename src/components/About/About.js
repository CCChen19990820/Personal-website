import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const About = (props) => (
  <div id='About' className='about'>
      <div className='about section'>
          <p className='about title' style={{textAlign: 'center', paddingTop:"200px", fontSize: 30}}>
            ABOUT
          </p>
          <h2 className='about subtutle' style={{color: '#569A78', textAlign: 'center', paddingTop:"0px", fontSize: 40}}>
            More About Me
          </h2>
          <p className='about text' style={{textAlign: 'center', paddingTop:"0px", fontSize: 18}}>
            在台南讀書的台北人。喜歡分析數據和學習新的技術。<br />
            目前還在求學階段，未來要當一位軟體工程師。<br />
            喜歡從事戶外運動、FPS射擊遊戲、社交。
          </p>
          <div className='about skill mid block' style={{textAlign: 'center', paddingTop:"50px"}}/>
      </div>
    </div>
);

export default About
