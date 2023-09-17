import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title');

  const query = {
    where: {
      ...(title && { title: { contains: title } }),
    },
    include: { author: true },
  };

  try {
    const posts = await prisma.post.findMany(query);
    const count = posts.length;

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
