import { Box } from '@/style';
import React from 'react';
import Para from '../Para';
import Heading from '../Heading';
import Link from 'next/link';
import Divider from '../Divider';
import { FooterWrapper } from './style';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'next-share';

const Footer = () => {
  return (
    <FooterWrapper className="container mt-5 pb-4">
      <Box className="row gap-4">
        <Box className="col-md-3">
          <Link className="navbar-brand text-uppercase" href="/">
            Informative
          </Link>
          <Divider className="mb-3" />
          <Para>
            Your gateway to a world of knowledge, where curiosity meets
            inspiration.
          </Para>
          <Para className="mt-4">© 2023, All Rights Reserved.</Para>
        </Box>
        <Box className="col">
          <Heading title="Quick Links" size="md" />
          <Divider className="mb-3" />
          <Box className="mb-2">
            <Link href="/" className="footer-link">
              Home
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/about" className="footer-link">
              About
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/blog" className="footer-link">
              Blogs
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </Box>
        </Box>
        <Box className="col">
          <Heading title="Category" size="md" />
          <Divider className="mb-3" />
          <Box className="mb-2">
            <Link href="/blog?category=health" className="footer-link">
              Health
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/blog?category=typography" className="footer-link">
              Typography
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/blog?category=music" className="footer-link">
              Music
            </Link>
          </Box>
          <Box className="mb-2">
            <Link href="/blog?category=travel" className="footer-link">
              Travel
            </Link>
          </Box>
        </Box>
        <Box className="col-md-4">
          <Heading title="Follow Us" size="md" />
          <Divider className="mb-4" />
          <Box className="d-flex justify-content-between w-100 gap-3">
            <Box className="social-wrapper">
              <a
                target="blank"
                href="http://facebook.com"
                className="social facebook"
              >
                <FacebookIcon size={32} round />
                <Para>Facebook</Para>
              </a>
            </Box>
            <Box className="social-wrapper">
              <a target="blank" href="http://linkedin.com" className="social">
                <LinkedinIcon size={32} round />
                <Para>Linkedin</Para>
              </a>
            </Box>
          </Box>
          <Box className="d-flex justify-content-between w-100 gap-3 mt-3">
            <Box className="social-wrapper">
              <a target="blank" href="http://instagram.com" className="social">
                <InstagramIcon size={32} round />
                <Para>Instagram</Para>
              </a>
            </Box>
            <Box className="social-wrapper">
              <a target="blank" href="http://twitter.com" className="social">
                <TwitterIcon size={32} round />
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
