import PageContainer from '../components/PageContainer';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useTextColor } from '../hooks/useTextColor';
import ContactInfo from '../components/ContactInfo';
import Skills from '../components/Skills';
import AboutCard from '../components/AboutCard';
import about, { experienceCard } from '../data/about';
import { educationCard } from '../data/about';
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
          <h4 className="text-[#43364A] dark:text-[#FDF5E8] mt-10 heading4">
            {about.header}
          </h4>
          {/* <p className="para text-[#43364A] dark:text-[#FDF5E8]">
            {about.header}
          </p> */}
        </section>
        <section
          className="text-[#43364A] dark:text-[#FDF5E8] para
        flex flex-col lg:flex-row gap-8"
        >
          <ContactInfo />
          <Skills />
        </section>
        <section className="flex flex-col lg:flex-row gap-4">
          <AboutCard title={educationCard.title} data={educationCard.data} />
          <AboutCard title={experienceCard.title} data={experienceCard.data} />
        </section>
      </article>
    </PageContainer>
  );
};

export default About;
