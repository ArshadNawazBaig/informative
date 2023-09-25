export default async function sitemap() {
  const getAllPosts = async (page, perPage, category) => {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&perPage=${perPage}`,
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      console.log('error');
    }
    return res.json();
  };

  const { posts } = await getAllPosts(1, 10000);
  const postsUrls =
    posts.map((post) => {
      return {
        url: `${process.env.NEXTAUTH_URL}/blog/${post.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];
  return [
    {
      url: process.env.NEXTAUTH_URL,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXTAUTH_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXTAUTH_URL}/categories`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXTAUTH_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXTAUTH_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXTAUTH_URL}/write`,
      lastModified: new Date(),
    },
    ...postsUrls,
  ];
}
