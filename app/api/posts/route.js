import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');
  const category = searchParams.get('category');
  const perPage = searchParams.get('perPage');

  const POSTS_PER_PAGE = parseInt(perPage);
  const query = {
    take: POSTS_PER_PAGE,
    skip: POSTS_PER_PAGE * (page - 1),
    where: {
      ...(category && { catSlug: category }),
    },
    include: { author: true },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
