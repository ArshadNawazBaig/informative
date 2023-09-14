import Button from '@/components/Button';
import { Box } from '@/style';
import React from 'react';

function CustomFileUpload({ onChange, error }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onChange(selectedFile);
  };

  return (
    <Box className="custom-file-upload">
      <input
        type="file"
        className={`form-control-file d-none ${error ? 'is-invalid' : ''}`}
        accept="image/*"
        id="upload"
        onChange={handleFileChange}
      />
      <Button className="rounded p-0 border-none">
        <label
          htmlFor="upload"
          className="p-2 gray-border rounded cursor-pointer"
        >
          Upload
        </label>
      </Button>
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </Box>
  );
}

export default CustomFileUpload;
