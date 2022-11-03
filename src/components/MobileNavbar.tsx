import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mobileNavbarPropsType } from '../types/mobileNavbarPropsType';
const MobileNavbar = ({
  isMobileNavbarOpen,
  setIsMobileNavbarOpen,
}: mobileNavbarPropsType) => {
  const handleNavClicked = () => {
    setIsMobileNavbarOpen(false);
  };
  return (
    <>
      {isMobileNavbarOpen ? (
        <motion.nav
          key={'modal'}
          initial={{ scaleY: 0, transformOrigin: 'top' }}
          animate={{ scaleY: 1, transition: { duration: 1 } }}
          className="z-10 absolute inset-0 h-screen w-screen bg-[#FEFBFF] 
        dark:bg-[#272527]"
        >
          <ul className="w-[100%] h-[100%]  flex flex-col items-center justify-center gap-20 ">
            <li className="w-[100px] grid place-content-center text-2xl text-[#43364A] dark:text-[#FDF5E8] font-bold divider">
              <Link to="home" onClick={handleNavClicked}>
                Home
              </Link>
            </li>
            <li className="w-[100px] grid place-content-center text-2xl text-[#43364A] dark:text-[#FDF5E8] font-bold divider">
              <Link to="/about" onClick={handleNavClicked}>
                About
              </Link>
            </li>
            <li className="w-[100px] grid place-content-center text-2xl text-[#43364A] dark:text-[#FDF5E8] font-bold divider">
              <Link to="/services" onClick={handleNavClicked}>
                Services
              </Link>
            </li>
            <li className="w-[100px] grid place-content-center text-2xl text-[#43364A] dark:text-[#FDF5E8] font-bold divider">
              <Link to="/portfolio" onClick={handleNavClicked}>
                Portfolio
              </Link>
            </li>
            <li className="w-[100px] grid place-content-center text-2xl text-[#43364A] dark:text-[#FDF5E8] font-bold divider">
              <Link to="/contact" onClick={handleNavClicked}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.nav>
      ) : (
        ''
      )}
    </>
  );
};

export default MobileNavbar;
