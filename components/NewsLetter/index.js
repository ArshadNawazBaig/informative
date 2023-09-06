import React from 'react';
import Heading from '../Heading';
import { NewsLetterWrapper } from './style';
import { Box } from '@/style';

const NewsLetter = () => {
  return (
    <NewsLetterWrapper>
      <Box className="row g-5 align-items-center">
        <Box className="col-md-6">
          <Heading title="Subscribe to our newsletter and stay updated." />
        </Box>
        <Box className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </Box>
      </Box>
    </NewsLetterWrapper>
  );
};

export default NewsLetter;
