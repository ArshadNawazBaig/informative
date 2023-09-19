'use client';
import styled from 'styled-components';

export const FeaturedCardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  & a {
    color: ${({ theme }) => theme.secondary};
  }
  & .author-name {
    font-size: 14px;
  }
  @media (max-width: 539px) {
    & .author-name {
      font-size: 12px;
    }
    & .title {
      font-size: 1rem !important;
    }
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
  width: 100px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  transition: 0.6s ease;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s ease;
  }
`;
