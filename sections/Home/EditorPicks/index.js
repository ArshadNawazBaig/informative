import Heading from '@/components/Heading';
import Para from '@/components/Para';
import PostCard from '@/components/PostCard';
import { Box } from '@/style';
import React from 'react';

// const getData = async () => {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/picks`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     console.log('error');
//   }

//   return res.json();
// };

const EditorPicks = async ({ posts }) => {
  // const posts = await getData();
  return (
    <>
      <Box className="col-12">
        <Heading title="Editor's pick">
          Discover the most outstanding articles in all topics of life.
        </Heading>
      </Box>
      {posts?.length > 0 &&
        posts?.map((post) => (
          <Box className="col-md-4" key={post.id}>
            <PostCard
              font="md"
              size="full"
              title={post.title}
              imageUrl={post.img}
              date={post?.createdAt?.substring(0, 10)}
              slug={post?.slug}
            />
          </Box>
        ))}

      {posts?.length <= 0 && <Para className="my-3">No posts found</Para>}
    </>
  );
};

export default EditorPicks;
