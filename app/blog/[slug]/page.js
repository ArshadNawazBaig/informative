import BlogHero from '@/components/BlogHero';
import CreatorCard from '@/components/CreatorCard';
import Divider from '@/components/Divider';
import FeaturePostCard from '@/components/FeaturePostCard';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import SocialShare from '@/components/SocialShare';
import { Box } from '@/style';
import Head from 'next/head';
import React from 'react';
import { notFound } from 'next/navigation';
import Comments from '@/components/Comments';
import SideMenu from '@/components/SideMenu';
import Para from '@/components/Para';
import TagChip from '@/components/TagChip';
import _ from 'lodash';
import RelatedPosts from '@/components/RelatedPosts';

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('error');
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  try {
    const blog = await getData(params.slug);
    return {
      title: `${_.capitalize(blog?.title.trim())} - Informative`,
      description: blog?.desc,
    };
  } catch (error) {
    return {
      title: 'Our Blog - Stay Informed and Inspired || Informative',
      description:
        'Explore our blog for the latest articles and insights on a variety of topics. Stay informed and inspired with our expertly written blog posts.',
    };
  }
}

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  if (!post) {
    return notFound();
  }
  return (
    <>
      <Head>
        <meta property="og:image" content={post?.img} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.desc} />
      </Head>
      <Box className="container">
        <Box className="row gx-md-5">
          <Box className="col-12">
            <BlogHero post={post} />
          </Box>
          <Box className="col-12 mt-4 mb-4">
            <SocialShare
              url={`https://informative-eta.vercel.app/blog/${post?.slug}`}
              title={_.capitalize(post?.title?.trim())}
              quote={post?.desc}
              media={post?.img}
              tags={post?.tags}
            />
          </Box>
          <Box className="col-12 col-md-8 mt-4 mb-4">
            <Para className="mb-4" style={{ fontSize: '17px' }}>
              {post?.desc}
            </Para>
            <Box
              className="content-wrapper"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            ></Box>
            {post?.tags?.length > 0 && (
              <>
                <Heading title="Tags" size="md" className="mb-3"></Heading>
                <Box className="d-flex flex-wrap gap-2 mb-5">
                  {post?.tags.map((tag) => (
                    <TagChip tag={tag} key={tag} />
                  ))}
                </Box>
              </>
            )}
            <Comments postSlug={post?.slug} />
          </Box>
          <Box className="col-12 col-md-4 mt-4 mb-4">
            <SideMenu />
          </Box>
        </Box>
        <Box className="row">
          <Box className="col-12">
            <CreatorCard
              imageUrl={post?.author?.image}
              author={post?.author?.name}
              description={`${post?.author?.description.substring(0, 300)}...`}
              id={post?.author?.id}
              verified={post?.author?.verified}
              socialLinks={
                post?.author?.socialLinks?.length > 0 &&
                post?.author?.socialLinks
              }
            />
          </Box>
          {post && <RelatedPosts post={post} targetId={post?.id} />}
          <Box className="col-md-12 my-5">
            <NewsLetter />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogPost;
