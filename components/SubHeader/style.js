'use client';
import styled from 'styled-components';

export const SubHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 12px 0;
  & .sub-header-links {
    & a {
      color: ${({ theme }) => theme.secondary};
      text-decoration: none;
      font-weight: 500;
    }
  }
  & .search-outer {
    background-color: ${({ theme }) => theme.secondary};
    padding: 5px;
    border-radius: 30px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    & svg {
      color: ${({ theme }) => theme.primary};
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    .search-icon {
      /* position: absolute;
      top: 20px;
      right: 82px; */
    }
    .options {
      position: absolute;
      top: 20px;
      right: 52px;
    }
    .options.authenticated {
      top: 10px;
      right: 52px;
    }
  }
`;
