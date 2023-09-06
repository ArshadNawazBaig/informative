import React from 'react';
import { ButtonWrapper } from './style';

const Button = ({ children, className }) => {
  return <ButtonWrapper className={className}>{children}</ButtonWrapper>;
};

export default Button;
