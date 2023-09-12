'use client';
import React, { useState } from 'react';
import { Navbar, StyledButton } from './style';
import { useTheme } from '@/context/ThemeProvider';
import { Box } from '@/style';
import Link from 'next/link';
import { CloseIcon, MenuIcon, MoonIcon, SearchIcon, SunIcon } from '../Icons';
import Divider from '../Divider';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/legacy/image';

function Header(args) {
  const { data, status } = useSession();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className={`navbar navbar-expand-lg mb-4`}>
      <Box className="container">
        <Link className="navbar-brand text-uppercase fw-medium" href="/">
          Informative
          <Divider />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <Box
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Contact
              </Link>
            </li>
          </ul>
          <Box className="d-flex align-items-center gap-2">
            <StyledButton onClick={toggleTheme} pos={theme}>
              <Box className="circle"></Box>
              <MoonIcon />
              <SunIcon />
            </StyledButton>
            {status === 'authenticated' ? (
              // <Link
              //   className="nav-link"
              //   aria-current="page"
              //   href="/login"
              //   onClick={() => signOut()}
              // >
              //   Logout
              // </Link>
              <Box className="nav-item dropdown position-relative">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Box className="avatar">
                    <Image
                      alt="test"
                      src="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/very-petty-girl-WRotPmZiXZQ-unsplash-1000x600.jpg"
                      layout="fill"
                    />
                  </Box>
                </a>
                <ul className="dropdown-menu px-4">
                  <li>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      href="/author/1"
                    >
                      Name
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      href="#"
                      onClick={() => signOut()}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </Box>
            ) : (
              <Link className="nav-link" aria-current="page" href="/login">
                Login
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Navbar>
  );
}

export default Header;
