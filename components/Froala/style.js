import styled from 'styled-components';

export const EditorWrapper = styled.div`
  & .ql-container {
    border: 1px solid ${({ theme }) => theme.border};
    min-height: 300px;
    position: relative;
    & .ql-editor {
      min-height: 300px;
    }
    & .ql-editor.ql-blank::before {
      color: ${({ theme }) => theme.secondary} !important;
      font-size: 16px;
      font-style: normal;
    }
  }
  & .ql-tooltip.ql-editing {
    top: 0 !important;
    left: 0 !important;
  }
  & .ql-toolbar.ql-snow {
    border: 1px solid ${({ theme }) => theme.border};
    background-color: #fff;
    padding: 15px 8px;
  }
  & .ql-snow.ql-toolbar button {
    color: ${({ theme }) => theme.secondary} !important;
  }
  & .quill.form-control {
    background-position: right calc(0.375em + 0.1875rem) top calc(65px);
    position: relative;
  }
`;
