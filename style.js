'use client';
import { styled } from 'styled-components';
import { themeStyles } from './theme';

export const Box = styled.div``;

export const Body = styled.body`
  ${({ theme }) => themeStyles[theme]}
  & .cursor-pointer {
    cursor: pointer !important;
  }
  & .border-none {
    border: none !important;
  }
  & .gray-border {
    border: 1px solid ${({ theme }) => theme.border};
  }
  & .w-md-auto {
    @media (min-width: 768px) {
      width: auto !important;
    }
  }
`;

export const MainWrapper = styled.div`
  min-height: 66vh;
  display: grid;
  grid-template-rows: 1fr;
`;

export const LoginWrapper = styled.div`
  & .login-form {
    background-color: ${({ theme }) => theme.border};
  }
  & button {
    border-radius: 5px;
    overflow: hidden;
    transition: ease-in-out all 0.5s;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    max-width: 300px;
    height: 60px;
    &:hover {
      transform: translateY(-2px);
      scale: 1.01;
    }
    &.google {
      background-color: #fff;
      color: #000;
    }
    &.github {
      background-color: #000;
      color: #fff;
    }
    &.facebook {
      background-color: rgb(59, 89, 152) !important;
      color: #fff !important;
    }
  }
  & svg.logo {
    max-width: 80px;
    border-radius: 100px;
    box-shadow: 0px 20px 20px -13px ${({ theme }) => theme.lightGray};
  }
  & .social-icon {
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 20px;
    margin-right: 11px;
    border-radius: 50px;
    overflow: hidden;
    & img {
      object-fit: cover;
      object-position: center;
    }
  }
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
