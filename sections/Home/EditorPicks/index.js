import Heading from '@/components/Heading';
import PostCard from '@/components/PostCard';
import { Box } from '@/style';
import React from 'react';

const EditorPicks = () => {
  return (
    <>
      <Box className="col-12">
        <Heading title="Editor's pick">
          Discover the most outstanding articles in all topics of life.
        </Heading>
      </Box>
      <Box className="col-md-4">
        <PostCard
          font="md"
          size="full"
          title="What It Takes to Live in the World of Denial and Fear"
          imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/noah-buscher-1-kPytLsVkY-unsplash-400x600.jpg"
          date="November 18, 2021"
        />
      </Box>
      <Box className="col-md-4">
        <PostCard
          font="md"
          size="full"
          imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/nantu-das-08SgCUfxSoE-unsplash-400x600.jpg"
          date="November 18, 2021"
          title="This Is My Favourite Fashion That I Watching"
        />
      </Box>
      <Box className="col-md-4">
        <PostCard
          font="md"
          size="full"
          imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/divine-effiong-ovMPeGM3W-s-unsplash-400x600.jpg"
          date="November 18, 2021"
          title="How to Keep Work and Personal Life Apart"
        />
      </Box>
    </>
  );
};

export default EditorPicks;
