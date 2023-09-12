import CategoryList from '@/components/CategoryList';
import Divider from '@/components/Divider';
import FeaturePostCard from '@/components/FeaturePostCard';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import TagsList from '@/components/TagsList';
import ScrollPosts from '@/sections/Home/ScrollPosts';
import { Box } from '@/style';
import React from 'react';

const getData = async (page, perPage, category, tag) => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL
    }/api/posts?page=${page}&perPage=${perPage}&category=${
      category || ''
    }&tag=${tag || ''}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const POST_PER_PAGE = 4;

const BlogPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category, tag } = searchParams;
  const { posts, count } = await getData(page, POST_PER_PAGE, category, tag);
  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12">
          <Heading
            title={`Browse ${category ? 'Category' : 'Tag'} - ${
              category ? category : tag
            }`}
            className="mt-4 mb-4 text-capitalize"
          ></Heading>
        </Box>
      </Box>
      <Box className="row flex align-items-start gx-5">
        <Box className="col-md-8">
          <ScrollPosts page={page} posts={posts} count={count} tag={tag} />
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
          <TagsList />
        </Box>
      </Box>
      <Box className="row">
        <NewsLetter className="my-5" />
      </Box>
    </Box>
  );
};

export default BlogPage;
