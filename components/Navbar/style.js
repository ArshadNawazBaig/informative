import { themeStyles } from '@/theme';
import styled from 'styled-components';

export const Navbar = styled.nav`
  ${({ theme }) => themeStyles[theme]};
  & .nav-link {
    color: ${({ theme }) => theme.secondary};
  }
  & .nav-link.active {
    color: #ff2c54;
  }
  & .navbar-brand {
    color: ${({ theme }) => theme.secondary};
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
    left: ${({ pos }) => (pos === 'light' ? '2px' : '24px')};
  }
`;
