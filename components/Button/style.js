'use client';
import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in-out all 0.5s;
  border-radius: 30px;
  min-width: 150px;
  border: 1px solid ${({ theme }) => theme.secondary};
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
  }
`;
