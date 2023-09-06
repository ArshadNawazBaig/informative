'use client';
import { styled } from 'styled-components';

export const HeadingWrapper = styled.h2`
  font-size: ${({ size }) => (size === 'md' ? '1.3rem' : '2rem')};
`;

export const Para = styled.p`
  font-size: 1.2rem;
`;
