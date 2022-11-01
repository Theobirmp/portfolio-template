import { useContext } from 'react';
import { DarkModeContext } from '../theme/DarkModeContext';

export const useDarkMode = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) throw Error('cant use context outside provider');
  return darkModeContext;
};
