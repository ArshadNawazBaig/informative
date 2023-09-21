'use client';
import { Box } from '@/style';
import React from 'react';
import useSWR from 'swr';
import FeaturePostCard from '../FeaturePostCard';
import Heading from '../Heading';
import Divider from '../Divider';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RelatedPosts = async ({ post, targetId }) => {
  const { data, isLoading } = useSWR(
    post?.tags ? `/api/posts/related?tags=${post?.tags.join(',')}` : null,
    fetcher
  );
  return (
    <>
      {data?.length > 0 && (
        <Box className="col-12">
          <Heading
            title="Related posts"
            size="md"
            className="mt-5 text-capitalize"
          ></Heading>
          <Divider />
        </Box>
      )}
      {data?.length > 0 &&
        data
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
