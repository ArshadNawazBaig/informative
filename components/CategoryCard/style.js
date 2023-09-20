'use client';

'use client';
import styled from 'styled-components';

export const CategoryCardWrapper = styled.div`
  min-height: 70px;
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff5b84;
  color: #fff;
  & .avatar {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    overflow: hidden;
    & img {
      object-fit: cover;
      object-position: center;
    }
  }
  &.life-style {
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
  }
`;
