import React from 'react';
import { Paragraph } from './style';

const Para = ({ children, className, ...rest }) => {
  return (
    <Paragraph {...rest} className={className}>
      {children}
    </Paragraph>
  );
};

export default Para;
