import Heading from '@/components/Heading';
import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import React from 'react';

const POST_PER_PAGE = 4;

const ScrollPosts = async ({ page, posts, count, category, tag, search }) => {
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <>
      {posts?.map(
        ({
          _id,
          img,
          title,
          catSlug,
          comments,
          createdAt,
          author,
          slug,
          desc,
          views,
        }) => (
          <PostCard
            key={_id}
            font="md"
            size="md"
            varient="ver"
            className="mb-4"
            imageUrl={img}
            title={title}
            creator={author}
            date={createdAt.substring(0, 10)}
            comments={comments?.length}
            category={catSlug}
            slug={slug}
            views={views}
            catSlug={catSlug}
          >
            {desc.substring(0, 160)}...
          </PostCard>
        )
      )}
      {(hasNext || hasPrev) && (
        <Pagination
          page={page}
          category={category}
          tag={tag}
          search={search}
          hasNext={hasNext}
          hasPrev={hasPrev}
          className="mb-4"
        />
      )}
      {posts.length <= 0 && (
        <Heading title="No posts found!" size="md"></Heading>
      )}
    </>
  );
};

export default ScrollPosts;
