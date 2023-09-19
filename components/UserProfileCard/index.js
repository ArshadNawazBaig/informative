'use client';
import { Box } from '@/style';
import React, { useState } from 'react';
import { Heading, UserCardWrapper } from './style';
import Image from 'next/legacy/image';
import Para from '../Para';
import { UploaderWrapper } from '../Form/CUpload/style';
import { EditIcon } from '../Icons';
import CustomTextarea from '../Form/CTextarea';
import Button from '../Button';

const UserProfileCard = ({
  avatarImage,
  coverImage,
  creator,
  description,
  size,
  edit,
  onChange,
  onChangeProfile,
  desc,
  onDescChange,
  onUpdate,
  descEdit,
  setDescEdit,
}) => {
  return (
    <UserCardWrapper>
      <Box className="image-wrapper position-relative">
        <Image
          alt={description}
          src={
            coverImage ||
            'https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/mihai-stefan-658815-unsplash-1000x600.jpg'
          }
          layout="responsive"
          width={1000}
          height={600}
          className="img-fluid background"
        />
        {edit && (
          <UploaderWrapper className="edit">
            <Box className="rounded p-0 border-none w-100 uploader">
              <label
                htmlFor="upload"
                className="px-3 w-100 rounded cursor-pointer d-flex align-items-center"
                style={{ height: '60px' }}
              >
                <EditIcon />
              </label>
              <input
                onChange={onChange}
                type="file"
                id="upload"
                className="d-none"
              />
            </Box>
          </UploaderWrapper>
        )}
      </Box>
      <Box className="bg-white rounded-circle position-relative avatar-wrapper">
        <Image
          alt={description}
          src={avatarImage}
          layout="fill"
          className="avatar"
        />
        {edit && (
          <UploaderWrapper className="edit-profile">
            <Box className="rounded p-0 border-none w-100 uploader">
              <label
                htmlFor="upload-profile"
                className="px-2 w-100 rounded cursor-pointer d-flex align-items-center"
                style={{ height: '40px' }}
              >
                <EditIcon />
              </label>
              <input
                onChange={onChangeProfile}
                type="file"
                id="upload-profile"
                className="d-none"
              />
            </Box>
          </UploaderWrapper>
        )}
      </Box>
      <Box className="text-center mt-4">
        <Heading className="fw-semibold">{creator}</Heading>
        <Box className={size === 'full' && 'half-width'}>
          <Box>
            {edit && (
              <EditIcon
                className="cursor-pointer"
                onClick={() => setDescEdit(!descEdit)}
              />
            )}
            {!descEdit && <Para className="mt-3">{desc || description}</Para>}
          </Box>
          {edit && descEdit && (
            <>
              <CustomTextarea
                name="description"
                value={desc || ''}
                onChange={onDescChange}
                placeholder="Description"
                className="mt-4 mb-2"
              />
              <Button onClick={onUpdate}>Update</Button>
            </>
          )}
        </Box>
      </Box>
    </UserCardWrapper>
  );
};

export default UserProfileCard;
