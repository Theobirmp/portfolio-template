import PageContainer from '../components/PageContainer';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useTextColor } from '../hooks/useTextColor';
import ContactInfo from '../components/ContactInfo';
import Skills from '../components/Skills';
import AboutCard from '../components/AboutCard';
const About = () => {
  const { textColor } = useTextColor();
  return (
    <PageContainer>
      <article className="flex flex-col gap-10">
        <section>
          <header className="flex flex-col gap-2 heading1 text-[#43364A] dark:text-[#FDF5E8]">
            <h3>About Me</h3>
            <BiMenuAltLeft color={textColor} />
          </header>
          <h4 className="text-[#43364A] dark:text-[#FDF5E8]">
            I am Fanis and a Web Developer
          </h4>
          <p className="para text-[#43364A] dark:text-[#FDF5E8]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            tempora officiis pariatur deserunt fugiat perferendis dicta amet,
            odit quas voluptatem.
          </p>
        </section>
        <section
          className="text-[#43364A] dark:text-[#FDF5E8] para
        flex flex-col lg:flex-row gap-8"
        >
          <ContactInfo />
          <Skills />
        </section>
        <section className="flex flex-col lg:flex-row gap-4">
          <AboutCard />
          <AboutCard />
        </section>
      </article>
    </PageContainer>
  );
};

export default About;
