import { Box } from '@/style';
import React from 'react';
import { Heading, UserCardWrapper } from './style';
import Image from 'next/legacy/image';
import Para from '../Para';

const UserProfileCard = () => {
  return (
    <UserCardWrapper>
      <Box className="image-wrapper position-relative">
        <Image
          alt="Mountains"
          src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ben-masora-7GJr-Zxs-IY-unsplash-700x500.jpg"
          layout="responsive"
          width={1000}
          height={600}
          className="img-fluid background"
        />
      </Box>
      <Box className="bg-white rounded-circle overflow-hidden position-relative avatar-wrapper">
        <Image
          alt="Mountains"
          src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ben-masora-7GJr-Zxs-IY-unsplash-700x500.jpg"
          layout="fill"
          className="avatar"
        />
      </Box>
      <Box className="text-center mt-4">
        <Heading className="fw-semibold">Alice Qelvin</Heading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laborea aliqua.
        </Para>
      </Box>
    </UserCardWrapper>
  );
};

export default UserProfileCard;
