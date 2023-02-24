import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <div className='footer section' >
      <p style={{textAlign: 'center', fontSize: 20}}>
        © Created by JeffChen in 2023.
      </p>
    </div>
  );
};

export default Footer;
