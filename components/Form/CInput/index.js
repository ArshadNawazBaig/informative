import { Box } from '@/style';
import React from 'react';
import { InputWrapper } from './style';

function CustomInput({
  value,
  onChange,
  placeholder,
  name,
  error,
  className,
  ...rest
}) {
  return (
    <InputWrapper className="custom-input w-100">
      <input
        type="text"
        className={`form-control ${className} ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </InputWrapper>
  );
}

export default CustomInput;
