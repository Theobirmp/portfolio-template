import { useContext } from 'react';
import { TextColorContext } from '../theme/TextColorContext';

export const useTextColor = () => {
  const textColor = useContext(TextColorContext);
  if (!textColor) throw Error('cant use context outside of provider');
  return textColor;
};
