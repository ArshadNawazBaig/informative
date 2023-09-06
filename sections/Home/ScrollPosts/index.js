import Divider from '@/components/Divider';
import FeaturePostCard from '@/components/FeaturePostCard';
import Heading from '@/components/Heading';
import PostCard from '@/components/PostCard';
import UserProfileCard from '@/components/UserProfileCard';
import { Box } from '@/style';
import React from 'react';

const ScrollPosts = () => {
  return (
    <>
      <Box className="row">
        <Box className="col-12">
          <Heading title="Editor's pick">
            Discover the most outstanding articles in all topics of life.
          </Heading>
        </Box>
      </Box>
      <Box className="row flex align-items-start">
        <Box className="col-md-8">
          <PostCard font="md" size="md" varient="ver" className="mb-4" />
          <PostCard font="md" size="md" varient="ver" className="mb-4" />
          <PostCard font="md" size="md" varient="ver" className="mb-4" />
        </Box>
        <Box className="col-md-4">
          <UserProfileCard />
          <Heading title="Featured Posts" size="md" className="mt-4"></Heading>
          <Divider />
          <FeaturePostCard className="mt-4" />
          <Heading title="Categories" size="md" className="mt-4"></Heading>
          <Divider />
        </Box>
      </Box>
    </>
  );
};

export default ScrollPosts;
