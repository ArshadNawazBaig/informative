import { themeStyles } from '@/theme';
import styled from 'styled-components';

export const Navbar = styled.nav`
  ${({ theme }) => themeStyles[theme]};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  & .nav-link {
    color: ${({ theme }) => theme.secondary};
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
