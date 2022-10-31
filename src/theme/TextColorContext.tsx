import { createContext, useState } from 'react';
import { childrenType } from '../types/childrenType';
import { textColorType } from '../types/textColorType';

export const colors = {
  green: '#CCF5AC',
  blue: '#2C497F',
  purple: '#3D2B56',
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
