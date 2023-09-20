'use client';
import { styled } from 'styled-components';

export const OuterWrapper = styled.h2`
  & .main-heading-wrapper {
    top: -70px;
    & h1 {
      color: ${({ theme }) => theme.lightGray};
      font-size: 6.25rem;
      font-weight: 700;
      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }
    @media (max-width: 768px) {
      top: -60px;
    }
  }
`;

export const HeadingWrapper = styled.h2`
  font-size: ${({ size }) => (size === 'md' ? '1.3rem' : '2rem')};
`;

export const Para = styled.p`
  font-size: 1.2rem;
`;
