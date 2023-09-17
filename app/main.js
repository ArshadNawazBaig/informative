'use client';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import Header from '@/components/Navbar';
import { useTheme } from '@/context/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';
import { Body, MainWrapper } from '@/style';
import React, { useState } from 'react';

const Main = ({ className, children, ...rest }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Body className={className} theme={theme} {...rest}>
      <AuthProvider>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
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
