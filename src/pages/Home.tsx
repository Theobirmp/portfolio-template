import PageContainer from '../components/PageContainer';
import {
  useCurrentBgColor,
  useCurrentBgColorAfter,
  useCurrentBgColorBefore,
  useCurrentTextColor,
} from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';
import home from '../data/home';
import { Link } from 'react-router-dom';

const Home = () => {
  const { textColor, setTextColor } = useTextColor();
  return (
    <PageContainer>
      <div className="flex flex-col-reverse lg:flex-row gap-10 justify-end py-6 md:py-10 items-center lg:items-center">
        <section className=" flex flex-col gap-2 md:gap-10 text-[#43364A] dark:text-[#FDF5E8]">
          <h3 className="text-4xl xl:text-5xl ">
            Hello,my name is{' '}
            <span className={`${useCurrentTextColor(textColor)}`}>
              {home.name}
            </span>
          </h3>
          <h2 className="text-4xl xl:text-5xl">
            I'm a Front{' '}
            <span className={`${useCurrentTextColor(textColor)}`}>
              {home.position}
            </span>
          </h2>
          <p className="para">{home.description}</p>
          <Link
            to="/about"
            className={`text-4xl rounded-full px-4 py-2 text-white ${useCurrentBgColor(
              textColor
            )} self-start`}
          >
            More About Me
          </Link>
        </section>
        <section className="">
          <div
            className={`hidden md:block relative max-h-[700px] max-w-[1200px]
        after:absolute after:content-[""] after:bottom-[-50px] after:right-[-50px] 
        after:w-[50px] after:h-[10px] ${useCurrentBgColorAfter(textColor)}
        before:absolute before:content-[""] before:bottom-[-50px] before:right-[-50px] 
        before:w-[10px] before:h-[50px] ${useCurrentBgColorBefore(textColor)}`}
          >
            <div
              className={`hidden md:block relative 
            after:absolute after:content-[""] after:top-[-50px] after:left-[-50px]
              after:w-[50px] after:h-[10px] ${useCurrentBgColorAfter(textColor)}
            before:absolute before:content-[""] before:top-[-50px] before:left-[-50px]
            before:w-[10px] before:h-[50px] ${useCurrentBgColorBefore(
              textColor
            )}`}
            ></div>
            <img
              className="max-w-[400px]"
              src="./person.jpg"
              alt="this is an image"
            />
          </div>
          <img
            className="block md:hidden max-w-[320px] md:max-w-[400px]"
            src="./person.jpg"
            alt="this is an image"
          />
        </section>
      </div>
    </PageContainer>
  );
};

export default Home;

{
  /* <h1 className={`${useCurrentTextColor(textColor)} text-4xl`}>
        this is the header that changes colors
      </h1>
      <div className="flex gap-10 mt-10">
        <button onClick={() => handleChangeTextColor(colors.green)}>
          green
        </button>
        <button onClick={() => handleChangeTextColor(colors.blue)}>blue</button>
        <button onClick={() => handleChangeTextColor(colors.purple)}>
          purple
        </button>
      </div> */
}
