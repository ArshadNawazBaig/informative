import PostCard from '@/components/PostCard';
import { Box } from '@/style';
import React from 'react';

const HeroSection = async ({ posts }) => {
  return (
    <Box className="container">
      <Box
        className="row d-flex align-items-stretch row-gap-4"
        style={{ minHeight: '60vh' }}
      >
        <Box className="col-md-8">
          <PostCard
            font="md"
            imageUrl={posts && posts[0]?.img}
            title={posts && posts[0]?.title}
            creator={posts && posts[0]?.author}
            date={posts && posts[0]?.createdAt.substring(0, 10)}
            // comments={posts && posts[0]?.comments?.length}
            category={posts && posts[0]?.catSlug}
            slug={posts && posts[0]?.slug}
            views={posts && posts[0]?.views}
            catSlug={posts && posts[0]?.catSlug}
          />
        </Box>
        <Box className="col-md-4">
          <Box className="row gap-4 h-100">
            <Box className="col-md-12">
              <PostCard
                imageUrl={posts && posts[1]?.img}
                title={posts && posts[1]?.title}
                creator={posts && posts[1]?.author}
                date={posts && posts[1]?.createdAt.substring(0, 10)}
                // comments={posts && posts[1]?.comments?.length}
                category={posts && posts[1]?.catSlug}
                slug={posts && posts[1]?.slug}
                views={posts && posts[1]?.views}
                catSlug={posts && posts[1]?.catSlug}
              />
            </Box>
            <Box className="col-md-12">
              <PostCard
                imageUrl={posts && posts[2]?.img}
                title={posts && posts[2]?.title}
                creator={posts && posts[2]?.author}
                date={posts && posts[2]?.createdAt.substring(0, 10)}
                // comments={posts && posts[2]?.comments?.length}
                category={posts && posts[2]?.catSlug}
                slug={posts && posts[2]?.slug}
                views={posts && posts[2]?.views}
                catSlug={posts && posts[2]?.catSlug}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
