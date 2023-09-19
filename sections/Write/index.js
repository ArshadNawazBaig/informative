'use client';
import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Box, TagInputWrapper, WriteOuterWrapper } from '@/style';
import CategoryDropdown from '@/components/Form/CDropdown';
import CustomInput from '@/components/Form/CInput';
import CustomTextarea from '@/components/Form/CTextarea';
import CustomFileUpload from '@/components/Form/CUpload';
import CustomEditor from '@/components/Froala';
import Loadingpage from '@/app/loading';
import { useSession } from 'next-auth/react';
import Button from '@/components/Button';
import useSWR from 'swr';
import ReactTagInput from '@pathofdev/react-tag-input';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '@/utils/firebase';
import Image from 'next/legacy/image';
import { slugify } from '@/utils/helpers';
import { useRouter } from 'next/navigation';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  content: yup.string().required('Content is required'),
  featuredImage: yup.mixed().required('Featured image is required'),
});

const storage = getStorage(app);

function WriteWrapper() {
  const { data: categories, mutate } = useSWR(`/api/categories`, fetcher);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [progress, setProgress] = useState(0);
  const [media, setMedia] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [tags, setTags] = useState([]);
  const { data, status } = useSession();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + featuredImage.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, featuredImage);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    featuredImage && upload();
  }, [featuredImage]);

  const onSubmit = async (data) => {
    const { title, description, category, content } = data;
    const formData = {
      slug: slugify(title),
      title: title.toLowerCase(),
      img: media,
      desc: description,
      content,
      catSlug: category,
      tags,
    };
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      router.push(`/blog/${slugify(title)}`);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (status === 'loading') {
    return <Loadingpage />;
  }
  if (status === 'unthenticated') {
    router.push('/');
  }

  return (
    <WriteOuterWrapper className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="row">
          <Box className="col-md-12">
            <h5>Create a New Post</h5>
          </Box>
          <Box className="col-md-8 mb-3">
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
                  className="my-4"
                />
              )}
            />
            <Controller
              name="content"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CustomEditor
                  name="content"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Content"
                  error={errors.content}
                />
              )}
            />
          </Box>
          <Box className="col-md-4 mb-3">
            <Controller
              name="featuredImage"
              control={control}
              defaultValue={null} // Initialize with null for file input
              render={({ field }) => (
                <CustomFileUpload
                  onChange={(file) => {
                    field.onChange(file);
                    setFeaturedImage(file);
                  }}
                  error={errors.featuredImage}
                  className="mb-4"
                  progress={progress}
                />
              )}
            />
            {featuredImage && (
              <Box className="d-flex justify-content-center mx-auto mx-md-0 rounded image-wrapper mb-4">
                <Image
                  alt="featured"
                  src={URL.createObjectURL(featuredImage)}
                  layout="fill"
                />
              </Box>
            )}
            <Controller
              name="tags"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TagInputWrapper className="mb-4">
                  <ReactTagInput
                    placeholder="Type tag name and enter"
                    tags={tags}
                    onChange={(newTags) => setTags(newTags)}
                  />
                </TagInputWrapper>
              )}
            />
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CategoryDropdown
                  categories={categories || []}
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

          <Box className="col-md-12">
            <Button
              disabled={isLoading}
              className="rounded-1 mt-2"
              style={{ height: '60px' }}
            >
              {isLoading ? 'Loading...' : 'Publish your Article'}
            </Button>
          </Box>
        </Box>
      </form>
    </WriteOuterWrapper>
  );
}

export default WriteWrapper;
