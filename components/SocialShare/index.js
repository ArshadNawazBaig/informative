'use client';
import {
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

const SocialShare = ({ url, title, media, quote, tags }) => {
  const result = tags.map((tag) => `#${tag}`).join(',');
  return (
    <SocialShareWrapper className="text-center">
      <Heading title="Share Article" size="md" className="mb-3 mt-4" />
      <Box className="d-flex gap-1 h-100 justify-content-center">
        <FacebookShareButton url={url} quote={quote} hashtag={result}>
          <FacebookIcon size={42} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={42} round />
        </TwitterShareButton>
        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={42} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={42} round />
        </LinkedinShareButton>
        <FacebookMessengerShareButton url={url} appId={''}>
          <FacebookMessengerIcon size={42} round />
        </FacebookMessengerShareButton>
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={42} round />
        </TelegramShareButton>
        <PinterestShareButton url={url} media={media}>
          <PinterestIcon size={42} round />
        </PinterestShareButton>
      </Box>
    </SocialShareWrapper>
  );
};

export default SocialShare;
