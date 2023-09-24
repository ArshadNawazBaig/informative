import { Box } from '@/style';
import Link from 'next/link';
import React from 'react';
import { SubHeaderWrapper } from './style';
import {
  MoonIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
  VerifiedIcon,
} from '../Icons';
import { signOut } from 'next-auth/react';
import { StyledButton } from '../Navbar/style';
import Image from 'next/legacy/image';
import { useTheme } from '@/context/ThemeProvider';

const categories = [
  { id: 1, title: 'Travel', link: '/blog?category=travel' },
  { id: 2, title: 'Entertainment', link: '/blog?category=entertainment' },
  { id: 3, title: 'Health', link: '/blog?category=health' },
  { id: 4, title: 'Music', link: '/blog?category=music' },
  { id: 5, title: 'Technology', link: '/blog?category=technology' },
  { id: 6, title: 'Photography', link: '/blog?category=photography' },
];

const SubHeader = ({ setIsOpen, status, user, data }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <SubHeaderWrapper>
      <Box className="container">
        <Box className="row">
          <Box className="col-12">
            <Box className="d-flex align-items-center justify-content-between">
              <Box className="gap-4 sub-header-links d-none d-md-flex">
                {categories.map((category) => (
                  <Link href={category.link} key={category.id}>
                    {category.title}
                  </Link>
                ))}
              </Box>
              <Box
                className={`d-flex d-md-none align-items-center gap-2 options ${
                  status === 'authenticated' && 'authenticated'
                }`}
              >
                <SearchIcon
                  className="cursor-pointer search-icon"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
                <StyledButton onClick={toggleTheme} pos={theme}>
                  <Box className="circle"></Box>
                  <MoonIcon />
                  <SunIcon />
                </StyledButton>
                {status === 'authenticated' ? (
                  <Box className="nav-item dropdown position-relative mt-md-0">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Box className="avatar d-flex justify-content-center align-items-center">
                        {user?.verified && (
                          <VerifiedIcon
                            width="16"
                            className="ms-1 position-absolute"
                            style={{ right: '-2px', bottom: '-3px', zIndex: 9 }}
                          />
                        )}
                        {user?.image ? (
                          <Image
                            alt={data.user.name}
                            src={user?.image}
                            layout="fill"
                          />
                        ) : (
                          <UserIcon />
                        )}
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
                          className="nav-link py-2 px-4 text-capitalize"
                          aria-current="page"
                          href={`/author/edit/${user?.id}`}
                          onClick={() => setIsOpen(false)}
                        >
                          Settings
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
                    className="nav-link mt-md-0"
                    aria-current="page"
                    href="/login"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserIcon />
                  </Link>
                )}
              </Box>
              <Box
                className="search-outer cusor-pointer d-none d-md-block"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <SearchIcon className="cursor-pointer  search-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
