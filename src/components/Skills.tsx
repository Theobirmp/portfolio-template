import { skills } from '../data/about';
import { useCurrentTextColor } from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';

const Skills = () => {
  const { textColor } = useTextColor();
  return (
    <section className="lg:w-[50%]">
      <header>
        <h3 className={`${useCurrentTextColor(textColor)} heading2 mb-4`}>
          Soft Skills
        </h3>
      </header>
      <div className="flex flex-col gap-4 ">
        {skills.map((skill) => {
          return (
            <div className="flex flex-col gap-2 divider">
              <h4 className={` text-[#43364A] dark:text-[#FDF5E8] heading4`}>
                {skill.title}
              </h4>
              <p className="para">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
