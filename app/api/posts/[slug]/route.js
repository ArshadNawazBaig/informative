import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    // First, retrieve the post based on its slug
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    });

    if (!existingPost) {
      return new NextResponse(
        JSON.stringify({ message: 'Post not found' }, { status: 404 })
      );
    }

    const updatedPost = await prisma.post.update({
      where: { id: existingPost.id },
      data: { views: existingPost.views + 1 },
      include: {
        author: {
          include: {
            socialLinks: true,
          },
        },
      },
    });

    return new NextResponse(JSON.stringify(updatedPost, { status: 200 }));
  } catch (error) {
    // Handle any errors that may occur
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
