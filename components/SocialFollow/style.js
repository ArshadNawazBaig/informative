import { styled } from 'styled-components';

export const SocialFollowWrapper = styled.div`
  & .social {
    border-radius: 5px;
    overflow: hidden;
    transition: ease-in-out all 0.5s;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    &:hover {
      transform: translateY(-2px);
      scale: 1.01;
    }
    &span {
      text-align: center;
    }
    &.twitter {
      background-color: rgb(0, 172, 237);
    }
    &.facebook {
      background-color: rgb(59, 89, 152);
    }
    &.instagram {
      background-color: rgb(233, 68, 117);
    }
    &.linkedIn {
      background-color: rgb(0, 127, 177);
    }
    &.whatsApp {
      background-color: rgb(37, 211, 102);
    }
  }
`;
