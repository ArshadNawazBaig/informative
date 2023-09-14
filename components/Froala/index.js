// 'use client';
// import dynamic from 'next/dynamic';
// import React, { useState } from 'react';
// import parse from 'html-react-parser';
// import 'react-quill/dist/quill.snow.css';

// const ReactQuill = dynamic(import('react-quill'), {
//   ssr: true,
// });

// const modules = {
//   toolbar: [
//     [{ header: '1' }, { header: '2' }, { font: [] }],
//     [{ size: [] }],
//     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     [
//       { list: 'ordered' },
//       { list: 'bullet' },
//       { indent: '-1' },
//       { indent: '+1' },
//     ],
//     ['link', 'image', 'video'],
//     ['clean'],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
// };
// /*
//  * Quill editor formats
//  * See https://quilljs.com/docs/formats/
//  */
// const formats = [
//   'header',
//   'font',
//   'size',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'indent',
//   'link',
//   'image',
//   'video',
// ];

// export default function CustomEditor() {
//   const [value, setValue] = useState('');

//   const handleChange = (content) => {
//     console.log(content); // Check if content is being updated
//     setValue(content);
//   };
//   return (
//     <ReactQuill
//       modules={modules}
//       placeholder="compose here"
//       value={value}
//       onChange={setValue}
//       formats={formats}
//       theme="snow"
//     />
//   );
// }

import React from 'react';

const CustomEditor = () => {
  return <div>CustomEditor</div>;
};

export default CustomEditor;
