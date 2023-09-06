'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.article`
  height: 100%;
  & .date::before {
    width: 4px;
    height: 4px;
    content: '';
    display: inline-block;
    margin-right: 10px;
    background: currentColor;
    margin-left: 10px;
  }
`;

export const PostWrapper = styled.article`
  height: 100%;
  min-height: ${({ full }) => (full === 'full' ? '60vh' : 'auto')};
  border-radius: 15px 15px 15px 15px;
  /* box-shadow: ; */
  box-shadow: ${({ varient }) =>
    varient === 'ver'
      ? '0px 10px 25px 4px rgba(23, 25, 32, 0.21176470588235294)'
      : '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'};
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
`;

export const TermItem = styled(Link)`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  background-color: #ff2c54;
  padding: 1px 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
`;

export const AuthorLink = styled(Link)`
  color: ${({ theme }) => theme.secondary};
`;

export const Title = styled.h2`
  margin: 10px 0;
  word-wrap: break-word;
  font-size: ${({ font }) => (font === 'md' ? '1.65rem' : '1.2rem')};
  font-weight: 600;
  &:hover a {
    background-position: left 0% bottom;
    background-size: 100% 2px;
  }
  & a {
    color: #fff;
    text-decoration: none;
    background-position: right 0% bottom;
    background-image: linear-gradient(90deg, currentColor, currentColor);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), background-position 0s;
    display: inline;
    padding: 2px 0;
  }
`;