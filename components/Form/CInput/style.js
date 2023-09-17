'use client';

import styled from 'styled-components';

export const InputWrapper = styled.div`
  & input {
    height: 60px;
    background-color: ${({ theme }) => theme.gray};
    border-radius: 0;
    box-shadow: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.secondary};
    &:focus {
      color: ${({ theme }) => theme.secondary};
      background-color: ${({ theme }) => theme.gray};
      box-shadow: none;
      outline: none;
    }
    &::placeholder {
      /* color: ${({ theme }) => theme.gray}; */
    }
  }
`;
