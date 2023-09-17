import { Box } from '@/style';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import Para from '../Para';
import { FeaturedCardWrapper, ImageWrapper } from './style';
import FeaturedCard from '../FeaturedCard';

const getData = async (page, perPage, isFeatured) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&perPage=${perPage}}&featured=${isFeatured}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    console.log('error');
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
      {posts?.length > 0 &&
        posts?.map(({ author, title, img, slug, className }) => (
          <FeaturedCard
            author={author}
            title={title}
            img={img}
            className={className}
            slug={slug}
            key={slug}
          />
        ))}
    </>
  );
};

export default FeaturedCardList;
