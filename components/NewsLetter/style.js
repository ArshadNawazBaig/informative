'use client';
import { styled } from 'styled-components';

export const NewsLetterWrapper = styled.div`
  background-color: ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 50px 30px;
  & input {
    height: 50px;
    border-radius: 0;
    border: 1px solid #ff2c54;
    &:focus {
      box-shadow: none;
      outline: none;
      border: 1px solid #ff2c54;
    }
  }
  & button {
    border: 1px solid #ff2c54;
    background-color: #ff2c54;
    text-transform: uppercase;
    padding: 0 30px;
    color: #fff;
    border-radius: 0;
    transition: ease-in-out all 0.5s;
    /* height: 49px; */
  }
`;
