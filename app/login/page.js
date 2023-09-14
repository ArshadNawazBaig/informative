'use client';
import Button from '@/components/Button';
import { Box, LoginWrapper } from '@/style';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import Loadingpage from '../loading';

const LoginPage = () => {
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
            <Box className="rounded px-5 py-5 login-form">
              <Button
                className="w-100 py-3 mb-3"
                onClick={() => signIn('google')}
              >
                Sign in With Google
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
