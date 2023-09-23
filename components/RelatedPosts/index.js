import { Box } from '@/style';
import React from 'react';
// import useSWR from 'swr';
import FeaturePostCard from '../FeaturePostCard';
import Heading from '../Heading';
import Divider from '../Divider';

const getData = async (post) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts/related?tags=${post?.tags.join(
      ','
    )}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    console.log('error');
  }

  return res.json();
};

const RelatedPosts = async ({ post, targetId }) => {
  // const { data, isLoading } = useSWR(
  //   post?.tags ? `/api/posts/related?tags=${post?.tags.join(',')}` : null,
  //   fetcher
  // );

  const posts = await getData(post);
  return (
    <>
      {posts?.length > 0 && (
        <Box className="col-12">
          <Heading
            title="Related posts"
            size="md"
            className="mt-5 text-capitalize"
          ></Heading>
          <Divider />
        </Box>
      )}
      {posts?.length > 0 &&
        posts
          ?.filter((post) => post.id !== targetId)
          .map((post) => (
            <Box className="col-sm-6 col-lg-4 col-xxl-3" key={post.id}>
              <FeaturePostCard
                title={post.title}
                date={post?.createdAt?.substring(0, 10)}
                className="mt-4"
                creator={post.author}
                slug={post.slug}
                imageUrl={post.img}
                padding="low"
                font="md"
              />
            </Box>
          ))}
    </>
  );
};

export default RelatedPosts;
