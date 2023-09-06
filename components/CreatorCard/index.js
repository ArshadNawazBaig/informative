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

const CreatorCard = () => {
  return (
    <CreatorCardWrapper>
      <Box className="row align-items-center row-gap-4">
        <Box className="col-md-2">
          <ImageWrapper className="d-flex justify-content-center mx-auto mx-md-0">
            <Link href="/">
              <Image
                alt="test"
                src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/very-petty-girl-WRotPmZiXZQ-unsplash-1000x600.jpg"
                layout="fill"
              />
            </Link>
          </ImageWrapper>
        </Box>
        <Box className="col-md-10">
          <Box className="d-flex justify-content-between w-100 align-items-baseline">
            <Box className="">
              <h3>WRITTEN BY</h3>
              <Heading size="md" className="mb-3" title="Alice" />
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
            <Para>
              My name is Alice, I am so happy, my dear friend, so absorbed in
              the exquisite sense of mere tranquil existence, that I neglect my
              talents. I should be incapable of drawing a single stroke at the
              present moment; and yet I feel that I never was a greater artist
              than now.
            </Para>
          </Box>
        </Box>
      </Box>
    </CreatorCardWrapper>
  );
};

export default CreatorCard;
