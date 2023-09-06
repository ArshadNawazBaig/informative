import React from 'react';
import HeroSection from './Hero';
import EditorPicks from './EditorPicks';
import { Box } from '@/style';
import ScrollPosts from './ScrollPosts';

const HomeWrapper = () => {
  return (
    <>
      <HeroSection />
      <Box className="container">
        <Box className="row row-gap-4 mt-5">
          <EditorPicks />
        </Box>
        <Box className="row row-gap-4 mt-5">
          <ScrollPosts />
        </Box>
      </Box>
    </>
  );
};

export default HomeWrapper;
