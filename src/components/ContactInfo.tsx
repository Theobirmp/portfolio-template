import { useCurrentBgColor } from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';

const ContactInfo = () => {
  const { textColor } = useTextColor();
  return (
    <div className="flex flex-col gap-2  w-[50%]">
      <h3 className="heading2 mb-4">Contact Info</h3>
      <div className="divider">
        <span className="font-bold">Email: </span>
        <a href="mailto:'theobirmpil@gmail.com">theobirmpil@gmai.com</a>
      </div>
      <div className="divider">
        <span className="font-bold">LinkedIn: </span>
        <a href="https://www.linkedin.com/in/theofanis-birmpilis-0566ba245/">
          LinkedIn
        </a>
      </div>
      <div className="divider">
        <span className="font-bold">Degree: </span>
        <span>Computer Science</span>
      </div>
      <div className="divider">
        <span className="font-bold">Open for Work: </span>
        <span>Available</span>
      </div>
      <div className="self-start mt-8 flex gap-2">
        <button
          className={`${useCurrentBgColor(
            textColor
          )} rounded-full px-4 py-2 text-[#43364A] dark:text-[#FDF5E8] font-bold`}
        >
          Download CV
        </button>
        <button
          className={`${useCurrentBgColor(
            textColor
          )} rounded-full px-4 py-2 text-[#43364A] dark:text-[#FDF5E8] font-bold`}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
