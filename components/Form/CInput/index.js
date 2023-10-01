import { Box } from '@/style';
import React, { forwardRef } from 'react';
import { InputWrapper } from './style';

const CustomInput = forwardRef((props, ref) => {
  const { value, onChange, placeholder, name, error, className, ...rest } =
    props;

  return (
    <InputWrapper className="custom-input w-100">
      <input
        type="text"
        className={`form-control ${className} ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
        {...rest}
      />
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </InputWrapper>
  );
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;
