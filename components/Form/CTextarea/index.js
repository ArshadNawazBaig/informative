import { Box } from '@/style';
import React from 'react';
import { TextareaWrapper } from './style';

function CustomTextarea({ value, onChange, placeholder, name, error }) {
  return (
    <TextareaWrapper className="custom-textarea">
      <textarea
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
      ></textarea>
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </TextareaWrapper>
  );
}

export default CustomTextarea;
