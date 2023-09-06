import { Box } from '@/style';
import React from 'react';
import { HeadingWrapper, Para } from './style';

const Heading = ({ className, children, size, title }) => {
  return (
    <Box className={className}>
      <HeadingWrapper className="fw-semibold" size={size}>
        {title}
      </HeadingWrapper>
      {children && <Para>{children}</Para>}
    </Box>
  );
};

export default Heading;
