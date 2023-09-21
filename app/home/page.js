import Heading from '@/components/Heading';
import SideMenu from '@/components/SideMenu';
import HomeWrapper from '@/sections/Home';
import EditorPicks from '@/sections/Home/EditorPicks';
import ScrollPosts from '@/sections/Home/ScrollPosts';
import { Box } from '@/style';
import React from 'react';

export const metadata = {
  title: 'Infomative - Your Gateway to Diverse Topics',
  description:
    'Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!',
};

const getData = async (page, perPage, category) => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL
    }/api/posts?page=${page}&perPage=${perPage}&category=${category || ''}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.log('error');
  }
  return res.json();
};

const POST_PER_PAGE = 4;

const Home = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const category = searchParams.category;
  const { posts, count } = await getData(page, POST_PER_PAGE, category);
  return (
    <Box className="container overflow-hidden">
      <Box className="row row-gap-4 mt-5">
        <EditorPicks />
      </Box>
      <Box className="row row-gap-4">
        <Box className="col-12 mt-5 mb-4">
          <Heading title="Recent Posts">
            Discover the most outstanding articles in all topics of life.
          </Heading>
        </Box>
      </Box>
      <Box className="row flex align-items-start gx-md-5">
        <Box className="col-md-8">
          <ScrollPosts posts={posts} count={count} page={page} />
        </Box>
        <Box className="col-md-4">
          <SideMenu posts={posts} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
