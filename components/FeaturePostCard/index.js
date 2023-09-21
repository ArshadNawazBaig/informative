import { Box } from '@/style';
import React from 'react';
import { AuthorLink, CardWrapper, ImageWrapper, Outer, Title } from './style';
import Image from 'next/legacy/image';
import Link from 'next/link';

const FeaturePostCard = ({
  className,
  title,
  imageUrl,
  date,
  padding,
  font,
  creator,
  slug,
}) => {
  return (
    <Outer className={className}>
      <CardWrapper>
        <ImageWrapper>
          <Image alt={title} src={imageUrl} layout="fill" />
        </ImageWrapper>
      </CardWrapper>
      <Box className={padding === 'low' ? 'px-1 pt-2' : 'pt-4 px-3'}>
        <Title font={font}>
          <Link href={`/blog/${slug}`}>{title.substring(0, 40)}...</Link>
        </Title>
        <Box className="d-flex mb-2 flex-wrap">
          <Box className="text-capitalize">
            <AuthorLink
              href={`/author/${creator.id}`}
              className="text-decoration-none"
            >
              {creator.name}
            </AuthorLink>
          </Box>
          <Box className={`d-flex align-items-center date`}>
            <i className="ri-calendar-2-line"></i>
            {date}
          </Box>
        </Box>
      </Box>
    </Outer>
  );
};

export default FeaturePostCard;
