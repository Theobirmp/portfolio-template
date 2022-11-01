import { childrenType } from '../types/childrenType';

const PageContainer = ({ children }: childrenType) => {
  return (
    <div
      className="bg-[#F5F5FE] dark:bg-[#161516] 
       min-h-screen flex justify-start items-center gap-28
      px-[120px] py-[120px]  w-[80vw]"
    >
      {children}
    </div>
  );
};

export default PageContainer;
