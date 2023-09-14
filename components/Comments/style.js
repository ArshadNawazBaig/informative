'use client';

import styled from 'styled-components';

export const CommentsWrapper = styled.div`
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
    & a {
      font-weight: 700;
    }
  }
  & .date {
    font-size: 0.8rem;
  }
  & a {
    color: ${({ theme }) => theme.secondary};
  }
`;
