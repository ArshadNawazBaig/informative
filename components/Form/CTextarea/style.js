'use client';

import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  & textarea {
    background-color: ${({ theme }) => theme.gray};
    border-radius: 0;
    box-shadow: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.secondary};
    min-height: 160px;
    &:focus {
      color: ${({ theme }) => theme.secondary};
      background-color: ${({ theme }) => theme.gray};
      box-shadow: none;
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
