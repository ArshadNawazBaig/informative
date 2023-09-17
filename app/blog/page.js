import CategoryList from '@/components/CategoryList';
import Divider from '@/components/Divider';
import FeaturedCardList from '@/components/FeaturedCardList';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import TagsList from '@/components/TagsList';
import ScrollPosts from '@/sections/Home/ScrollPosts';
import { Box } from '@/style';
import React from 'react';

const getData = async (page, perPage, category, tag, search) => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL
    }/api/posts?page=${page}&perPage=${perPage}&search=${search}&category=${
      category || ''
    }&tag=${tag || ''}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    console.log('error');
  }
  return res.json();
};

const POST_PER_PAGE = 4;

const BlogPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category, tag, search } = searchParams;
  const { posts, count } = await getData(
    page,
    POST_PER_PAGE,
    category,
    tag,
    search
  );

  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12">
          <Heading
            title={`${search ? 'Search' : 'Browse'} ${
              category ? 'Category' : tag ? 'Tag' : ''
            } - ${category ? category : tag ? tag : search}`}
            className="mt-4 mb-4 text-capitalize"
          ></Heading>
        </Box>
      </Box>
      <Box className="row flex align-items-start gx-md-5">
        <Box className="col-md-8">
          <ScrollPosts
            page={page}
            posts={posts}
            count={count}
            tag={tag}
            category={category}
            search={search}
          />
        </Box>
        <Box className="col-md-4">
          <Heading title="Featured Posts" size="md" className=""></Heading>
          <Divider className="mb-4" />
          <FeaturedCardList />
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
