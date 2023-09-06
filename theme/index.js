import { css } from 'styled-components';

const lightTheme = {
  primary: '#1f1f1f',
  secondary: '#fff',
};

const darkTheme = {
  primary: '#fff',
  secondary: '#1f1f1f',
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
