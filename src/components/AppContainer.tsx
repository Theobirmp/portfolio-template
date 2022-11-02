import { useCurrentBgColor } from '../hooks/useCurrentTextColor';
import { useDarkMode } from '../hooks/useDarkMode';
import { useTextColor } from '../hooks/useTextColor';
import { childrenType } from '../types/childrenType';
const AppContainer = ({ children }: childrenType) => {
  const { darkMode } = useDarkMode();
  const { textColor } = useTextColor();
  return (
    <div
      className={`${darkMode} relative ${useCurrentBgColor(
        textColor
      )}  min-h-screen w-screen flex justify-end`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
