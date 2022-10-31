import { childrenType } from '../types/childrenType';
const AppContainer = ({ children }: childrenType) => {
  return (
    <div className="relative bg-red-50  min-h-screen w-screen flex ">
      {children}
    </div>
  );
};

export default AppContainer;
