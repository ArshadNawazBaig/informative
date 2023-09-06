import { Box } from '@/style';
import React from 'react';
import {
  BlogHeroWrapper,
  ContentWrapper,
  ImageWrapper,
  TermItem,
  Title,
} from './style';
import Image from 'next/legacy/image';
import Link from 'next/link';

const BlogHero = () => {
  return (
    <BlogHeroWrapper>
      <ImageWrapper>
        <Image
          alt="test"
          src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/very-petty-girl-WRotPmZiXZQ-unsplash-1000x600.jpg"
          layout="fill"
        />
      </ImageWrapper>
      <ContentWrapper>
        <Box className="d-flex flex-column align-items-start">
          <TermItem href="/" className="mb-2">
            Music
          </TermItem>
          <Title className="text-start text-capitalize mb-3">
            10 Ways To Stick To Your Exercise Routine On Vacation
          </Title>
        </Box>
        <Box className="text-white d-flex gap-3">
          <Link href="/">
            <Box className="avatar">
              <Image
                alt="test"
                src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/nora-hutton-tCJ44OIqceU-unsplash.jpg"
                layout="fill"
              />
            </Box>
          </Link>
          <Box className="text-start">
            <Box className="text-capitalize">
              <Link href="/" className="text-decoration-none text-white">
                Alice
              </Link>
            </Box>
            <Box className="d-flex date">
              <i className="ri-calendar-2-line text-capitalize"></i>
              November 18, 2021 <span className="mx-3">/</span> 3 mins read
            </Box>
          </Box>
        </Box>
      </ContentWrapper>
    </BlogHeroWrapper>
  );
};

export default BlogHero;
