import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  try {
    const post = await prisma.post.findMany({
      where: {
        editorPick: true,
      },
      orderBy: [
        {
          views: 'desc',
        },
      ],
      take: 3,
      include: { author: true },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
