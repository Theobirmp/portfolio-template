import { AiOutlineCalendar } from 'react-icons/ai';
import {
  useCurrentBgColor,
  useCurrentTextColor,
} from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';
import { educationCard } from '../data/about';
type aboutCardDataType = {
  date: string;
  title: string;
  info: string;
};
type aboutCardPropsType = {
  title: string;
  data: aboutCardDataType[];
};
const AboutCard = ({ title, data }: aboutCardPropsType) => {
  const { textColor } = useTextColor();
  return (
    <div
      className=" relative rounded-md shadow-md bg-[#FEFBFF] dark:bg-[#272527] 
    flex flex-col gap-6 lg:w-[50%]
    pl-12 pr-6 py-4 mt-10"
    >
      <h3 className={`heading4 ${useCurrentTextColor(textColor)}`}>{title}</h3>
      {educationCard.data.map((card) => {
        return (
          <div className="relative flex flex-col gap-2">
            <span
              className={`absolute left-[-32px] top-0 w-[20px] aspect-square rounded-full
        ${useCurrentBgColor(textColor)}`}
            ></span>
            <header className="flex gap-2 justify-start items-center">
              <AiOutlineCalendar className="text-[#898090] dark:text-[#FDF5E8]" />
              <h3 className="text-[#43364A] dark:text-[#FDF5E8]">
                {card.date}
              </h3>
            </header>
            <h3 className="font-bold heading4 text-[#43364A] dark:text-[#FDF5E8]">
              {card.title}
            </h3>
            <p className="text-[#43364A] dark:text-[#FDF5E8] para">
              {card.info}
            </p>
          </div>
        );
      })}

      <div
        className={`absolute ${useCurrentBgColor(
          textColor
        )} left-6 w-1 h-[90%] `}
      ></div>
    </div>
  );
};

export default AboutCard;
