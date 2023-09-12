import React from 'react';
import { ButtonWrapper } from './style';

const Button = ({ children, className, onClick, ...rest }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
