import { Box } from '@/style';
import React from 'react';
import { HeadingWrapper, OuterWrapper, Para } from './style';

const Heading = ({ className, children, size, title, main }) => {
  return (
    <OuterWrapper className={className}>
      <Box className="position-relative">
        {main && (
          <Box className="position-absolute mx-auto w-100 main-heading-wrapper">
            <h1 className="main-heading text-uppercase">{main}</h1>
          </Box>
        )}
        <HeadingWrapper
          className="fw-semibold mb-0 position-relative z-3"
          size={size}
        >
          {title}
        </HeadingWrapper>
        {children && <Para>{children}</Para>}
      </Box>
    </OuterWrapper>
  );
};

export default Heading;
