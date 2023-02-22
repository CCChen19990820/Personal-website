import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <div className='footer section' >
      <h2 style={{display: "flex", textAlign: "center"}}>
        © 2023 ALL RIGHTS RESERVED
      </h2>
    </div>
  );
};

export default Footer;
