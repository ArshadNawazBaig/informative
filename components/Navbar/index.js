'use client';
import React, { useState } from 'react';
import { Navbar, StyledButton } from './style';
import { useTheme } from '@/context/ThemeProvider';
import { Box } from '@/style';
import Link from 'next/link';

function Header(args) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar className="navbar navbar-expand-lg">
      <Box className="container">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Box className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <li className="nav-item"></li>
          </ul>
          <Box className="d-flex">
            <StyledButton onClick={toggleTheme}>
              Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
            </StyledButton>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </Box>
        </Box>
      </Box>
    </Navbar>
  );
}

export default Header;
