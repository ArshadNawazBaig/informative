'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  & .divider {
    width: 3px;
    height: 3px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.secondary};
  }
  & .divider-1 {
    width: 30px;
  }
`;
