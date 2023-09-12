'use client';
import { styled } from 'styled-components';

export const ListWrapper = styled.div`
  & a {
    text-decoration: none;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
    transition: ease-in-out all 0.5s;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    &:hover {
      color: #ff2c54;
    }
  }
`;
