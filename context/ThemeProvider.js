'use client';
import { themes } from '@/theme';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  if (mounted) {
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <StyledThemeProvider theme={themes[theme]}>
          {children}
        </StyledThemeProvider>
      </ThemeContext.Provider>
    );
  }
};
