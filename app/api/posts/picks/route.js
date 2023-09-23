import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const editorPick = searchParams.get('editor');

  const query = {
    where: {
      ...(editorPick === 'true' && { editorPick: true }),
    },
    orderBy: {
      createdAt: 'desc',
    },
  };
  if (editorPick === 'true') {
    query.orderBy = {
      views: 'desc',
    };
    query.take = 3;
  }

  try {
    const [posts] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
