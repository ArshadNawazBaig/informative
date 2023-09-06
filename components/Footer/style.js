import { styled } from 'styled-components';

export const FooterWrapper = styled.div`
  & a.footer-link {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
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
    transition: ease-in-out all 0.5s;
    &:hover {
      transform: translateY(-3px);
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
    border-radius: 8px;
    padding: 10px;
  }
  & .navbar-brand {
    position: relative;
    color: ${({ theme }) => theme.secondary};
    font-weight: 600;
    font-size: 1.2rem;
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50px;
      left: -3px;
      top: -6px;
      background-color: ${({ theme }) => theme.secondary};
    }
  }
`;
