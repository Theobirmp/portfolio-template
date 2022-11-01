import { useState } from 'react';
import { BsFillGearFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTextColor } from '../hooks/useTextColor';
import { colors } from '../theme/TextColorContext';
import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';
const TextColorSwitch = () => {
  const { setTextColor } = useTextColor();
  const handleChangeTextColor = (color: string) => {
    setTextColor(color);
  };
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const { toggleDarkMode } = useDarkMode();
  return (
    <motion.section
      initial={{ translateX: 150 }}
      animate={openColorPicker ? { translateX: 0 } : { translateX: 150 }}
      className="absolute top-10 right-0 z-10 min-w-[200px] h-[100px] 
    flex justify-between items-center px-4 py-2 gap-4
    rounded-md shadow-md bg-[#43364A] dark:bg-[#FDF5E8]"
    >
      <div className="flex flex-col gap-4 ">
        <button
          onClick={() => setOpenColorPicker(!openColorPicker)}
          className="p-1 bg-gray-300 rounded-full"
        >
          <BsFillGearFill size={30} />
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-1 bg-gray-300 rounded-full"
        >
          <BsFillSunFill size={30} />
        </button>
      </div>
      <div className=" w-[100%] h-[100%] flex flex-col gap-2 justify-center items-center">
        <h4 className="text-center min-w-max">Theme Colors</h4>
        <div className="flex gap-2">
          <button
            onClick={() => handleChangeTextColor(colors.blue)}
            className={`w-[20px] aspect-square rounded-full bg-[#3A5CC7]`}
          ></button>
          <button
            onClick={() => handleChangeTextColor(colors.green)}
            className="w-[20px] aspect-square rounded-full bg-[#469F8D]"
          ></button>
          <button
            onClick={() => handleChangeTextColor(colors.pink)}
            className="w-[20px] aspect-square rounded-full bg-[#EE5EC1]"
          ></button>
          <button
            onClick={() => handleChangeTextColor(colors.red)}
            className="w-[20px] aspect-square rounded-full bg-[#EA4640]"
          ></button>
          <button
            onClick={() => handleChangeTextColor(colors.orange)}
            className="w-[20px] aspect-square rounded-full bg-[#EC770C]"
          ></button>
        </div>
      </div>
    </motion.section>
  );
};

export default TextColorSwitch;
