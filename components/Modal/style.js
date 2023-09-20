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
  & .unsplash-image-wrapper {
    width: 100%;
    height: 150px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
    transition: 0.6s ease;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.6s ease;
    }
  }
  @media (max-width: 768px) {
    & input {
      max-width: 96% !important;
    }
  }
`;
