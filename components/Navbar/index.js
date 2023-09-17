'use client';
import React, { useEffect, useState } from 'react';
import { Navbar, StyledButton } from './style';
import { useTheme } from '@/context/ThemeProvider';
import { Box } from '@/style';
import Link from 'next/link';
import { CloseIcon, MenuIcon, MoonIcon, SearchIcon, SunIcon } from '../Icons';
import Divider from '../Divider';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/legacy/image';
import { usePathname } from 'next/navigation';
import SubHeader from '../SubHeader';

function Header({}) {
  const { data, status } = useSession();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const links = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Contact', link: '/contact' },
    { id: 4, label: 'Write', link: '/write', isAuth: true },
  ];

  const pathname = usePathname();

  useEffect(() => {
    if (data?.user?.email) {
      fetch(`/api/authors/${data.user.email}`)
        .then((response) => response.json())
        .then((userData) => {
          setUser(userData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false);
        });
    }
  }, [data]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box className="sticky-top mb-2">
      <Navbar className={`navbar navbar-expand-lg`}>
        <Box className="container position-relative">
          <Link
            className="navbar-brand text-uppercase fw-medium"
            href="/"
            onClick={() => setIsOpen(false)}
          >
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
            className={`collapse navbar-collapse links-menu ${
              isOpen ? 'show' : ''
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <Box key={link.id}>
                  {(link.isAuth && status === 'authenticated') ||
                  !link.isAuth ? (
                    <li className="nav-item">
                      <Link
                        onClick={() => setIsOpen(false)}
                        className={`nav-link ${
                          pathname === link.link && 'active'
                        }`}
                        href={link.link}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : null}
                </Box>
              ))}
            </ul>
            <Box className="d-block d-md-flex align-items-center gap-2">
              <StyledButton onClick={toggleTheme} pos={theme}>
                <Box className="circle"></Box>
                <MoonIcon />
                <SunIcon />
              </StyledButton>
              {status === 'authenticated' ? (
                <Box className="nav-item dropdown position-relative mt-4 mt-md-0">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Box className="avatar">
                      <Image
                        alt={data.user.name}
                        src={data.user.image}
                        layout="fill"
                      />
                    </Box>
                  </a>
                  <ul className="dropdown-menu py-0">
                    <li>
                      <Link
                        className="nav-link py-2 px-4 text-capitalize"
                        aria-current="page"
                        href={`/author/${user?.id}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {data.user.name}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-link py-2 px-4"
                        aria-current="page"
                        href="/write"
                        onClick={() => setIsOpen(false)}
                      >
                        Write a post
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-link py-2 px-4"
                        aria-current="page"
                        href="#"
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </Box>
              ) : (
                <Link
                  className="nav-link mt-3 mt-md-0"
                  aria-current="page"
                  href="/login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </Box>
          </Box>
        </Box>
      </Navbar>
      <SubHeader />
    </Box>
  );
}

export default Header;
