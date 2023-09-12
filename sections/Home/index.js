import React from 'react';
import HeroSection from './Hero';
import EditorPicks from './EditorPicks';
import { Box } from '@/style';
import ScrollPosts from './ScrollPosts';

const HomeWrapper = ({ page }) => {
  return (
    <>
      <HeroSection />
      <Box className="container overflow-hidden">
        <Box className="row row-gap-4 mt-5">
          <EditorPicks />
        </Box>
        <ScrollPosts page={page} />
      </Box>
    </>
  );
};

export default HomeWrapper;
