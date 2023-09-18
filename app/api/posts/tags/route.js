import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  try {
    const tags = await prisma.post.findMany({
      distinct: ['tags'], // Retrieve distinct tags
      select: {
        tags: true,
      },
    });

    const uniqueTags = [...new Set(tags.flatMap((post) => post.tags))]; // Get unique tags

    return new NextResponse(JSON.stringify(uniqueTags, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
