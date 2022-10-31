import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import {
  BsFillPersonFill,
  BsListUl,
  BsBriefcaseFill,
  BsMessenger,
} from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { useTextColor } from '../hooks/useTextColor';
import { colors } from '../theme/TextColorContext';
import {
  useCurrentBgColorAfter,
  useCurrentBgColorBefore,
  useCurrentTextColor,
} from '../hooks/useCurrentTextColor';

const Sidebar = () => {
  const { textColor } = useTextColor();
  const ulDividers = () => {
    switch (textColor) {
      case colors.blue:
        return 'border-b border-blue-900';
      case colors.green:
        return 'border-b border-green-900';
      case colors.purple:
        return 'border-b border-purple-900';
      default:
        break;
    }
  };
  return (
    <nav className="bg-[FEFBFF] relative w-[20vw]  flex flex-col items-center justify-center">
      <div
        className="absolute top-10 w-[180px] h-[180px]
        "
      >
        <div
          className={`relative w-[100%] h-[100%] 
          after:absolute after:content-[""] after:bottom-0 after:right-0 
          after:w-[50px] after:h-[10px] ${useCurrentBgColorAfter(textColor)}
          before:absolute before:content-[""] before:bottom-0 before:right-0 
          before:w-[10px] before:h-[50px] ${useCurrentBgColorBefore(textColor)}
  `}
        >
          <div
            className={`relative w-[100%] h-[100%] flex justify-center items-center 
            after:absolute after:content-[""] after:top-0 after:left-0 
            after:right-0 after:w-[50px] after:h-[10px] ${useCurrentBgColorAfter(
              textColor
            )}
            before:absolute before:content-[""] before:top-0 before:left-0 
            before:w-[10px] before:h-[50px] ${useCurrentBgColorBefore(
              textColor
            )}
  `}
          >
            <h1>
              <DiReact
                size={100}
                color="#61DBFB"
                className="hover:rotate-[90deg] transition-transform duration-200 ease-linear"
              />
            </h1>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-8 text-2xl">
        <li
          className={`${ulDividers()} flex gap-2 items-center ${useCurrentTextColor(
            textColor
          )}`}
        >
          <AiFillHome />
          <Link className={``} to="home">
            Home
          </Link>
        </li>
        <li className={`${ulDividers()} flex gap-2 items-center`}>
          <BsFillPersonFill />
          <Link to="about">About</Link>
        </li>
        <li className={`${ulDividers()} flex gap-2 items-center`}>
          <BsListUl />
          <Link to="services">Services</Link>
        </li>
        <li className={`${ulDividers()} flex gap-2 items-center`}>
          <BsBriefcaseFill />
          <Link to="portfolio">Portfolio</Link>
        </li>
        <li className={`${ulDividers()} flex gap-2 items-center`}>
          <BsMessenger />
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
