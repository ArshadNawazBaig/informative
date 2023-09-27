import HomeWrapper from '@/sections/Home';
import Head from 'next/head';
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

const getPopular = async () => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts/popular?popular=true`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    console.log('error');
  }
  return res.json();
};

const getEditorPicks = async () => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts/picks?editor=true`,
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
    'Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Sports, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!',
};

const Home = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const category = searchParams.category;
  const { posts, count } = await getData(page, POST_PER_PAGE, category);
  const { posts: popular } = await getPopular(page, POST_PER_PAGE);
  const { posts: editorPicks } = await getEditorPicks(page, POST_PER_PAGE);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="MUzhURRO1S3WZus6Xb82Hrj8FvGBDey_v_tVrpjiGiQ"
        />
      </Head>
      <HomeWrapper
        posts={posts}
        count={count}
        popular={popular}
        page={page}
        editorPicks={editorPicks}
      />
    </>
  );
};

export default Home;
