import { createContext, useState } from 'react';

interface Themes {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  ChangeMood: () => void;
}

const ThemeContext = createContext<Themes | undefined>(undefined);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themes: Themes = {
    theme,
    setTheme,
    ChangeMood: () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    },
  };

  return <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
