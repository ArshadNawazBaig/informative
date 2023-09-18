import Button from '@/components/Button';
import { Box } from '@/style';
import React from 'react';

function CustomFileUpload({ onChange, error, className, progress }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onChange(selectedFile);
  };

  return (
    <Box className={`custom-file-upload ${className}`}>
      <input
        type="file"
        className={`form-control-file d-none ${error ? 'is-invalid' : ''}`}
        accept="image/*"
        id="upload"
        onChange={handleFileChange}
      />
      <Button className="rounded p-0 border-none w-100">
        <label
          htmlFor="upload"
          className="px-3 w-100 gray-border rounded cursor-pointer d-flex align-items-center"
          style={{ height: '60px' }}
        >
          Upload Image {progress > 0 ? `(uploading ${progress})%` : ''}
        </label>
      </Button>
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </Box>
  );
}

export default CustomFileUpload;
