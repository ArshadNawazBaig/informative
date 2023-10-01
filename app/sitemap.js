export default async function sitemap() {
  const getAllAuthors = async () => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.log('error');
    }

    return res.json();
  };
  const authors = await getAllAuthors();
  const authorsUrls =
    authors.map((author) => {
      return {
        url: `${process.env.NEXTAUTH_URL}/author/${author.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
      };
    }) ?? [];
  const getAllPosts = async (page, perPage) => {
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
        changeFrequency: 'monthly',
      };
    }) ?? [];
  return [
    {
      url: process.env.NEXTAUTH_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${process.env.NEXTAUTH_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${process.env.NEXTAUTH_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${process.env.NEXTAUTH_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${process.env.NEXTAUTH_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${process.env.NEXTAUTH_URL}/write`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    ...postsUrls,
    ...authorsUrls,
  ];
}
