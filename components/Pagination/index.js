'use client';
import { Box } from '@/style';
import React from 'react';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const Pagination = ({ page, hasNext, hasPrev, category, tag, className }) => {
  const router = useRouter();
  return (
    <Box className={`${className} d-flex justify-content-between`}>
      <Button
        className="rounded"
        disabled={!hasPrev}
        onClick={() =>
          router.push(
            `?category=${category || ''}&tag=${tag || ''}&page=${page - 1}`
          )
        }
      >
        Prev Page
      </Button>
      <Button
        className="rounded"
        disabled={!hasNext}
        onClick={() =>
          router.push(
            `?category=${category || ''}&tag=${tag || ''}&page=${page + 1}`
          )
        }
      >
        Next Page
      </Button>
    </Box>
  );
};

export default Pagination;
