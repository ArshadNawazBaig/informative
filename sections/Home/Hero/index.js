import PostCard from '@/components/PostCard';
import { Box } from '@/style';
import React from 'react';

const HeroSection = () => {
  return (
    <Box className="container">
      <Box
        className="row d-flex align-items-stretch row-gap-4"
        style={{ minHeight: '60vh' }}
      >
        <Box className="col-md-8">
          <PostCard font="md" />
        </Box>
        <Box className="col-md-4">
          <Box className="row gap-4 h-100">
            <Box className="col-md-12">
              <PostCard />
            </Box>
            <Box className="col-md-12">
              <PostCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
