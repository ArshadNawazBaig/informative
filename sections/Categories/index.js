'use client';
import React from 'react';
import useSWR from 'swr';
import CategoryCard from '@/components/CategoryCard';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import { Box } from '@/style';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CategoriesWrapper = ({}) => {
  const { data, isLoading } = useSWR('/api/categories', fetcher);
  return (
    <Box className="container">
      <Box className="row mt-sm-5 pt-5">
        <Box className="col-12 text-center py-5">
          <Box className="d-inline-grid h-100 w-100 align-items-center">
            <Heading
              title="Popular Categories"
              className="mb-2"
              main="Categories"
            ></Heading>
          </Box>
        </Box>
      </Box>
      <Box className="d-flex gap-4 flex-wrap w-100 mb-5">
        {data?.length > 0 &&
          data.map(({ name, id, img, slug }) => (
            <Box key={id} className="category-card-outer">
              <CategoryCard
                name={name}
                className={slug}
                slug={slug}
                imageUrl={img}
              />
            </Box>
          ))}
        {isLoading && (
          <Box className="text-center w-100">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </Box>
        )}
      </Box>
      <Box className="row">
        <Box className="col-12 text-center my-5">
          <NewsLetter />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoriesWrapper;
