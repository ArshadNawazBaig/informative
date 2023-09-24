'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Outer = styled.div`
  & .date {
    font-size: 0.9rem;
    &::before {
      width: 4px;
      height: 4px;
      content: '';
      display: inline-block;
      margin-right: 10px;
      background: currentColor;
      margin-left: 10px;
    }
  }
`;

export const CardWrapper = styled.div`
  height: 100%;
  min-height: ${({ user }) => (user ? '40vh' : '30vh')};
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  transition: 0.3s ease-in-out;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: #33373a3b;
    transition: 0.6s ease;
    background-color: transparent;
    background-image: linear-gradient(0deg, #0c122d9e 0%, #f2295b00 60%);
  }
  &:hover img {
    transform: scale(1.1);
  }
  @media (max-width: 539px) {
    min-height: ${({ user }) => (user ? '60vh' : '50vh')};
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  transition: 0.6s ease;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s ease;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
  word-wrap: break-word;
  font-size: ${({ font }) => (font === 'md' ? '1.3rem' : '1.4rem')};
  font-weight: 500;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  &:hover a {
    background-position: left 0% bottom;
    background-size: 100% 2px;
  }
  & a {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    background-position: right 0% bottom;
    background-image: linear-gradient(90deg, currentColor, currentColor);
    background-repeat: no-repeat;
    line-height: 34px;
    background-size: 0% 2px;
    transition: 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), background-position 0s;
    display: inline;
    padding: 2px 0;
  }
`;

export const AuthorLink = styled(Link)`
  color: ${({ theme }) => theme.secondary};
`;
