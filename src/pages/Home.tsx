import PageContainer from '../components/PageContainer';
import {
  useCurrentBgColor,
  useCurrentBgColorAfter,
  useCurrentBgColorBefore,
  useCurrentTextColor,
} from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';
import { colors } from '../theme/TextColorContext';
const Home = () => {
  const { textColor, setTextColor } = useTextColor();

  return (
    <PageContainer>
      <section className="flex flex-col gap-10 text-[#43364A] dark:text-[#FDF5E8]">
        <h3 className="text-6xl min-w-max">
          Hello,my name is{' '}
          <span className={`${useCurrentTextColor(textColor)}`}>Fanis</span>
        </h3>
        <h2 className="text-6xl min-w-max">
          I'm a Front{' '}
          <span className={`${useCurrentTextColor(textColor)}`}>
            End Developer
          </span>
        </h2>
        <p className="text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          enim perferendis! Est possimus, quam ipsa quidem molestiae quaerat
          dolores earum.
        </p>
        <button
          className={`text-4xl rounded-full px-4 py-2 text-white ${useCurrentBgColor(
            textColor
          )} self-start`}
        >
          More About Me
        </button>
      </section>
      <section>
        <div
          className={`relative max-h-[700px] max-w-[1200px]
        after:absolute after:content-[""] after:bottom-[-50px] after:right-[-50px] 
        after:w-[50px] after:h-[10px] ${useCurrentBgColorAfter(textColor)}
        before:absolute before:content-[""] before:bottom-[-50px] before:right-[-50px] 
        before:w-[10px] before:h-[50px] ${useCurrentBgColorBefore(textColor)}`}
        >
          <div
            className={`relative 
            after:absolute after:content-[""] after:top-[-50px] after:left-[-50px]
              after:w-[50px] after:h-[10px] ${useCurrentBgColorAfter(textColor)}
            before:absolute before:content-[""] before:top-[-50px] before:left-[-50px]
            before:w-[10px] before:h-[50px] ${useCurrentBgColorBefore(
              textColor
            )}`}
          ></div>
          <img src="./person.jpg" alt="this is an image" />
        </div>
      </section>
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
