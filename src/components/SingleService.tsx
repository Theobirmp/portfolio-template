import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { DiCss3 } from 'react-icons/di';
import { useCurrentColor } from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';

type singleServicePropsType = {
  icon: ReactElement;
  text: string;
};

const SingleService = ({ icon, text }: singleServicePropsType) => {
  const { textColor } = useTextColor();
  return (
    <div
      className="flex flex-col gap-4 max-w-[400px] px-12 py-4 items-center shadow-md bg-[#FEFBFF] dark:bg-[#272527]
          rounded-md"
    >
      {/* <DiCss3 size={100} color={useCurrentColor(textColor)} /> */}
      {icon}
      <p className="text-center para text-[#43364A] dark:text-[#FDF5E8]">
        {text}
      </p>
    </div>
  );
};

export default SingleService;
