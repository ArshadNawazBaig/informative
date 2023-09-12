'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Navbar';
import { useTheme } from '@/context/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';
import { Body, MainWrapper } from '@/style';
import React from 'react';

const Main = ({ className, children }) => {
  const { theme } = useTheme();
  return (
    <Body className={className} theme={theme}>
      <AuthProvider>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </AuthProvider>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossOrigin="anonymous"
        async
      ></script>
    </Body>
  );
};

export default Main;
