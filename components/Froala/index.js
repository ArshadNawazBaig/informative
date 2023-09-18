'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { EditorWrapper } from './style';
import { Box } from '@/style';

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

function Editor({ error, onChange, value, className, ...rest }) {
  return (
    <EditorWrapper>
      <ReactQuill
        {...rest}
        modules={modules}
        placeholder="Type your content here..."
        value={value}
        onChange={onChange}
        formats={formats}
        className={`form-control px-0 overflow-hidden py-0 ${className} ${
          error ? 'is-invalid' : ''
        }`}
        theme="snow"
      />
      {error && <Box className="invalid-feedback">{error.message}</Box>}
    </EditorWrapper>
  );
}

export default Editor;
