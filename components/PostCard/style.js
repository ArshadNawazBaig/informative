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

export const PostWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: ${({ full }) =>
    full === 'full' ? '55vh' : full === 'md' ? '30vh' : 'auto'};
  min-height: ${({ varient }) => varient && '48vh !important'};
  border-radius: 15px 15px 15px 15px;
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
  @media (max-width: 768px) {
    min-height: 90vh;
  }
  & .views {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 3px 10px;
    padding-top: 1px;
    border-radius: 26px;
    position: absolute;
    z-index: 9;
    right: 15px;
    top: 15px;
    & .count {
      position: relative;
      top: 2px;
      margin-left: 2px;
      color: #000000;
      font-size: 14px;
    }
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

  /* &.life-style {
    background-color: #d9709a;
  }
  &.entertainment {
    background-color: #7093d9;
  }
  &.illustration {
    background-color: #ff955b;
  }
  &.health {
    background-color: #86aa73;
  }
  &.travel {
    background-color: #ff5b5b;
  }
  &.photography {
    background-color: #b5b84c;
  }
  &.music {
    background-color: #9c6fbf;
  }
  &.technology {
    background-color: #429681;
  }
  &.culture {
    background-color: #a0a09b;
  }
  &.news {
    background-color: #59a6bf;
  } */
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
