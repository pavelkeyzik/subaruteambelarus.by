import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  currentTheme: 'light',
  toggleTheme: () => {
    // Do nothing...
  },
});

export function ThemeContextProvider({ children }) {
  const defaultTheme = localStorage.getItem('theme') || 'light';
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  function toggleTheme() {
    setCurrentTheme(theme => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

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
