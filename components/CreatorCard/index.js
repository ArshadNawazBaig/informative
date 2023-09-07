'use client';
import { Box } from '@/style';
import React from 'react';
import { CreatorCardWrapper, ImageWrapper } from './style';
import Image from 'next/legacy/image';
import Heading from '../Heading';
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'next-share';
import Para from '../Para';
import Link from 'next/link';

const CreatorCard = ({ author, imageUrl, description }) => {
  return (
    <CreatorCardWrapper>
      <Box className="row align-items-center row-gap-4">
        <Box className="col-md-3 col-lg-2">
          <ImageWrapper className="d-flex justify-content-center mx-auto mx-md-0">
            <Link href={`/author/${author}`}>
              <Image alt={description} src={imageUrl} layout="fill" />
            </Link>
          </ImageWrapper>
        </Box>
        <Box className="col-md-9 col-lg-10">
          <Box className="d-flex justify-content-between w-100 align-items-baseline">
            <Box className="">
              <h3>WRITTEN BY</h3>
              <Heading size="md" className="mb-3" title={author} />
            </Box>
            <Box className="d-flex gap-1 align-items-center social-wrapper">
              <a href="http://" className="social">
                <TwitterIcon size={32} round />
              </a>
              <a href="http://" className="social">
                <FacebookIcon size={32} round />
              </a>
              <a href="http://" className="social">
                <InstagramIcon size={32} round />
              </a>
              <a href="http://" className="social">
                <LinkedinIcon size={32} round />
              </a>
              <a href="http://" className="social">
                <EmailIcon size={32} round />
              </a>
            </Box>
          </Box>
          <Box>
            <Para>{description}</Para>
          </Box>
        </Box>
      </Box>
    </CreatorCardWrapper>
  );
};

export default CreatorCard;
