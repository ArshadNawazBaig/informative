import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const PUT = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'User not authenticated' }, { status: 401 })
    );
  }

  try {
    const body = await req.json();

    const { socialLinks } = body;
    const updatedSocialLinks = await Promise.all(
      socialLinks.map(async (link) => {
        const existingSocialLink = await prisma.socialLink.findUnique({
          where: {
            platform: link.platform,
            userEmail: session.user.email,
          },
        });

        if (existingSocialLink) {
          const updatedLink = await prisma.socialLink.update({
            where: { id: existingSocialLink.id },
            data: {
              url: link.url,
            },
          });

          return updatedLink;
        } else {
          const createdLink = await prisma.socialLink.create({
            data: {
              platform: link.platform,
              url: link.url,
              userEmail: session.user.email,
            },
          });

          return createdLink;
        }
      })
    );

    return new NextResponse(
      JSON.stringify(updatedSocialLinks, { status: 200 })
    );
  } catch (error) {
    // Handle errors
    return new NextResponse(
      JSON.stringify({ message: error.message }, { status: 500 })
    );
  }
};
