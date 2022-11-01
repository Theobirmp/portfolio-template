import { useDarkMode } from '../hooks/useDarkMode';
import { childrenType } from '../types/childrenType';
const AppContainer = ({ children }: childrenType) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode} relative bg-[#F5F5FE] dark:bg-[#161516]  min-h-screen w-screen flex `}
    >
      {children}
    </div>
  );
};

export default AppContainer;
