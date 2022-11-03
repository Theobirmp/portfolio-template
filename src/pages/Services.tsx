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
import SingleService from '../components/SingleService';
import skills from '../data/services';
const Services = () => {
  const { textColor } = useTextColor();
  return (
    <PageContainer>
      <section>
        <header className="self-start flex flex-col gap-2 heading1 text-[#43364A] dark:text-[#FDF5E8] mb-10">
          <h3>My Skills</h3>
          <BiMenuAltLeft color={textColor} />
        </header>
        <section className="flex justify-center gap-8 flex-wrap">
          <SingleService
            text={skills.html}
            icon={<AiFillHtml5 size={100} color={useCurrentColor(textColor)} />}
          />
          <SingleService
            text={skills.css}
            icon={<DiCss3 size={100} color={useCurrentColor(textColor)} />}
          />
          <SingleService
            text={skills.tailwind}
            icon={
              <SiTailwindcss size={100} color={useCurrentColor(textColor)} />
            }
          />
          <SingleService
            text={skills.js}
            icon={
              <DiJavascript1 size={100} color={useCurrentColor(textColor)} />
            }
          />
          <SingleService
            text={skills.react}
            icon={<DiReact size={100} color={useCurrentColor(textColor)} />}
          />
          <SingleService
            text={skills.node}
            icon={<DiNodejs size={100} color={useCurrentColor(textColor)} />}
          />
        </section>
      </section>
    </PageContainer>
  );
};

export default Services;
