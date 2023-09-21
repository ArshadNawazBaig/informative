import { themeStyles } from '@/theme';
import styled from 'styled-components';

export const OutterWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  .avatar {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.bg};

    & img {
      border-radius: 50px;
      object-fit: cover;
      object-position: center;
    }
  }
  & .dropdown-menu {
    background: ${({ theme }) => theme.primary} !important;
    border: 1px solid ${({ theme }) => theme.border} !important;
    min-width: 210px;
    & a {
      color: ${({ theme }) => theme.secondary};
      &:hover {
        background: ${({ theme }) => theme.border} !important;
      }
    }
  }
  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
  & hr {
    position: fixed;
    margin: 0;
    left: 0;
    right: 0;
    width: 100%;
    color: ${({ theme }) => theme.hr};
  }
`;

export const Navbar = styled.nav`
  ${({ theme }) => themeStyles[theme]};
  background-color: ${({ theme }) => theme.primary};
  /* border-bottom: 1px solid ${({ theme }) => theme.border}; */
  & .dropdown-menu {
    right: 0 !important;
    left: unset;
    @media (max-width: 768px) {
      position: relative !important;
      border: none !important;
      margin-top: 20px;
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    & .links-menu {
      position: absolute;
      width: 100%;
      left: 0;
      top: 56px;
      padding: 0 16px;
      background: white;
      padding-top: 20px;
      padding-bottom: 30px;
      background-color: ${({ theme }) => theme.primary};
    }
  }
  & .nav-link {
    color: ${({ theme }) => theme.secondary};
    font-weight: 500;
  }
  & .nav-link.active {
    color: #ff2c54;
  }
  & .navbar-brand {
    position: relative;
    color: ${({ theme }) => theme.secondary};
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50px;
      left: -3px;
      top: 0;
      background-color: ${({ theme }) => theme.secondary};
    }
  }
  & .navbar-toggler {
    border: none;
    box-shadow: none;
    outline: none;
    padding: 0;
    & svg {
      stroke: ${({ theme }) => theme.secondary};
    }
  }
`;

export const StyledButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
  width: 45px;
  height: 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  position: relative;
  transition: ease-in-out 0.5s;
  justify-content: space-between;
  & .circle {
    background-color: ${({ theme }) => theme.primary};
    overflow: hidden;
    width: 20px;
    display: flex;
    align-items: center;
    height: 20px;
    border-radius: 50px;
    /* top: 3px; */
    position: absolute;
    right: ${({ pos }) => (pos === 'light' ? '2px' : '24px')};
  }
`;
