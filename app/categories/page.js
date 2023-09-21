'use client';
import CategoryCard from '@/components/CategoryCard';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import { Box } from '@/style';
import React from 'react';
import useSWR from 'swr';

// export const metadata = {
//   title: 'Explore Categories - Informative',
//   description:
//     'Discover a diverse range of categories on the Informative App. Explore articles, insights, and knowledge across topics like Entertainment, Health, Technology, Travel, and more.',
// };

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CategoriesPage = () => {
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
      </Box>
      <Box className="row">
        <Box className="col-12 text-center my-5">
          <NewsLetter />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoriesPage;
