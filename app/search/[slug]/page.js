import CategoryList from '@/components/CategoryList';
import Divider from '@/components/Divider';
import FeaturePostCard from '@/components/FeaturePostCard';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import PostCard from '@/components/PostCard';
import TagChip from '@/components/TagChip';
import { Box } from '@/style';
import React from 'react';

const SearchPage = () => {
  const tags = [
    'Art',
    'Article',
    'Audio',
    'Drink',
    'Fashion',
    'featured 1',
    'featured 2',
    'featured 3',
    'featured 4',
    'featured 5',
    'featured 6',
    'featured 7',
    'Flower',
    'Food',
    'Habit',
    'Home',
  ];
  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12">
          <Heading
            title="Search Result's"
            className="mt-4 mb-4 text-capitalize"
          ></Heading>
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
          <Heading title="Featured Posts" size="md" className=""></Heading>
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
          <Heading title="Tags" size="md" className="mt-4"></Heading>
          <Divider className="mb-4" />
          <Box className="d-flex gap-1 flex-wrap">
            {tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="row">
        <NewsLetter className="my-5" />
      </Box>
    </Box>
  );
};

export default SearchPage;
