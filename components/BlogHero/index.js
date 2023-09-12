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

const BlogHero = ({ post }) => {
  return (
    <BlogHeroWrapper>
      <ImageWrapper>
        <Image alt="test" src={post.img} layout="fill" />
      </ImageWrapper>
      <ContentWrapper>
        <Box className="d-flex flex-column align-items-start">
          <TermItem
            href={`/blog?category=${post.catSlug}`}
            className="mb-2 text-capitalize"
          >
            {post.catSlug.split('-').join(' ')}
          </TermItem>
          <Title className="text-start text-capitalize mb-3">
            {post.title}
          </Title>
        </Box>
        <Box className="text-white d-flex gap-3">
          <Link href="/">
            <Box className="avatar">
              <Image alt="test" src={post.author.image} layout="fill" />
            </Box>
          </Link>
          <Box className="text-start">
            <Box className="text-capitalize">
              <Link
                href={`/author/${post.author.id}`}
                className="text-decoration-none text-white text-capitalize"
              >
                {post.author.name}
              </Link>
            </Box>
            <Box className="d-flex date">
              <i className="ri-calendar-2-line text-capitalize"></i>
              {post.createdAt.substring(0, 10)} <span className="mx-3">/</span>{' '}
              3 mins read
            </Box>
          </Box>
        </Box>
      </ContentWrapper>
    </BlogHeroWrapper>
  );
};

export default BlogHero;
