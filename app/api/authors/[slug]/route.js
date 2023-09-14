import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    // const author = await prisma.user.findUnique({
    //   where: {
    //     id: slug,
    //     // OR: [{ id: slug }, { email: slug }],
    //   },
    // });
    // return new NextResponse(JSON.stringify(author, { status: 200 }));

    const author = await prisma.user.findUnique({
      where: {
        id: slug, // Check for id match
      },
    });

    if (author) {
      return new NextResponse(JSON.stringify(author, { status: 200 }));
    }

    // If not found by ID, try to find a user by email
    const userByEmail = await prisma.user.findUnique({
      where: {
        email: slug, // Check for email match
      },
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
