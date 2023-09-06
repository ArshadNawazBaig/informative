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
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
`;
