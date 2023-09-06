import PostCard from '@/components/PostCard';
import { Box } from '@/style';
import React from 'react';

const Home = () => {
  return (
    <Box className="container">
      <Box className="row d-flex align-items-stretch row-gap-4">
        <Box className="col-md-8">
          <PostCard font="md" />
        </Box>
        <Box className="col-md-4">
          <Box className="row gap-4">
            <Box className="col-md-12">
              <PostCard />
            </Box>
            <Box className="col-md-12">
              <PostCard />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="row mt-4">
        <Box className="col-md-4">
          <PostCard font="md" size="full" />
        </Box>
        <Box className="col-md-4">
          <PostCard font="md" size="full" />
        </Box>
        <Box className="col-md-4">
          <PostCard font="md" size="full" />
        </Box>
      </Box>
      <Box className="row mt-4 mb-5">
        <Box className="col-md-8">
          <PostCard font="md" size="full" varient="ver" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
