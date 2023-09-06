import { Box } from '@/style';
import React from 'react';
import { Wrapper } from './style';

const Divider = () => {
  return (
    <Wrapper className="d-flex gap-1">
      <Box className="divider divider-1"></Box>
      <Box className="divider"></Box>
      <Box className="divider"></Box>
      <Box className="divider"></Box>
    </Wrapper>
  );
};

export default Divider;
