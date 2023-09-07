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
          <PostCard
            font="md"
            imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ben-masora-7GJr-Zxs-IY-unsplash-700x500.jpg"
            title="Ready To Go Home After The Sunset View?"
            creator="Alice"
            date="November 18, 2021"
            category="Illustration"
          />
        </Box>
        <Box className="col-md-4">
          <Box className="row gap-4 h-100">
            <Box className="col-md-12">
              <PostCard
                imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/benjamin-massello-BVNhd4c7rqg-unsplash-700x500.jpg"
                title="Watch Awesome Kate Manner Go Full Dancing"
                creator="Alice"
                date="November 18, 2021"
                category="Illustration"
              />
            </Box>
            <Box className="col-md-12">
              <PostCard
                imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ayo-ogunseinde-RrD8ypt8cjY-unsplash-700x500.jpg"
                title="These Fabulous Photos Will Have Astonishing"
                creator="Alice"
                date="November 18, 2021"
                category="Music"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
