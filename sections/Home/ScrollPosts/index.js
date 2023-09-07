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
        <Box className="col-12 mt-5 mb-4">
          <Heading title="Recent Posts">
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
          <UserProfileCard
            coverImage="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/elementor/thumbs/jon-tyson-sPim6Y8Wa7Y-unsplash-phfym1jjso3ao2hs4gsti4upoeqf3273k1ath2fkk0.jpg"
            avatarImage="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/nora-hutton-tCJ44OIqceU-unsplash.jpg"
            creator="Alice Qelvin"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea aliqua."
          />
          <Heading title="Featured Posts" size="md" className="mt-5"></Heading>
          <Divider />
          <FeaturePostCard
            title="These Fabulous Photos Will Have Astonishing"
            date="November 17, 2021"
            className="mt-4"
            creator="Alice"
            imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/benjamin-massello-BVNhd4c7rqg-unsplash-400x300.jpg"
          />
          <Heading title="Categories" size="md" className="mt-5"></Heading>
          <Divider />
          <CategoryList className="mt-4" />
        </Box>
      </Box>
    </>
  );
};

export default ScrollPosts;
