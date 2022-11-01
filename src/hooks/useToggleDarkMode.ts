import { useDarkMode } from './useDarkMode';

export const useToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light');
  return;
};
