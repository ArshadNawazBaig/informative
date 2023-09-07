'use client';
import { styled } from 'styled-components';
import { themeStyles } from './theme';

export const Box = styled.div``;

export const Body = styled.body`
  ${({ theme }) => themeStyles[theme]}
`;

export const MainWrapper = styled.div`
  min-height: 66vh;
`;

export const LoadingWrapper = styled.div`
  min-height: 66vh;
`;

export const ErrorWrapper = styled.div`
  min-height: 66vh;
  & a {
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
  }
  & h1 {
    font-size: 8rem;
    font-weight: 600;
    line-height: 113px;
  }
  & p,
  a {
    font-size: 1.2rem;
  }
`;
