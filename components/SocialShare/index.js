'use client';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import React from 'react';
import { SocialShareWrapper } from './style';
import { Box } from '@/style';
import Heading from '../Heading';

const SocialShare = () => {
  return (
    <SocialShareWrapper className="text-center">
      <Heading title="Share Article" size="md" className="mb-3 mt-4" />
      <Box className="d-flex gap-1 h-100 justify-content-center">
        <FacebookShareButton
          url={'https://github.com/next-share'}
          quote={
            'next-share is a social share buttons for your next React apps.'
          }
          hashtag={'#nextshare'}
        >
          <FacebookIcon size={42} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={'https://github.com/next-share'}
          title={
            'next-share is a social share buttons for your next React apps.'
          }
        >
          <TwitterIcon size={42} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={'https://github.com/next-share'}
          title={
            'next-share is a social share buttons for your next React apps.'
          }
          separator=":: "
        >
          <WhatsappIcon size={42} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={'https://github.com/next-share'}>
          <LinkedinIcon size={42} round />
        </LinkedinShareButton>
        <FacebookMessengerShareButton
          url={'https://github.com/next-share'}
          appId={''}
        >
          <FacebookMessengerIcon size={42} round />
        </FacebookMessengerShareButton>
        <TelegramShareButton
          url={'https://github.com/next-share'}
          title={
            'next-share is a social share buttons for your next React apps.'
          }
        >
          <TelegramIcon size={42} round />
        </TelegramShareButton>
        <EmailShareButton
          url={'https://github.com/next-share'}
          subject={'Next Share'}
          body="body"
        >
          <EmailIcon size={42} round />
        </EmailShareButton>
        <PinterestShareButton
          url={'https://github.com/next-share'}
          media={
            'next-share is a social share buttons for your next React apps.'
          }
        >
          <PinterestIcon size={42} round />
        </PinterestShareButton>
      </Box>
    </SocialShareWrapper>
  );
};

export default SocialShare;
