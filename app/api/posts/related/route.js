import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const tagsString = searchParams.get('tags');
  const tags = tagsString ? tagsString.split(',') : [];

  try {
    const posts = await prisma.post.findMany({
      where: {
        tags: {
          hasSome: tags,
        },
      },
      take: 5,
      include: {
        author: true,
      },
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
