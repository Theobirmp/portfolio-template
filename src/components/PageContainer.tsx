import { childrenType } from '../types/childrenType';

const PageContainer = ({ children }: childrenType) => {
  return (
    <div
      className=" bg-[#F5F5FE] dark:bg-[#161516] 
       min-h-screen  flex justify-start gap-28
       px-6 py-10 lg:px-20 lg:py-10  w-[100vw]  md:w-[80vw]"
    >
      {children}
    </div>
  );
};

export default PageContainer;
