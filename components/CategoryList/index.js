import Link from 'next/link';
import React from 'react';
import { ListWrapper } from './style';
import { RightArrow } from '../Icons';

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const CategoryList = async ({ className }) => {
  const categories = await getData();
  return (
    <ListWrapper className={className}>
      {categories.length > 0 &&
        categories?.map((category) => (
          <Link
            href={`/blog?category=${category.slug}`}
            className="d-flex w-full justify-content-between py-4"
            key={category.id}
          >
            <span>{category.name}</span>
            <span>
              <RightArrow />
            </span>
          </Link>
        ))}
    </ListWrapper>
  );
};

export default CategoryList;
