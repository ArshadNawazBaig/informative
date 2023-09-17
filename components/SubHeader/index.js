import { Box } from '@/style';
import Link from 'next/link';
import React from 'react';
import { SubHeaderWrapper } from './style';
import { SearchIcon } from '../Icons';

const categories = [
  { id: 1, title: 'Travel', link: '/blog?category=travel' },
  { id: 2, title: 'Entertainment', link: '/blog?category=entertainment' },
  { id: 3, title: 'Health', link: '/blog?category=health' },
  { id: 4, title: 'Music', link: '/blog?category=music' },
  { id: 5, title: 'Technology', link: '/blog?category=technology' },
  { id: 6, title: 'Photography', link: '/blog?category=photography' },
];

const SubHeader = () => {
  return (
    <SubHeaderWrapper>
      <Box className="container">
        <Box className="row">
          <Box className="col-12">
            <Box className="d-flex align-items-center justify-content-between">
              <Box className="gap-4 sub-header-links d-none d-md-flex">
                {categories.map((category) => (
                  <Link href={category.link} key={category.id}>
                    {category.title}
                  </Link>
                ))}
              </Box>
              <SearchIcon
                className="cursor-pointer search-icon"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
