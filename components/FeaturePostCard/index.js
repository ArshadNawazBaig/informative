import { Box } from '@/style';
import React from 'react';
import { CardWrapper, ImageWrapper, Title } from './style';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Para from '../Para';

const FeaturePostCard = ({ className }) => {
  return (
    <Box className={className}>
      <CardWrapper>
        <ImageWrapper>
          <Image
            alt="Mountains"
            src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/ben-masora-7GJr-Zxs-IY-unsplash-700x500.jpg"
            layout="fill"
          />
        </ImageWrapper>
      </CardWrapper>
      <Box className="pt-4 px-3">
        <Title>
          <Link href="/">Ready To Go Home After The Sunset View?</Link>
        </Title>
        <Para>November 17, 2021</Para>
      </Box>
    </Box>
  );
};

export default FeaturePostCard;
