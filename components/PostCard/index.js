import React from 'react';
import {
  AuthorLink,
  ContentWrapper,
  ImageWrapper,
  PostWrapper,
  TermItem,
  Title,
  Wrapper,
} from './style';
import { Box } from '@/style';
import Link from 'next/link';
import Button from '../Button';
import Image from 'next/legacy/image';
import Para from '../Para';

const PostCard = ({ size, font, varient, className }) => {
  return (
    <Wrapper className={className}>
      <PostWrapper full={size} varient={varient}>
        <ImageWrapper>
          <Image
            alt="Mountains"
            src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ben-masora-7GJr-Zxs-IY-unsplash-700x500.jpg"
            layout="fill"
          />
        </ImageWrapper>
        <ContentWrapper>
          <Box
            className={`d-flex flex-column ${
              varient ? 'align-items-baseline' : 'align-items-center'
            }`}
          >
            <TermItem href="/">Illustration</TermItem>
            <Title font={font} className={varient && 'text-start'}>
              <Link href="/">Ready To Go Home After The Sunset View?</Link>
            </Title>
          </Box>
          {!varient && (
            <Box className="text-white d-flex justify-content-center">
              {!size && (
                <Box className="text-capitalize">
                  <span className="by">by</span>
                  <Link
                    href="/"
                    className="text-decoration-none ms-2 text-white"
                  >
                    Alice
                  </Link>
                </Box>
              )}
              <Box className={`d-flex align-items-center ${!size && 'date'}`}>
                <i className="ri-calendar-2-line"></i>
                November 18, 2021
              </Box>
            </Box>
          )}
        </ContentWrapper>
      </PostWrapper>
      {varient === 'ver' && (
        <Box className="text-center mt-4">
          <Box className="d-flex justify-content-center mb-2 flex-wrap">
            <Box className="text-capitalize">
              <span className="by">by</span>
              <AuthorLink href="/" className="text-decoration-none ms-2">
                Alice
              </AuthorLink>
            </Box>
            <Box className={`d-flex align-items-center date`}>
              <i className="ri-calendar-2-line"></i>
              November 18, 2021
            </Box>
            <Box className={`d-flex align-items-center date`}>
              <i className="ri-calendar-2-line"></i>
              No comments
            </Box>
          </Box>
          <Box>
            <Para>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live...
            </Para>
          </Box>
          <Button className="mt-4">Read More</Button>
        </Box>
      )}
    </Wrapper>
  );
};

export default PostCard;
