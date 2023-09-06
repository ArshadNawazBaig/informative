'use client';
import { styled } from 'styled-components';
import { themeStyles } from './theme';

export const Box = styled.div``;

export const Body = styled.body`
  ${({ theme }) => themeStyles[theme]}
`;
