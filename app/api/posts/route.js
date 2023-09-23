import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');
  const category = searchParams.get('category');
  const isFeatured = searchParams.get('featured');
  const title = searchParams.get('search');
  const perPage = searchParams.get('perPage');
  const tagsString = searchParams.get('tag');
  const popular = searchParams.get('popular');

  const tags = tagsString ? tagsString.split(',') : [];

  const POSTS_PER_PAGE = parseInt(perPage);
  const query = {
    take: POSTS_PER_PAGE,
    skip: POSTS_PER_PAGE * (page - 1),
    where: {
      ...(category && { catSlug: category }),
      ...(title && { title: { contains: title } }),
      ...(isFeatured === 'true' && { isFeatured: true }),
      ...(tags.length > 0 && { tags: { hasSome: tags } }),
    },
    include: { author: true, comments: true },
    orderBy: {
      createdAt: 'desc',
    },
  };

  if (popular === 'true') {
    // Modify the query to order by views in descending order and limit to 3 posts
    query.orderBy = {
      views: 'desc',
    };
    query.take = 3;
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'User not authenticated' }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    // console.log(error);
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
