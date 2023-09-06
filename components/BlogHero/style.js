'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const BlogHeroWrapper = styled.div`
  height: 100%;
  min-height: 58vh;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 10px 25px 4px rgba(23, 25, 32, 0.21176470588235294);
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

  @media (max-width: 767px) {
    min-height: 90vh;
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

export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px;
  text-align: center;
  z-index: 10;
  transition: 0.5s cubic-bezier(0.17, 0.73, 0.66, 0.99);
  box-sizing: border-box;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  & .avatar {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    overflow: hidden;
    & img {
      object-fit: cover;
      object-position: center;
    }
  }
  & .date {
    font-size: 0.8rem;
  }
`;

export const TermItem = styled(Link)`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #fff;
  margin-right: 5px;
  border-radius: 0px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
`;

export const AuthorLink = styled(Link)`
  color: ${({ theme }) => theme.secondary};
`;

export const Title = styled.h2`
  margin: 10px 0;
  word-wrap: break-word;
  font-size: 2rem;
  font-weight: 600;
  width: 70%;
  color: #fff;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
