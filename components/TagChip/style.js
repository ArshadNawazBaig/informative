'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const TagChipWrapper = styled(Link)`
  border-radius: 5px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.border};
  transition: ease-in-out all 0.5s;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.primary};
  }
`;
