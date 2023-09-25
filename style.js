'use client';
import { styled } from 'styled-components';
import { themeStyles } from './theme';

export const Box = styled.div``;

export const Body = styled.div`
  ${({ theme }) => themeStyles[theme]}
  & .cursor-pointer {
    cursor: pointer !important;
  }
  & .text-blue {
    color: #3e3eff;
  }
  & .border-none {
    border: none !important;
  }
  & .custom-close-btn {
    border: none !important;
    box-shadow: none;
    outline: none;
  }
  & .z-4 {
    z-index: 4;
  }
  & .gray-border {
    border: 1px solid ${({ theme }) => theme.border};
  }
  & .w-md-auto {
    @media (min-width: 768px) {
      width: auto !important;
    }
  }
  & .content-wrapper p {
    font-size: 17px;
  }
  & .content-wrapper {
    & blockquote {
      border-left: 5px solid #ff2c54;
      padding: 5px 20px;
    }
    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  & .privacy-policy {
    & h1 {
      color: ${({ theme }) => theme.lightGray};
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }
    & h2,
    h3 {
      color: ${({ theme }) => theme.lightGray};
      font-size: 1.6rem;
      font-weight: 700 !important;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    & p {
      line-height: 28px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    & .category-card-outer {
      width: 100%;
    }
  }
`;

export const WriteOuterWrapper = styled.div`
  & .image-wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    width: 100%;
    height: 220px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
    transition: 0.6s ease;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.6s ease;
    }
  }
  & .search-field {
    height: 60px;
    background-color: ${({ theme }) => theme.gray};
    border-radius: 0;
    box-shadow: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.secondary};
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  @media (max-width: 539px) {
    & .submit-button {
      width: 100%;
    }
  }
`;

export const MainWrapper = styled.div`
  min-height: 66vh;
  display: grid;
  grid-template-rows: 1fr;
`;

export const LoginWrapper = styled.div`
  & .inner-wrapper {
    background-color: ${({ theme }) => theme.border};
    width: fit-content;
    margin: 0 auto;
    padding: 30px;
    @media (max-width: 539px) {
      padding: 20px;
      width: 100%;
    }
  }
  & button {
    border-radius: 5px;
    overflow: hidden;
    transition: ease-in-out all 0.5s;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    min-width: 280px;
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

export const TagInputWrapper = styled.div`
  & .react-tag-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    /* gap: 2px; */
    width: 100%;
    background-color: ${({ theme }) => theme.gray};
    border: 1px solid ${({ theme }) => theme.border};
    min-height: 60px;
    & input {
      width: 100%;
      background-color: ${({ theme }) => theme.gray};
      border: none;
      padding: 0 10px;
      box-shadow: none;
      height: 60px;
      outline: none;
      flex: none;
      color: ${({ theme }) => theme.secondary};
      &::placeholder {
        color: ${({ theme }) => theme.secondary};
      }
    }
    & .react-tag-input__tag {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
      padding: 6px 15px;
      border-radius: 100px;
      min-width: 80px;
      text-align: center;
      margin: 10px 5px 0 5px;
      position: relative;
      display: flex;
      justify-content: center;
    }
    & .react-tag-input__tag__remove {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
