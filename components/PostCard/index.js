import React from 'react';
import {
  ContentWrapper,
  ImageWrapper,
  PostWrapper,
  TermItem,
  Title,
} from './style';
import { Box } from '@/style';
import Link from 'next/link';

const PostCard = ({ size }) => {
  return (
    <PostWrapper full={size}>
      <ImageWrapper>
        <img
          loading="lazy"
          width="700"
          height="500"
          src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ben-masora-7GJr-Zxs-IY-unsplash-700x500.jpg"
          className="attachment-rivax-medium size-rivax-medium wp-post-image"
          alt=""
          decoding="async"
          title="Ready To Go Home After The Sunset View?"
        />
      </ImageWrapper>
      <ContentWrapper>
        <Box className="d-flex flex-column align-items-center">
          <TermItem href="/">Illustration</TermItem>
          <Title>
            <Link href="/">Ready To Go Home After The Sunset View?</Link>
          </Title>
        </Box>
        <Box className="text-white d-flex justify-content-center">
          <Box className="text-capitalize">
            <span className="by">by</span>
            <Link href="/" className="text-decoration-none ms-2 text-white">
              Alice
            </Link>
          </Box>
          <Box className="date d-flex align-items-center">
            <i className="ri-calendar-2-line"></i>
            November 18, 2021
          </Box>
        </Box>
      </ContentWrapper>
    </PostWrapper>
  );
};

export default PostCard;
