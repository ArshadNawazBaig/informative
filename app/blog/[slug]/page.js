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

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('error');
  }

  return res.json();
};

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  if (!post) {
    return notFound();
  }
  return (
    <>
      <Head>
        <meta property="og:image" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
      </Head>
      <Box className="container">
        <Box className="row gx-md-5">
          <Box className="col-12">
            <BlogHero post={post} />
          </Box>
          <Box className="col-12 mt-4 mb-4">
            <SocialShare
              url="https://informative-ivory.vercel.app/"
              title={post.title}
              quote={post.desc}
              media={post.img}
            />
          </Box>
          <Box className="col-12 col-md-8 mt-4 mb-4">
            <Para className="mb-4" style={{ fontSize: '17px' }}>
              {post.desc}
            </Para>
            <Box
              className="content-wrapper"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            ></Box>
            {post?.tags && (
              <>
                <Heading title="Tags" size="md" className="mb-3"></Heading>
                <Box className="d-flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <TagChip tag={tag} key={tag} />
                  ))}
                </Box>
              </>
            )}

            <Comments postSlug={post.slug} />
          </Box>
          <Box className="col-12 col-md-4 mt-4 mb-4">
            <SideMenu />
          </Box>
        </Box>
        <Box className="row">
          <Box className="col-12">
            <CreatorCard
              imageUrl={post.author.image}
              author={post.author.name}
              description={`${post.author.description.substring(0, 300)}...`}
              id={post.author.id}
            />
          </Box>
          <Box className="col-12">
            <Heading
              title="Related posts"
              size="md"
              className="mt-5 text-capitalize"
            ></Heading>
            <Divider />
          </Box>
          {[1, 2, 3, 4].map((item) => (
            <Box className="col-md-6 col-lg-3" key={item}>
              <FeaturePostCard
                title="These Fabulous Photos Will Have Astonishing"
                date="November 17, 2021"
                className="mt-4"
                creator="Alice"
                imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/benjamin-massello-BVNhd4c7rqg-unsplash-400x300.jpg"
                padding="low"
                font="md"
              />
            </Box>
          ))}
          <Box className="col-md-12 my-5">
            <NewsLetter />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogPost;
