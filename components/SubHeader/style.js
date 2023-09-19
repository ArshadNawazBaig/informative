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
  @media (max-width: 768px) {
    padding: 0;
    .search-icon {
      position: absolute;
      top: 20px;
      right: 52px;
    }
  }
`;
