import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const authors = await prisma.user.findMany();
    return new NextResponse(JSON.stringify(authors, { status: 200 }));
  } catch (error) {
    // console.log(error);
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};

export const PUT = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'User not authenticated' }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        ...body,
      },
    });

    return new NextResponse(JSON.stringify(updatedUser, { status: 200 }));
  } catch (error) {
    // Handle errors
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
