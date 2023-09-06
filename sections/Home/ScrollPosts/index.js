import CategoryList from '@/components/CategoryList';
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
      <Box className="row flex align-items-start gx-5">
        <Box className="col-md-8">
          <PostCard
            font="md"
            size="md"
            varient="ver"
            className="mb-4"
            imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ben-masora-Oy5IKUo8lZM-unsplash-1000x600.jpg"
            title="Together We Can Make The World A Better Place"
            creator="Alice"
            date="November 18, 2021"
            comments="No comments"
            category="Music"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live...
          </PostCard>
          <PostCard
            font="md"
            size="md"
            varient="ver"
            className="mb-4"
            imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/brooke-lark-atzWFItRHy8-unsplash-1000x600.jpg"
            title="Together We Can Make The World A Better Place"
            creator="Alice"
            date="November 18, 2021"
            comments="No comments"
            category="Music"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live...
          </PostCard>
          <PostCard
            font="md"
            size="md"
            varient="ver"
            className="mb-4"
            imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/mihai-stefan-658815-unsplash-1000x600.jpg"
            title="Best Dressed Girl in Fashion Industry in 2021"
            creator="Alice"
            date="November 18, 2021"
            comments="No comments"
            category="Fashion"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live...
          </PostCard>
        </Box>
        <Box className="col-md-4">
          <UserProfileCard />
          <Heading title="Featured Posts" size="md" className="mt-5"></Heading>
          <Divider />
          <FeaturePostCard className="mt-4" />
          <Heading title="Categories" size="md" className="mt-5"></Heading>
          <Divider />
          <CategoryList className="mt-4" />
        </Box>
      </Box>
    </>
  );
};

export default ScrollPosts;
