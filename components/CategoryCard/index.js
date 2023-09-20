import { Box } from '@/style';
import React from 'react';
import { CategoryCardWrapper } from './style';
import ImageUrl from '@/public/icons/github.png';
import Image from 'next/legacy/image';
import Para from '../Para';
import Link from 'next/link';

const CategoryCard = ({ name, className, slug }) => {
  return (
    <Link href={`/blog?category=${slug}`} className="text-decoration-none">
      <CategoryCardWrapper
        className={`${className} d-flex align-items-center  gap-2`}
      >
        <Box className="avatar">
          <Image alt="test" src={`/categories/${slug}.png`} layout="fill" />
        </Box>
        <Para className="fw-semibold text-capitalize">{name}</Para>
      </CategoryCardWrapper>
    </Link>
  );
};

export default CategoryCard;
