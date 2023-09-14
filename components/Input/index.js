import React from 'react';
import { InputWrapper } from './style';

const Input = ({ onClick, ...rest }) => {
  return <InputWrapper onClick={onClick} {...rest} />;
};

export default Input;
