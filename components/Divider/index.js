import { Box } from '@/style';
import React from 'react';
import { Wrapper } from './style';

const Divider = ({ className }) => {
  return (
    <Wrapper className={`d-flex gap-1 mt-1 ${className}`}>
      <Box className="divider divider-1"></Box>
      <Box className="divider"></Box>
      <Box className="divider"></Box>
      <Box className="divider"></Box>
    </Wrapper>
  );
};

export default Divider;
