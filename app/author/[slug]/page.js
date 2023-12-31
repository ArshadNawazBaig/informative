import CategoryList from '@/components/CategoryList';
import Divider from '@/components/Divider';
import FeaturedCardList from '@/components/FeaturedCardList';
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
    console.log('error');
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  try {
    const author = await getData(params.slug);

    if (!author) {
      return {
        title: 'Not Found',
        description: 'The page you are looking for is not found.',
      };
    }

    return {
      title: author?.name,
      description: author?.description || '',
      alternates: {
        canonical: `/author/${author?.id}`,
      },
    };
  } catch (error) {
    return {
      title: 'Author',
      description: 'Authors description',
    };
  }
}

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
            coverImage={author && author?.coverImage}
            avatarImage={author && author?.image}
            creator={author && author?.name}
            description={author && author?.description}
            size="full"
            verified={author && author?.verified}
          />
        </Box>
        <Box className="col-12 mt-5 mb-4">
          <Heading title="Author's Recent Posts">
            Discover the most outstanding articles in all topics of life.
          </Heading>
        </Box>
      </Box>
      <Box className="row flex align-items-start gx-md-5">
        <Box className="col-md-8">
          <ScrollPosts posts={posts} count={count} page={page} />
          {posts?.length <= 0 && (
            <Heading
              title="You don't have any posts!"
              size="md"
              className=""
            ></Heading>
          )}
        </Box>
        <Box className="col-md-4">
          {author?.socialLinks?.length > 0 &&
            author?.socialLinks[0]?.url?.length > 0 && (
              <>
                <Heading title="Follow Me" size="md"></Heading>
                <Divider className="mb-3" />
                <SocialFollow
                  socialLinks={author?.socialLinks}
                  className="mb-4"
                />
              </>
            )}
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

export default AuthorPage;
