'use client';
import { Box } from '@/style';
import React from 'react';
import { CreatorCardWrapper, ImageWrapper } from './style';
import Image from 'next/legacy/image';
import Heading from '../Heading';
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'next-share';
import Para from '../Para';
import Link from 'next/link';
import { VerifiedIcon } from '../Icons';

const CreatorCard = ({
  author,
  imageUrl,
  description,
  id,
  socialLinks,
  verified,
}) => {
  return (
    <CreatorCardWrapper>
      <Box className="row align-items-center row-gap-4">
        <Box className="col-md-3 col-lg-2">
          <ImageWrapper className="d-flex justify-content-center mx-auto mx-md-0 ">
            <Link href={`/author/${id}`}>
              <Image alt={description} src={imageUrl} layout="fill" />
            </Link>
          </ImageWrapper>
        </Box>
        <Box className="col-md-9 col-lg-10">
          <Box className="d-flex justify-content-between w-100 align-items-baseline flex-wrap creator-content">
            <Box className="inner">
              <h3>WRITTEN BY</h3>
              <h4 className="author-name">
                {author}
                {verified && <VerifiedIcon width="20" className="ms-1" />}
              </h4>
            </Box>
            {socialLinks.length > 0 && (
              <Box className="d-flex gap-1 align-items-center social-wrapper">
                {socialLinks.length > 0 &&
                  socialLinks
                    ?.filter(
                      (socialLink) =>
                        socialLink.url && socialLink.url.length > 0
                    )
                    .map((socialLink) => (
                      <a
                        href={socialLink.url}
                        className={`social ${socialLink.platform} w-100`}
                        key={socialLink.id}
                      >
                        {socialLink.platform === 'twitter' ? (
                          <TwitterIcon size={32} round />
                        ) : socialLink.platform === 'facebook' ? (
                          <FacebookIcon size={32} round />
                        ) : socialLink.platform === 'instagram' ? (
                          <InstagramIcon size={32} round />
                        ) : socialLink.platform === 'whatsapp' ? (
                          <WhatsappIcon size={32} round />
                        ) : (
                          <LinkedinIcon size={32} round />
                        )}
                      </a>
                    ))}
              </Box>
            )}
          </Box>
          <Box>
            <Para className="description">
              {description}{' '}
              <Link href={`/author/${id}`} className="read-more ms-1">
                Read more
              </Link>
            </Para>
          </Box>
        </Box>
      </Box>
    </CreatorCardWrapper>
  );
};

export default CreatorCard;
