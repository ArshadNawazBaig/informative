'use client';
import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'next-share';
import { SocialFollowWrapper } from './style';

const SocialFollow = ({ className, socialLinks }) => {
  return (
    <SocialFollowWrapper
      className={`${className} d-flex gap-1 align-items-start flex-column social-wrapper`}
    >
      {socialLinks?.map((socialLink) => (
        <a
          href={socialLink?.url}
          className={`social ${socialLink.platform} w-100 mb-2`}
          key={socialLink.id}
        >
          {socialLink?.platform === 'twitter' ? (
            <TwitterIcon size={50} />
          ) : socialLink?.platform === 'facebook' ? (
            <FacebookIcon size={50} />
          ) : socialLink?.platform === 'instagram' ? (
            <InstagramIcon size={50} />
          ) : (
            <LinkedinIcon size={50} />
          )}
          <span>{socialLink.platform}</span>
        </a>
      ))}
    </SocialFollowWrapper>
  );
};

export default SocialFollow;
