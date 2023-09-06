import React from 'react';
import { ButtonWrapper } from './style';

const Button = ({ children, className, onClick }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
