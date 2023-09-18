'use client';
import styled from 'styled-components';

export const UploaderWrapper = styled.div`
  & .uploader {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.secondary};
    transition: ease-in-out all 0.5s;
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
