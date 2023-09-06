import { styled } from 'styled-components';

export const FooterWrapper = styled.div`
  & a.footer-link {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
    transition: ease-in-out all 0.5s;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    &:hover {
      color: #ff2c54;
    }
  }
  & .social {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
    width: 100%;
    height: 100%;
    transition: ease-in-out all 1.5s;
    &:hover {
      & svg {
        scale: 1.2;
      }
    }
  }
  & .social-wrapper {
    background-color: ${({ theme }) => theme.border};
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 5px;
    padding: 10px;
    transition: ease-in-out all 1.5s;
  }
`;
