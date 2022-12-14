import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import PageContainer from '../components/PageContainer';
import PortfolioCard from '../components/PortfolioCard';
import { useTextColor } from '../hooks/useTextColor';
import portfolio from '../data/portfolio';
import { v4 as uuidv4 } from 'uuid';
const Portfolio = () => {
  const { textColor } = useTextColor();
  return (
    <PageContainer>
      <section className="flex flex-col gap-8">
        <header className="self-start flex flex-col gap-2 heading1 text-[#43364A] dark:text-[#FDF5E8] mb-10">
          <h3>Projects</h3>
          <BiMenuAltLeft color={textColor} />
        </header>
        <section className=" flex justify-center gap-8 flex-wrap">
          {portfolio.map((item) => {
            return (
              <PortfolioCard
                title={item.title}
                img={item.img}
                summary={item.summary}
                link={item.link}
                key={uuidv4()}
              />
            );
          })}
        </section>
      </section>
    </PageContainer>
  );
};

export default Portfolio;
