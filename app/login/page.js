'use client';
import Button from '@/components/Button';
import { Box, LoginWrapper } from '@/style';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import Loadingpage from '../loading';
import { FacebookIcon } from 'next-share';
import { useTheme } from '@/context/ThemeProvider';
import { GmailIcon, LogoDark, LogoLight } from '@/components/Icons';
import Image from 'next/legacy/image';
import GoogleImage from '@/public/icons/google.png';
import GithubImage from '@/public/icons/github.png';

const LoginPage = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { data, status } = useSession();

  if (status === 'loading') {
    return <Loadingpage />;
  }
  if (status === 'authenticated') {
    router.push('/');
  }
  // console.log(data, status);
  return (
    <LoginWrapper className="d-flex justify-content-center align-items-center h-100">
      <Box className="container overflow-hidden">
        <Box className="row row-gap-4 mt-5">
          <Box className="col-md-6 offset-md-3">
            <Box className="rounded px-5 py-5 login-form d-flex flex-column align-items-center">
              <Box className="text-center mb-3">
                {theme === 'light' ? (
                  <LogoDark className="logo" />
                ) : (
                  <LogoLight className="logo" />
                )}
              </Box>
              <Button
                className="w-100 p-0 mb-3 text-start border-none google d-flex gap-2 align-items-center"
                onClick={() => signIn('google')}
              >
                <Box className="social-icon">
                  <Image alt="test" src={GoogleImage} layout="fill" />
                </Box>
                SignIn with Google
              </Button>
              <Button
                className="w-100 p-0 mb-3 text-start border-none facebook d-flex gap-2 align-items-center"
                onClick={() => signIn('facebook')}
              >
                <FacebookIcon size={60} rounded />
                SignIn with Facebook
              </Button>
              <Button
                className="w-100 p-0 mb-3 text-start border-none github d-flex gap-2 align-items-center"
                onClick={() => signIn('github')}
              >
                <Box className="social-icon">
                  <Image
                    alt="test"
                    src={GithubImage}
                    className="bg-white"
                    layout="fill"
                  />
                </Box>
                SignIn with Github
              </Button>

              {/* <Button className="w-100 py-3 mb-3">Sign in With Facebook</Button>
              <Button className="w-100 py-3">Sign in With Github</Button> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </LoginWrapper>
  );
};

export default LoginPage;
