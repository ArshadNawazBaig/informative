import { css } from 'styled-components';

const lightTheme = {
  primary: '#fff',
  secondary: '#1f1f1f',
};

const darkTheme = {
  primary: '#1f1f1f',
  secondary: '#fff',
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
