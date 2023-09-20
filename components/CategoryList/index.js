import Link from 'next/link';
import React from 'react';
import { ListWrapper } from './style';
import { RightArrow } from '../Icons';

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('error');
  }
  return res.json();
};

const CategoryList = async ({ className }) => {
  const categories = await getData();
  return (
    <ListWrapper className={className}>
      {categories.length > 0 &&
        categories?.slice(0, 5).map((category) => (
          <Link
            href={`/blog?category=${category.slug}`}
            className="d-flex w-full justify-content-between py-4 text-capitalize"
            key={category.id}
          >
            <span>{category.name}</span>
            <span>
              <RightArrow />
            </span>
          </Link>
        ))}
      {categories?.length > 5 && (
        <Link
          href="/categories"
          className="border-none text-center d-block w-100 text-blue mt-4"
        >
          See {categories?.length} more categories
        </Link>
      )}
    </ListWrapper>
  );
};

export default CategoryList;
