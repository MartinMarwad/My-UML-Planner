// Source here: https://github.com/ZakAlbert/react-material-you-theme
// Modified by Martin Marwad to be Javascript from Typescript.

import React from 'react';

import { FC, ReactNode, createContext, useState, useEffect } from 'react';
import { M3ThemeMode } from '../m3/M3Theme';

const DEFAULT_MODE = 'light';
const THEME_MODE_KEY = 'ThemeMode';

export const ThemeModeContext = createContext({
  themeMode: DEFAULT_MODE,
  toggleThemeMode: () => {},
  resetThemeMode: () => {},
});

const ThemeModeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(DEFAULT_MODE);

  useEffect(() => {
    if (localStorage.getItem(THEME_MODE_KEY)) {
      const localMode = JSON.parse(
        localStorage.getItem(THEME_MODE_KEY) || '{}'
      );
      setThemeMode(localMode);
    }
  }, []);

  const toggleThemeMode = () => {
    const value = themeMode == 'light' ? 'dark' : 'light';
    setThemeMode(value);
    localStorage.setItem(THEME_MODE_KEY, JSON.stringify(value));
  };

  const resetThemeMode = () => {
    setThemeMode('light');
    localStorage.setItem(THEME_MODE_KEY, JSON.stringify(DEFAULT_MODE));
  };

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode, resetThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
