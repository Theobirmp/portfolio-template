import { Link, NavLink } from 'react-router-dom';
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
      case colors.pink:
        return 'border-b border-purple-900';
      case colors.red:
        return 'border-b border-purple-900';
      case colors.orange:
        return 'border-b border-purple-900';
      default:
        break;
    }
  };
  return (
    <nav
      className="
    bg-[#FEFBFF] dark:bg-[#272527] fixed left-0 top-0 h-screen w-[20vw]  flex flex-col items-center justify-center"
    >
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
      <ul className="flex flex-col gap-8 text-2xl text-[#43364A] dark:text-[#FDF5E8]">
        <li className={` flex gap-2 items-center `}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${ulDividers()} ${useCurrentTextColor(
                    textColor
                  )} flex gap-2 items-center`
                : 'flex gap-2 divider items-center'
            }
            to="home"
          >
            <AiFillHome />
            Home
          </NavLink>
        </li>
        <li className={` flex gap-2 items-center`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${ulDividers()} ${useCurrentTextColor(
                    textColor
                  )} flex gap-2 items-center`
                : 'flex gap-2 divider items-center'
            }
            to="about"
          >
            <BsFillPersonFill />
            About
          </NavLink>
        </li>
        <li className={` flex gap-2 items-center`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${ulDividers()} ${useCurrentTextColor(
                    textColor
                  )} flex gap-2 items-center`
                : 'flex gap-2 divider items-center'
            }
            to="services"
          >
            <BsListUl />
            Services
          </NavLink>
        </li>
        <li className={` flex gap-2 items-center`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${ulDividers()} ${useCurrentTextColor(
                    textColor
                  )} flex gap-2 items-center`
                : 'flex gap-2 divider items-center'
            }
            to="portfolio"
          >
            <BsBriefcaseFill />
            Portfolio
          </NavLink>
        </li>
        <li className={` flex gap-2 items-center`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${ulDividers()} ${useCurrentTextColor(
                    textColor
                  )} flex gap-2 items-center`
                : 'flex gap-2 divider items-center'
            }
            to="contact"
          >
            <BsMessenger />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
