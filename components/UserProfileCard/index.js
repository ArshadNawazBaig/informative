import { Box } from '@/style';
import React from 'react';
import { Heading, UserCardWrapper } from './style';
import Image from 'next/legacy/image';
import Para from '../Para';

const UserProfileCard = ({
  avatarImage,
  coverImage,
  creator,
  description,
  size,
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
      </Box>
      <Box className="bg-white rounded-circle overflow-hidden position-relative avatar-wrapper">
        <Image
          alt={description}
          src={avatarImage}
          layout="fill"
          className="avatar"
        />
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
