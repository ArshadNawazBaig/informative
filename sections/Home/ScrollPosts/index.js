import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import React from 'react';

const POST_PER_PAGE = 4;

const ScrollPosts = async ({ page, posts, count, category, tag }) => {
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
            comments={comments?.length || 'No comments'}
            category={catSlug}
            slug={slug}
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
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      )}
    </>
  );
};

export default ScrollPosts;
