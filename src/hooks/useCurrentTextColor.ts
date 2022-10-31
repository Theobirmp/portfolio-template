import { colors } from '../theme/TextColorContext';
export const useCurrentTextColor = (color: string) => {
  switch (color) {
    case colors.blue:
      return 'text-blue-900';
    case colors.green:
      return 'text-green-900';
    case colors.purple:
      return 'text-purple-900';
    default:
      return 'text-black';
  }
};
export const useCurrentBgColor = (color: string) => {
  switch (color) {
    case colors.blue:
      return 'bg-blue-900';
    case colors.green:
      return 'bg-green-900';
    case colors.purple:
      return 'bg-purple-900';
    default:
      return 'bg-black';
  }
};
export const useCurrentBgColorAfter = (color: string) => {
  switch (color) {
    case colors.blue:
      return 'after:bg-blue-900';
    case colors.green:
      return 'after:bg-green-900';
    case colors.purple:
      return 'after:bg-purple-900';
    default:
      return 'after:bg-black';
  }
};
export const useCurrentBgColorBefore = (color: string) => {
  switch (color) {
    case colors.blue:
      return 'before:bg-blue-900';
    case colors.green:
      return 'before:bg-green-900';
    case colors.purple:
      return 'before:bg-purple-900';
    default:
      return 'before:bg-black';
  }
};
