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
import { VerifiedIcon, ViewsIcon } from '../Icons';
import { shortenNumber } from '@/utils/helpers';

const PostCard = ({
  size,
  font,
  varient,
  className,
  title,
  children,
  imageUrl,
  creator,
  date,
  comments,
  category,
  key,
  slug,
  views,
}) => {
  return (
    <Wrapper className={className} key={key}>
      <PostWrapper full={size} varient={varient}>
        <Box className="views">
          <ViewsIcon />{' '}
          <Box className="count">
            {shortenNumber(views || 0)} {views}
          </Box>
        </Box>
        <ImageWrapper>
          <Image alt={title} src={imageUrl} layout="fill" />
        </ImageWrapper>
        <ContentWrapper>
          <Box
            className={`d-flex flex-column ${
              varient ? 'align-items-baseline' : 'align-items-center'
            }`}
          >
            {category && (
              <TermItem href={`/blog?category=${category.toLowerCase()}`}>
                {category.split('-').join(' ')}
              </TermItem>
            )}
            <Title font={font} className={varient && 'text-start'}>
              <Link href={`/blog/${slug}`} className="text-capitalize">
                {title}
              </Link>
            </Title>
          </Box>
          {!varient && (
            <Box className="text-white d-flex justify-content-center flex-wrap">
              {!size && (
                <Box className="text-capitalize">
                  <span className="by">by</span>
                  <Link
                    href={`/author/${creator?.id}`}
                    className="text-decoration-none ms-2 text-white text-capitalize"
                  >
                    {creator?.name.trim()}
                    {creator?.verified && (
                      <VerifiedIcon width="16" className="ms-1" />
                    )}
                  </Link>
                </Box>
              )}
              <Box className={`d-flex align-items-center ${!size && 'date'}`}>
                <i className="ri-calendar-2-line"></i>
                {date}
              </Box>
            </Box>
          )}
        </ContentWrapper>
      </PostWrapper>
      {varient === 'ver' && (
        <Box className="text-center mt-4">
          <Box className="d-flex justify-content-center flex-wrap mb-2 flex-wrap">
            <Box className="text-capitalize">
              <span className="by">by</span>
              <AuthorLink
                href={`/author/${creator?.id}`}
                className="text-decoration-none ms-2"
              >
                {creator?.name}
                {creator?.verified && (
                  <VerifiedIcon width="16" className="ms-1" />
                )}
              </AuthorLink>
            </Box>
            <Box className={`d-flex align-items-center date`}>
              <i className="ri-calendar-2-line"></i>
              {date}
            </Box>
            <Box className={`d-flex align-items-center date`}>
              <i className="ri-calendar-2-line"></i>
              {comments}
            </Box>
          </Box>
          <Box>
            <Para>{children}</Para>
          </Box>
          <Link href={`/blog/${slug}`}>
            <Button className="mt-4">Read More</Button>
          </Link>
        </Box>
      )}
    </Wrapper>
  );
};

export default PostCard;
