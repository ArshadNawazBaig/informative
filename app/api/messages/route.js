import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const message = await prisma.message.create({
      data: { ...body },
    });

    return new NextResponse(JSON.stringify(message, { status: 200 }));
  } catch (error) {
    // console.log(error);
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
