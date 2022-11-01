import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { childrenType } from '../types/childrenType';

type darkModeContextType = {
  darkMode: string;
  setDarkMode: Dispatch<SetStateAction<string>>;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<darkModeContextType | null>(null);

export const DarkModeProvider = ({ children }: childrenType) => {
  const [darkMode, setDarkMode] = useState('dark');
  const toggleDarkMode = () => {
    darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light');
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
