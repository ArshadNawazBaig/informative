'use client';
import Link from 'next/link';
import React from 'react';
import { ListWrapper } from './style';

const categories = [
  { id: 1, name: 'Entertainment', value: 15 },
  { id: 2, name: 'Health', value: 16 },
  { id: 3, name: 'Illustration', value: 19 },
  { id: 4, name: 'Life Style', value: 10 },
  { id: 5, name: 'Music', value: 12 },
  { id: 6, name: 'Technology', value: 18 },
  { id: 7, name: 'Travel', value: 18 },
  { id: 8, name: 'Typography', value: 8 },
];

const CategoryList = ({ className }) => {
  return (
    <ListWrapper className={className}>
      {categories.map((category) => (
        <Link
          href="/"
          className="d-flex w-full justify-content-between py-4"
          key={category.id}
        >
          <span>{category.name}</span>
          <span>{category.value}</span>
        </Link>
      ))}
    </ListWrapper>
  );
};

export default CategoryList;
