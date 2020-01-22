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
  const [currentTheme, setCurrentTheme] = useState<string>('');

  useEffect(() => {
    const myWindow = window as MyWindow;

    setCurrentTheme(myWindow.__theme);
    myWindow.__onThemeChange = () => {
      setCurrentTheme(myWindow.__theme);
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
