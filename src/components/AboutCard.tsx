import { AiOutlineCalendar } from 'react-icons/ai';
import { useCurrentBgColor } from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';
const AboutCard = () => {
  const { textColor } = useTextColor();
  return (
    <div
      className="relative rounded-md shadow-md bg-[#FEFBFF] dark:bg-[#272527] 
    flex flex-col gap-6 w-[50%]
    pl-12 pr-6 py-4 mt-10"
    >
      <div className="relative flex flex-col gap-2">
        <span
          className={`absolute left-[-32px] top-0 w-[20px] aspect-square rounded-full
        ${useCurrentBgColor(textColor)}`}
        ></span>
        <header className="flex gap-2 justify-start items-center">
          <AiOutlineCalendar className="text-[#898090] dark:text-[#FDF5E8]" />
          <h3 className="text-[#43364A] dark:text-[#FDF5E8]">2016 - 2022</h3>
        </header>
        <h3 className="font-bold heading4 text-[#43364A] dark:text-[#FDF5E8]">
          Bachelor's Degree
        </h3>
        <p className="text-[#43364A] dark:text-[#FDF5E8] para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit
          similique voluptatum. Quasi nam quidem labore dolorem quaerat in vel
          voluptatibus quisquam. Odit sint quidem aut, cum vero unde temporibus.
        </p>
      </div>
      <div className="relative flex flex-col gap-2">
        <span
          className={`absolute left-[-32px] top-0 w-[20px] aspect-square rounded-full
        ${useCurrentBgColor(textColor)}`}
        ></span>
        <header className="flex gap-2 justify-start items-center">
          <AiOutlineCalendar className="text-[#898090] dark:text-[#FDF5E8]" />
          <h3 className="text-[#43364A] dark:text-[#FDF5E8]">2016 - 2022</h3>
        </header>
        <h3 className="font-bold heading4 text-[#43364A] dark:text-[#FDF5E8]">
          Bachelor's Degree
        </h3>
        <p className="text-[#43364A] dark:text-[#FDF5E8] para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit
          similique voluptatum. Quasi nam quidem labore dolorem quaerat in vel
          voluptatibus quisquam. Odit sint quidem aut, cum vero unde temporibus.
        </p>
      </div>
      <div className="relative flex flex-col gap-2">
        <span
          className={`absolute left-[-32px] top-0 w-[20px] aspect-square rounded-full
        ${useCurrentBgColor(textColor)}`}
        ></span>
        <header className="flex gap-2 justify-start items-center">
          <AiOutlineCalendar className="text-[#898090] dark:text-[#FDF5E8]" />
          <h3 className="text-[#43364A] dark:text-[#FDF5E8]">2016 - 2022</h3>
        </header>
        <h3 className="font-bold heading4 text-[#43364A] dark:text-[#FDF5E8]">
          Bachelor's Degree
        </h3>
        <p className="text-[#43364A] dark:text-[#FDF5E8] para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit
          similique voluptatum. Quasi nam quidem labore dolorem quaerat in vel
          voluptatibus quisquam. Odit sint quidem aut, cum vero unde temporibus.
        </p>
      </div>
      <div
        className={`absolute ${useCurrentBgColor(
          textColor
        )} left-6 w-1 h-[90%] `}
      ></div>
    </div>
  );
};

export default AboutCard;
