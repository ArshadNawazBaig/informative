import { Box } from '@/style';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import Para from '../Para';
import { FeaturedCardWrapper, ImageWrapper } from './style';

const getData = async (page, perPage, isFeatured) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&perPage=${perPage}}&featured=${isFeatured}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const FeaturedCardList = async () => {
  const page = 1;
  const perPage = 5;
  const isFeatured = true;
  const { posts } = await getData(page, perPage, isFeatured);
  return (
    <>
      {posts.length > 0 &&
        posts?.map(({ author, title, img, slug, className }) => (
          <FeaturedCardWrapper
            className={`${className} d-flex p-2 gap-3 mt-3 rounded`}
          >
            <Box>
              <ImageWrapper className="d-flex justify-content-center mx-auto mx-md-0 rounded">
                <Link href={`/author/${author.id}`}>
                  <Image alt={title} src={img} layout="fill" />
                </Link>
              </ImageWrapper>
            </Box>
            <Box className="d-flex flex-column justify-content-between py-2">
              <Link
                href={`/blog/${slug}`}
                className="text-decoration-none fw-semibold"
              >
                <Para className="fs-5 lh-sm">{title.substring(0, 30)}...</Para>
              </Link>
              <Link
                href={`/author/${author.id}`}
                className="text-decoration-none"
              >
                <Para className="author-name">{author.name}</Para>
              </Link>
            </Box>
          </FeaturedCardWrapper>
        ))}
    </>
  );
};

export default FeaturedCardList;
