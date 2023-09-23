import React from 'react';
import HeroSection from './Hero';
import EditorPicks from './EditorPicks';
import { Box } from '@/style';
import ScrollPosts from './ScrollPosts';
import Heading from '@/components/Heading';
import SideMenu from '@/components/SideMenu';
import NewsLetter from '@/components/NewsLetter';

const HomeWrapper = async ({ page, posts, count, popular, editorPicks }) => {
  return (
    <>
      <HeroSection posts={popular} />
      <Box className="container overflow-hidden">
        <Box className="row row-gap-4 mt-5">
          <EditorPicks posts={editorPicks} />
        </Box>
        <Box className="row row-gap-4">
          <Box className="col-12 mt-5 mb-4">
            <Heading title="Recent Posts">
              Discover the most outstanding articles in all topics of life.
            </Heading>
          </Box>
        </Box>
        <Box className="row flex align-items-start gx-md-5">
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
