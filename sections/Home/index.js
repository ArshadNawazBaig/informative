import React from 'react';
import HeroSection from './Hero';
import EditorPicks from './EditorPicks';
import { Box } from '@/style';
import ScrollPosts from './ScrollPosts';
import Heading from '@/components/Heading';
import SideMenu from '@/components/SideMenu';
import NewsLetter from '@/components/NewsLetter';

const getData = async (page, perPage, category) => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL
    }/api/posts?page=${page}&perPage=${perPage}&category=${category || ''}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const POST_PER_PAGE = 4;

const HomeWrapper = async ({ page, category }) => {
  const { posts, count } = await getData(page, POST_PER_PAGE, category);

  return (
    <>
      <HeroSection />
      <Box className="container overflow-hidden">
        <Box className="row row-gap-4 mt-5">
          <EditorPicks />
        </Box>
        <Box className="row row-gap-4">
          <Box className="col-12 mt-5 mb-4">
            <Heading title="Recent Posts">
              Discover the most outstanding articles in all topics of life.
            </Heading>
          </Box>
        </Box>
        <Box className="row flex align-items-start gx-5">
          <Box className="col-md-8">
            <ScrollPosts posts={posts} count={count} page={page} />
          </Box>
          <Box className="col-md-4">
            <SideMenu posts={posts} />
          </Box>
        </Box>
        <Box className="row my-5">
          <Box className="col-md-12">
            <NewsLetter />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeWrapper;
