import { createContext, useState } from 'react';
import { childrenType } from '../types/childrenType';
import { textColorType } from '../types/textColorType';

export const colors = {
  blue: '#3A5CC7',
  green: '#469F8D',
  pink: '#EE5EC1',
  red: '#EA4640',
  orange: '#EC770C',
};

export const TextColorContext = createContext<textColorType | null>(null);

export const TextColorProvider = ({ children }: childrenType) => {
  const [textColor, setTextColor] = useState(colors.blue);
  return (
    <TextColorContext.Provider value={{ textColor, setTextColor }}>
      {children}
    </TextColorContext.Provider>
  );
};
