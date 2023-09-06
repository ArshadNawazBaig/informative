import React from 'react';
import { Paragraph } from './style';

const Para = ({ children, className }) => {
  return <Paragraph className={className}>{children}</Paragraph>;
};

export default Para;
