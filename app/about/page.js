import FeaturePostCard from '@/components/FeaturePostCard';
import Heading from '@/components/Heading';
import NewsLetter from '@/components/NewsLetter';
import Para from '@/components/Para';
import { team } from '@/data/team';
import { Box, ErrorWrapper } from '@/style';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'About Us - Informative',
  description:
    'Learn more about [Your Website Name] - who we are, our mission, and what drives us. Explore our story and vision for providing valuable content and services to our audience.',
};

const AboutPage = () => {
  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12 text-center mt-5 pt-4 pt-md-5">
          <Heading
            title="Meet everyone who made this possible"
            className="mb-2"
            main="our Team"
          ></Heading>
        </Box>
        {team?.length > 0 &&
          team.map((member) => (
            <Box className="col-sm-6 col-lg-4" key={member.id}>
              <FeaturePostCard
                title={member.name}
                className="mt-4"
                creator={member.name}
                slug={member.id}
                imageUrl={member.img}
                status={member.status}
                user
                padding="low"
                font="md"
              />
            </Box>
          ))}
        <Box className="col-12 text-center my-5">
          <NewsLetter />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
