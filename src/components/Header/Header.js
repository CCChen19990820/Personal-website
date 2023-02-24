import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BiGame } from 'react-icons/Bi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{display: "flex", alignItems: "center", color: "white"}}>
        <BiGame size="3rem" /> <span>Jeff Chen</span>
      </Link>
    </Div1>
    <Div2>
      <li >
        <NavLink href="/#Hero" style={{  padding: "10px"}}>Home</NavLink>
      </li>
      <li>
        <NavLink href="/#About" style={{  padding: "10px"}}>About</NavLink>
      </li>
      {/* <li>
        <NavLink href="/#Technologies" style={{  padding: "10px"}}>Technologies</NavLink>
      </li> */}
      <li>
        <NavLink href="/#Timeline" style={{  padding: "10px"}}>Experience</NavLink>
      </li>
      <li>
        <NavLink href="/#Projects" style={{  padding: "10px"}}>Projects</NavLink>
      </li>
      
      
    </Div2>
    <Div3>
      <SocialIcons href={'https://github.com/CCChen19990820'}>
        <AiFillGithub  size="3rem" />
      </SocialIcons>
      <SocialIcons href={'https://www.linkedin.com/in/ccchen0820/'}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href={'https://www.instagram.com/ccchen_1999/'}>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href={'https://www.facebook.com/chen.s.ba/'}>
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
