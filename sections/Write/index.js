'use client';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Box } from '@/style';
import CategoryDropdown from '@/components/Form/CDropdown';
import CustomInput from '@/components/Form/CInput';
import CustomTextarea from '@/components/Form/CTextarea';
import CustomFileUpload from '@/components/Form/CUpload';
import CustomEditor from '@/components/Froala';

const categories = [
  'Category 1',
  'Category 2',
  'Category 3',
  // Add more categories as needed
];

// Define the validation schema
const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  // content: yup.string().required('Content is required'),
  featuredImage: yup.mixed().required('Featured image is required'),
});

function WriteWrapper() {
  const [selectedCategory, setSelectedCategory] = useState('');
  // Initialize the useForm hook with the resolver
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="row">
          <Box className="col-md-12">
            <h5>Create a New Post</h5>
          </Box>
          <Box className="col-md-12 mb-3">
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CustomInput
                  name="title"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Title"
                  error={errors.title}
                />
              )}
            />
          </Box>
          <Box className="col-md-12 mb-3">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CustomTextarea
                  name="description"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Description"
                  error={errors.description}
                />
              )}
            />
          </Box>
          <Box className="col-md-12 mb-3">
            <h6>Category</h6>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CategoryDropdown
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={(category) => {
                    field.onChange(category);
                    handleCategoryChange(category);
                  }}
                  error={errors.category}
                />
              )}
            />
          </Box>
          <Box className="col-md-12 mb-3">
            <CustomEditor />
          </Box>
          {/* Add other form fields and error handling as needed */}
          <Box className="col-md-12 mb-3">
            <h6>Featured Image</h6>
            <Controller
              name="featuredImage"
              control={control}
              defaultValue={null} // Initialize with null for file input
              render={({ field }) => (
                <CustomFileUpload
                  onChange={field.onChange}
                  error={errors.featuredImage}
                />
              )}
            />
          </Box>
          <Box className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default WriteWrapper;
