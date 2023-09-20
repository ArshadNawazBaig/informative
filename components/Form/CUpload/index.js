import Button from '@/components/Button';
import { Box } from '@/style';
import React from 'react';
import { UploaderWrapper } from './style';

function CustomFileUpload({ onChange, error, className, progress }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onChange(selectedFile);
  };

  return (
    <UploaderWrapper className={`custom-file-upload ${className}`}>
      <input
        type="file"
        className={`form-control-file d-none ${error ? 'is-invalid' : ''}`}
        accept="image/*"
        id="upload"
        onChange={handleFileChange}
      />
      <Box className="rounded p-0 border-none w-100 uploader">
        <label
          htmlFor="upload"
          className="px-3 w-100 gray-border rounded cursor-pointer d-flex align-items-center"
          style={{ height: '60px' }}
        >
          Upload your own image{' '}
          {progress > 0 && progress < 100 ? `(uploading ${progress})%` : ''}
        </label>
      </Box>
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </UploaderWrapper>
  );
}

export default CustomFileUpload;
