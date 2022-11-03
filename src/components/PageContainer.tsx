import { childrenType } from '../types/childrenType';
import { motion } from 'framer-motion';

const PageContainer = ({ children }: childrenType) => {
  return (
    <motion.div
      initial={{ scaleX: 0, transformOrigin: 'right' }}
      animate={{ scaleX: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className=" bg-[#F5F5FE] dark:bg-[#161516] 
       min-h-screen  flex justify-start gap-28
       px-6 py-10 lg:px-20 lg:py-10  w-[100vw]  md:w-[80vw]"
      style={{ translateZ: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;
