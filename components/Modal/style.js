import styled from 'styled-components';

export const ModalWrapper = styled.div`
  & .modal-content {
    background-color: ${({ theme }) => theme.bg};
  }
  & .modal-header {
    padding: 5px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }
  & .btn-close {
    box-shadow: none;
    outline: none;
  }
  & input {
    background-color: ${({ theme }) => theme.bg} !important;
  }
  & input::placeholder,
  .close-icon {
    color: ${({ theme }) => theme.secondary};
  }
  & .see-more {
    color: ${({ theme }) => theme.link};
  }
`;
