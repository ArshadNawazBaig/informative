import HomeWrapper from '@/sections/Home';
import React from 'react';

const getData = async (page, perPage, category) => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL
    }/api/posts?page=${page}&perPage=${perPage}&category=${category || ''}`,
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

export const metadata = {
  title: 'Infomative - Your Gateway to Diverse Topics.',
  description:
    'Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!',
};

const Home = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const category = searchParams.category;
  const { posts, count } = await getData(page, POST_PER_PAGE, category);
  return <HomeWrapper posts={posts} count={count} page={page} />;
};

export default Home;
