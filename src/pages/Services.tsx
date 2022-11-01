import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import PageContainer from '../components/PageContainer';
import {
  useCurrentColor,
  useCurrentTextColor,
} from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiNodejs } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
const Services = () => {
  const { textColor } = useTextColor();
  return (
    <PageContainer>
      <section>
        <header className="self-start flex flex-col gap-2 heading1 text-[#43364A] dark:text-[#FDF5E8] mb-10">
          <h3>My Skills</h3>
          <BiMenuAltLeft color={textColor} />
        </header>
        <section className="flex gap-8 flex-wrap">
          <div
            className="flex flex-col gap-4 max-w-[400px] px-12 py-4 items-center shadow-md bg-[#FEFBFF] dark:bg-[#272527]
          rounded-md"
          >
            <DiCss3 size={100} color={useCurrentColor(textColor)} />
            <p className="para text-[#43364A] dark:text-[#FDF5E8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              odit fugit dicta necessitatibus, maiores atque tempore facilis
              impedit aliquid quia.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 max-w-[400px] px-12 py-4 items-center shadow-md bg-[#FEFBFF] dark:bg-[#272527]
          rounded-md"
          >
            <DiJavascript1 size={100} color={useCurrentColor(textColor)} />
            <p className="para text-[#43364A] dark:text-[#FDF5E8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              odit fugit dicta necessitatibus, maiores atque tempore facilis
              impedit aliquid quia.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 max-w-[400px] px-12 py-4 items-center shadow-md bg-[#FEFBFF] dark:bg-[#272527]
          rounded-md"
          >
            <DiReact size={100} color={useCurrentColor(textColor)} />
            <p className="para text-[#43364A] dark:text-[#FDF5E8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              odit fugit dicta necessitatibus, maiores atque tempore facilis
              impedit aliquid quia.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 max-w-[400px] px-12 py-4 items-center shadow-md bg-[#FEFBFF] dark:bg-[#272527]
          rounded-md"
          >
            <SiTailwindcss size={100} color={useCurrentColor(textColor)} />
            <p className="para text-[#43364A] dark:text-[#FDF5E8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              odit fugit dicta necessitatibus, maiores atque tempore facilis
              impedit aliquid quia.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 max-w-[400px] px-12 py-4 items-center shadow-md bg-[#FEFBFF] dark:bg-[#272527]
          rounded-md"
          >
            <DiNodejs size={100} color={useCurrentColor(textColor)} />
            <p className="para text-[#43364A] dark:text-[#FDF5E8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              odit fugit dicta necessitatibus, maiores atque tempore facilis
              impedit aliquid quia.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 max-w-[400px] px-12 py-4 items-center shadow-md bg-[#FEFBFF] dark:bg-[#272527]
          rounded-md"
          >
            <AiFillHtml5 size={100} color={useCurrentColor(textColor)} />
            <p className="para text-[#43364A] dark:text-[#FDF5E8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              odit fugit dicta necessitatibus, maiores atque tempore facilis
              impedit aliquid quia.
            </p>
          </div>
        </section>
      </section>
    </PageContainer>
  );
};

export default Services;
