import React, { createContext, useState, useEffect } from 'react';
import { availableThemes } from '../constants';
import { MyWindow } from '../types/global';

export const ThemeContext = createContext({
  currentTheme: availableThemes.light,
  toggleTheme: () => {
    // Do nothing...
  },
});

export function ThemeContextProvider({ children }) {
  const defaultTheme =
    (typeof window !== 'undefined' && (window as MyWindow).__theme) ||
    availableThemes.light;
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    (window as MyWindow).__onThemeChange = () => {
      setCurrentTheme((window as MyWindow).__theme);
    };
  }, []);

  function toggleTheme() {
    setCurrentTheme(theme => {
      const newTheme =
        theme === availableThemes.light
          ? availableThemes.dark
          : availableThemes.light;

      (window as MyWindow).__setPreferredTheme(newTheme);

      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
