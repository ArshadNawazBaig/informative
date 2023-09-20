import { Box } from '@/style';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import Para from '../Para';
import { FeaturedCardWrapper, ImageWrapper } from './style';
import { VerifiedIcon } from '../Icons';

const FeaturedCard = ({
  author,
  title,
  img,
  slug,
  className,
  len,
  onClick,
  ...rest
}) => {
  return (
    <FeaturedCardWrapper
      className={`${className} d-flex p-2 gap-3 mt-3 rounded`}
      key={slug}
      onClick={onClick}
      {...rest}
    >
      <Box>
        <ImageWrapper className="d-flex justify-content-center mx-auto mx-md-0 rounded">
          <Link href={`/author/${author.id}`}>
            <Image alt={title} src={img} layout="fill" />
          </Link>
        </ImageWrapper>
      </Box>
      <Box className="d-flex flex-column justify-content-between py-2">
        <Link
          href={`/blog/${slug}`}
          className="text-decoration-none fw-semibold"
        >
          <Para className="fs-5 lh-sm text-capitalize title">
            {title.substring(0, len || 30)}...
          </Para>
        </Link>
        <Link
          href={`/author/${author.id}`}
          className="text-decoration-none author-name"
        >
          <Para className="author-name">
            {author.name}
            {author?.verified && <VerifiedIcon width="16" className="ms-1" />}
          </Para>
        </Link>
      </Box>
    </FeaturedCardWrapper>
  );
};

export default FeaturedCard;
