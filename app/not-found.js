import NewsLetter from '@/components/NewsLetter';
import Para from '@/components/Para';
import { Box, ErrorWrapper } from '@/style';
import Link from 'next/link';
import React from 'react';

const Page404 = () => {
  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12 text-center">
          <ErrorWrapper className="d-inline-grid h-100 w-100 align-items-center">
            <Box>
              <h1>404</h1>
              <Box className="d-flex gap-2 justify-content-center flex-column w-100">
                <Para>It looks like nothing was found at this location.</Para>
                <Link href="/">Return to Home Page</Link>
              </Box>
            </Box>
          </ErrorWrapper>
        </Box>
        <Box className="col-12 text-center my-5">
          <NewsLetter />
        </Box>
      </Box>
    </Box>
  );
};

export default Page404;
