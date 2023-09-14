import { css } from 'styled-components';

const lightTheme = {
  primary: '#fff',
  secondary: '#1f1f1f',
  border: '#e8ecf3',
  gray: '#F0F2F5',
};

const darkTheme = {
  primary: '#1f1f1f',
  secondary: '#fff',
  border: '#3434348a',
  gray: '#3434348a',
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
