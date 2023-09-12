'use client';
import { styled } from 'styled-components';

export const CreatorCardWrapper = styled.div`
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  & .social {
    transition: ease-in-out all 0.5s;
    &:hover {
      transform: translateY(-3px);
    }
  }
  & h3 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
  & p {
    font-size: 18px;
  }
  & .social-wrapper {
    padding: 10px;
    background-color: ${({ theme }) => theme.border};
    border-radius: 50px;
  }
  & .read-more {
    color: ${({ theme }) => theme.secondary};
    font-weight: 500;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 100px;
  height: 150px;
  width: 150px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  transition: 0.6s ease;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s ease;
  }
`;
