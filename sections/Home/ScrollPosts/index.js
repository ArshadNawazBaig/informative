import CategoryList from '@/components/CategoryList';
import Divider from '@/components/Divider';
import FeaturePostCard from '@/components/FeaturePostCard';
import Heading from '@/components/Heading';
import PostCard from '@/components/PostCard';
import UserProfileCard from '@/components/UserProfileCard';
import { Box } from '@/style';
import React from 'react';

const getData = async (page) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const ScrollPosts = async ({ page }) => {
  const { posts, count } = await getData(page);
  console.log(posts);
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
          {posts?.map(
            ({ _id, img, title, catSlug, comments, createdAt, author }) => (
              <PostCard
                key={_id}
                font="md"
                size="md"
                varient="ver"
                className="mb-4"
                imageUrl={img}
                title={title}
                creator={author?.name}
                date={createdAt.substring(0, 10)}
                comments={comments?.length || 'No comments'}
                category={catSlug}
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live...
              </PostCard>
            )
          )}
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
