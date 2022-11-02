import { useCurrentTextColor } from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';

const Skills = () => {
  const { textColor } = useTextColor();
  return (
    <section className="lg:w-[50%]">
      <header>
        <h3 className="heading2 mb-4">Skills</h3>
      </header>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 divider">
          <h4 className={`${useCurrentTextColor(textColor)} heading4`}>
            Protocols
          </h4>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            harum.
          </p>
        </div>
        <div className="flex flex-col gap-2 divider">
          <h4 className={`${useCurrentTextColor(textColor)} heading4`}>
            Protocols
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            harum.
          </p>
        </div>
        <div className="flex flex-col gap-2 divider">
          <h4 className={`${useCurrentTextColor(textColor)} heading4`}>
            Protocols
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            harum.
          </p>
        </div>
        <div className="flex flex-col gap-2 divider">
          <h4 className={`${useCurrentTextColor(textColor)} heading4`}>
            Protocols
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            harum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
