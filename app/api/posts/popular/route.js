import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const popular = searchParams.get('popular');
  const query = {
    where: {},
    include: { author: true },
    orderBy: {
      createdAt: 'desc',
    },
  };

  if (popular === 'true') {
    query.orderBy = {
      views: 'desc',
    };
    query.take = 3;
  }

  try {
    const [posts] = await prisma.$transaction([prisma.post.findMany(query)]);
    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
