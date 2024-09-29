// /Users/danlynmedou/Desktop/smartCity/lapt/app/ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';

type ThemeType = {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
};

const darkTheme: ThemeType = {
  backgroundColor: '#1c1c1e',
  textColor: 'white',
  accentColor: '#0a84ff',
};

const lightTheme: ThemeType = {
  backgroundColor: '#f5f5dc', // Beige
  textColor: 'black',
  accentColor: '#059669', // Emerald green
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: ThemeType;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
