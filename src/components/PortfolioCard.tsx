import { AiFillGithub } from 'react-icons/ai';

const PortfolioCard = () => {
  return (
    <div
      className="py-2 px-1 max-h-[400px] max-w-[400px] clear text-white flex flex-col gap-4
    bg-[#FEFBFF] dark:bg-[#272527]"
    >
      <header>
        <h3 className="pl-2 uppercase font-bold text-white opacity-90">
          sth random
        </h3>
      </header>
      <div>
        <img className="" src="./projectImages/exerciseDesktop.png" alt="" />
      </div>
      <div className="px-2 flex justify-between items-center">
        <h4>{['test', 'test', 'test', 'test'].map((tech) => tech)}</h4>
        <a href="" target="_blank">
          <AiFillGithub
            size={40}
            className="hover:scale-125 transition-all ease-linear duration-100"
          />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
