import { Dispatch, SetStateAction } from 'react';

export type textColorType = {
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
};
