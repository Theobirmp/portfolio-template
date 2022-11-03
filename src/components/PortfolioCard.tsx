import { AiFillGithub } from 'react-icons/ai';

type portfolioCardType = {
  title: string;
  img: string;
  summary: string;
  link: string;
};

const PortfolioCard = ({ title, img, summary, link }: portfolioCardType) => {
  return (
    <div
      className=" py-2 px-1 max-h-[400px] max-w-[400px] clear text-[#43364A] dark:text-[#FDF5E8] flex flex-col gap-4
    bg-[#FEFBFF] dark:bg-[#272527]"
    >
      <header>
        <h3 className="pl-2 uppercase font-bold text-[#43364A] dark:text-[#FDF5E8] opacity-90">
          {title}
        </h3>
      </header>
      <div>
        <img className="" src={img} alt="" />
      </div>
      <div className="px-2 flex justify-between items-center">
        <h4>{summary}</h4>
        <a href={link} target="_blank">
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
