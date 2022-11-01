import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import PageContainer from '../components/PageContainer';
import { useTextColor } from '../hooks/useTextColor';

const Portfolio = () => {
  const { textColor } = useTextColor();
  return (
    <PageContainer>
      <header className="self-start flex flex-col gap-2 heading1 text-[#43364A] dark:text-[#FDF5E8] mb-10">
        <h3>My Projects</h3>
        <BiMenuAltLeft color={textColor} />
      </header>
      <section className="flex gap-8 flex-wrap">
        <div className="py-2 px-1 max-h-[400px] max-w-[400px] clear text-white flex flex-col gap-4">
          <header>
            <h3 className="pl-2 uppercase font-bold text-white opacity-90">
              sth random
            </h3>
          </header>
          <div>
            <img src="/person.jpg" alt="" />
          </div>
          <div className="px-2 flex justify-between items-center">
            <h4>{['test', 'test', 'test', 'test'].map((tech) => tech)}</h4>
            <a href="#" target="_blank">
              <AiFillGithub
                size={40}
                className="hover:scale-125 transition-all ease-linear duration-100"
              />
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Portfolio;
