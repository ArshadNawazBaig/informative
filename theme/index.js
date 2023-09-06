import { css } from 'styled-components';

const lightTheme = {
  primary: '#fff',
  secondary: '#1f1f1f',
  border: '#dee2e58a',
};

const darkTheme = {
  primary: '#1f1f1f',
  secondary: '#fff',
  border: '#3434348a',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const themeStyles = {
  light: css`
    background-color: ${lightTheme.primary};
    color: ${lightTheme.secondary} !important;
  `,
  dark: css`
    background-color: ${darkTheme.primary};
    color: ${darkTheme.secondary} !important;
  `,
};
