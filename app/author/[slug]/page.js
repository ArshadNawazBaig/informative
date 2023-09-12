import CategoryList from '@/components/CategoryList';
import Divider from '@/components/Divider';
import FeaturePostCard from '@/components/FeaturePostCard';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import SocialFollow from '@/components/SocialFollow';
import TagsList from '@/components/TagsList';
import UserProfileCard from '@/components/UserProfileCard';
import ScrollPosts from '@/sections/Home/ScrollPosts';
import { Box } from '@/style';
import { notFound } from 'next/navigation';
import React from 'react';

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const getAuthorPosts = async (page, perPage, email) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/authors/posts/?page=${page}&perPage=${perPage}&slug=${email}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const POST_PER_PAGE = 3;

const AuthorPage = async ({ params, searchParams }) => {
  const { slug } = params;
  const page = parseInt(searchParams.page) || 1;
  const author = await getData(slug);
  const { posts, count } = await getAuthorPosts(
    page,
    POST_PER_PAGE,
    author?.email
  );

  if (!author) {
    return notFound();
  }

  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12">
          <UserProfileCard
            coverImage="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/mihai-stefan-658815-unsplash-1000x600.jpg"
            avatarImage={author?.image}
            creator={author?.name}
            description={author?.description}
            size="full"
          />
        </Box>
        <Box className="col-12 mt-5 mb-4">
          <Heading title="Author's Recent Posts">
            Discover the most outstanding articles in all topics of life.
          </Heading>
        </Box>
      </Box>
      <Box className="row flex align-items-start gx-5">
        <Box className="col-md-8">
          <ScrollPosts posts={posts} count={count} page={page} />
        </Box>
        <Box className="col-md-4">
          <Heading title="Follow Me" size="md" className=""></Heading>
          <Divider />
          <SocialFollow className="mt-4" />
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

export default AuthorPage;
