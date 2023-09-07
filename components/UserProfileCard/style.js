'use client';
import { styled } from 'styled-components';

export const UserCardWrapper = styled.div`
  & .image-wrapper {
    overflow: hidden;
    max-height: 50vh;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
    & img.background {
      object-fit: cover;
      object-position: center;
    }
  }
  & .avatar-wrapper {
    width: 150px;
    height: 150px;
    border: 5px solid ${({ theme }) => theme.primary};
    margin: 0 auto;
    margin-top: -66px !important;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
    & img {
      border-radius: 100px;
      object-fit: cover;
      object-position: center;
    }
  }
  & .half-width {
    max-width: 70%;
    margin: 0 auto;
    @media (max-width: 768px) {
      min-width: 100%;
    }
  }
`;

export const Heading = styled.h2`
  font-size: 1.4rem;
`;
