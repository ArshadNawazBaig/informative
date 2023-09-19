import { Box } from '@/style';
import React from 'react';
import { Heading, UserCardWrapper } from './style';
import Image from 'next/legacy/image';
import Para from '../Para';
import { UploaderWrapper } from '../Form/CUpload/style';
import { EditIcon } from '../Icons';

const UserProfileCard = ({
  avatarImage,
  coverImage,
  creator,
  description,
  size,
  edit,
  onChange,
  onChangeProfile,
}) => {
  return (
    <UserCardWrapper>
      <Box className="image-wrapper position-relative">
        <Image
          alt={description}
          src={coverImage}
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
          <Para>{description}</Para>
        </Box>
      </Box>
    </UserCardWrapper>
  );
};

export default UserProfileCard;
