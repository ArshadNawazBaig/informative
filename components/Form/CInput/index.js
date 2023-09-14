import { Box } from '@/style';
import React from 'react';
import { InputWrapper } from './style';

function CustomInput({ value, onChange, placeholder, name, error }) {
  return (
    <InputWrapper className="custom-input">
      <input
        type="text"
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </InputWrapper>
  );
}

export default CustomInput;
