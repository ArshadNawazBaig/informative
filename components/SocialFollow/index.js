'use client';
import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'next-share';
import { SocialFollowWrapper } from './style';

const SocialFollow = ({ className }) => {
  return (
    <SocialFollowWrapper
      className={`${className} d-flex gap-1 align-items-start flex-column social-wrapper`}
    >
      <a href="http://" className="social twitter w-100 mb-2">
        <TwitterIcon size={50} />
        <span>Twitter</span>
      </a>
      <a href="http://" className="social facebook w-100 mb-2">
        <FacebookIcon size={50} />
        <span>Facebook</span>
      </a>
      <a href="http://" className="social instagram w-100 mb-2">
        <InstagramIcon size={50} />
        <span>Instagram</span>
      </a>
      <a href="http://" className="social linkedin w-100">
        <LinkedinIcon size={50} />
        <span>Linkedin</span>
      </a>
    </SocialFollowWrapper>
  );
};

export default SocialFollow;
