import { colors } from '../theme/TextColorContext';
export const useCurrentTextColor = (color: string) => {
  switch (color) {
    case colors.blue:
      return `text-[#3A5CC7]`;
    case colors.green:
      return `text-[#469F8D]`;
    case colors.pink:
      return `text-[#EE5EC1]`;
    case colors.red:
      return `text-[#EA4640]`;
    case colors.orange:
      return `text-[#EC770C]`;
    default:
      return 'text-black';
  }
};
export const useCurrentBgColor = (color: string) => {
  switch (color) {
    case colors.blue:
      return `bg-[#3A5CC7]`;
    case colors.green:
      return `bg-[#469F8D]`;
    case colors.pink:
      return `bg-[#EE5EC1]`;
    case colors.red:
      return `bg-[#EA4640]`;
    case colors.orange:
      return `bg-[#EC770C]`;
    default:
      return 'bg-black';
  }
};
export const useCurrentBgColorAfter = (color: string) => {
  switch (color) {
    case colors.blue:
      return `after:bg-[#3A5CC7]`;
    case colors.green:
      return `after:bg-[#469F8D]`;
    case colors.pink:
      return `after:bg-[#EE5EC1]`;
    case colors.red:
      return `after:bg-[#EA4640]`;
    case colors.orange:
      return `after:bg-[#EC770C]`;
    default:
      return 'after:bg-black';
  }
};
export const useCurrentBgColorBefore = (color: string) => {
  switch (color) {
    case colors.blue:
      return `before:bg-[#3A5CC7]`;
    // return `before:bg-blue-900`;
    case colors.green:
      return `before:bg-[#469F8D]`;
    case colors.pink:
      return `before:bg-[#EE5EC1]`;
    case colors.red:
      return `before:bg-[#EA4640]`;
    case colors.orange:
      return `before:bg-[#EC770C]`;
    default:
      return 'before:bg-black';
  }
};
