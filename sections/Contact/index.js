'use client';
import NewsLetter from '@/components/NewsLetter';
import { Box } from '@/style';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from '@/components/Form/CInput';
import Button from '@/components/Button';
import CustomTextarea from '@/components/Form/CTextarea';
import Heading from '@/components/Heading';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactWrapper = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    const response = await fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setSuccess(true);
      setLoading(false);
      reset();
    } else {
      setError(true);
      setLoading(false);
      reset();
    }
  };

  return (
    <Box className="container">
      <Box className="row my-sm-5 pt-5">
        <Box className="col-12 text-center py-5">
          <Box>
            <Heading main="Contact" title="Get In Touch With Us"></Heading>
          </Box>
        </Box>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="row">
          <Box className="col-12 col-md-8 offset-md-2">
            <Box className="row row-gap-4">
              <Box className="col-12 col-md-6">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <CustomInput
                      name="name"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Your Name"
                      error={errors.name}
                    />
                  )}
                />
              </Box>
              <Box className="col-12 col-md-6">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <CustomInput
                      name="email"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Your Email"
                      error={errors.email}
                    />
                  )}
                />
              </Box>
              <Box className="col-12">
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <CustomTextarea
                      name="message"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Your Message"
                      error={errors.message}
                    />
                  )}
                />
              </Box>
            </Box>
            <Box className="col-md-12">
              {success && (
                <div
                  class={`alert alert-success fade mt-4 ${success && 'show'}`}
                  role="alert"
                >
                  Your message has been successfully sent, we will get back to
                  asap.
                </div>
              )}
              {error && (
                <div
                  class={`alert alert-danger fade mt-4 ${error && 'show'}`}
                  role="alert"
                >
                  Something went wrong.
                </div>
              )}
              <Button
                type="submit"
                className="mt-4 py-3 px-5 rounded w-100 w-md-auto"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Submit'}
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
      <Box className="row mt-5">
        <Box className="col-12 text-center my-5">
          <NewsLetter />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactWrapper;
