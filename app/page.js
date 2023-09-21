import HomeWrapper from '@/sections/Home';
import React from 'react';

export const metadata = {
  title: 'Infomative - Your Gateway to Diverse Topics.',
  description:
    'Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!',
};

const Home = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  return <HomeWrapper page={page} />;
};

export default Home;
