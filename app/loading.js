import { Box, LoadingWrapper } from '@/style';
import React from 'react';

const Loadingpage = () => {
  return (
    <LoadingWrapper className="d-flex align-items-center justify-content-center">
      <Box className="container">
        <Box className="row">
          <Box className="col-12 text-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </Box>
        </Box>
      </Box>
    </LoadingWrapper>
  );
};

export default Loadingpage;
