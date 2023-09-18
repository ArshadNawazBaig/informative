import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const author = await prisma.user.findUnique({
      where: {
        id: slug,
      },
      include: { socialLinks: true },
    });

    if (author) {
      return new NextResponse(JSON.stringify(author, { status: 200 }));
    }

    const userByEmail = await prisma.user.findUnique({
      where: {
        email: slug,
      },
      include: { socialLinks: true },
    });

    if (userByEmail) {
      return new NextResponse(JSON.stringify(userByEmail, { status: 200 }));
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
