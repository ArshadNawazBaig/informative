import Heading from '@/components/Heading';
import PostCard from '@/components/PostCard';
import { Box } from '@/style';
import React from 'react';

const EditorPicks = () => {
  return (
    <>
      <Box className="col-12">
        <Heading />
      </Box>
      <Box className="col-md-4">
        <PostCard font="md" size="full" />
      </Box>
      <Box className="col-md-4">
        <PostCard font="md" size="full" />
      </Box>
      <Box className="col-md-4">
        <PostCard font="md" size="full" />
      </Box>
      {/* <Box className="row mt-4 mb-5">
        <Box className="col-md-8">
          <PostCard font="md" size="md" varient="ver" />
        </Box>
      </Box> */}
    </>
  );
};

export default EditorPicks;
