import { Box } from '@/style';
import React from 'react';
import Para from '../Para';
import Heading from '../Heading';
import Link from 'next/link';
import Divider from '../Divider';
import { FooterWrapper } from './style';
import { FacebookIcon, GmailIcon, InstagramIcon, TwitterIcon } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper className="container mt-5 mb-4">
      <Box className="row">
        <Box className="col-md-3">
          <h2>Informative</h2>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </Para>
          <Para className="mt-4">© 2021, All Rights Reserved.</Para>
        </Box>
        <Box className="col">
          <Heading title="Quick Links" size="md" />
          <Divider className="mb-3" />
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              Contact
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              About
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              Blog
            </Link>
          </Box>
        </Box>
        <Box className="col">
          <Heading title="Category" size="md" />
          <Divider className="mb-3" />
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              Health
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              Typography
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              Music
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              Travel
            </Link>
          </Box>
        </Box>
        <Box className="col-md-4">
          <Heading title="Follow Us" size="md" />
          <Divider className="mb-3" />
          <Box className="d-flex justify-content-between w-100 gap-3">
            <Box className="social-wrapper">
              <a href="http://" className="social facebook">
                <FacebookIcon />
                <Para>Facebook</Para>
              </a>
            </Box>
            <Box className="social-wrapper">
              <a href="http://" className="social">
                <InstagramIcon />
                <Para>Instagram</Para>
              </a>
            </Box>
          </Box>
          <Box className="d-flex justify-content-between w-100 gap-3 mt-3">
            <Box className="social-wrapper">
              <a href="http://" className="social">
                <GmailIcon />
                <Para>Gmail</Para>
              </a>
            </Box>
            <Box className="social-wrapper">
              <a href="http://" className="social">
                <TwitterIcon />
                <Para>Twitter</Para>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
