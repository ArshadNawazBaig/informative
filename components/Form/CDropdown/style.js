'use client';

import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 0;
  box-shadow: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.secondary};
  & .main {
    padding: 0 12px;
  }
  & .angle-up {
    transform: rotate(-90deg);
  }
  & .angle-down {
    transform: rotate(90deg);
  }
`;
