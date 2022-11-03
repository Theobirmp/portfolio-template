import { useCurrentBgColor } from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';
import { contact } from '../data/about';
import resume from '../data/BirmpilisTheofanisResume.pdf';
import { Link } from 'react-router-dom';
import { useCurrentTextColor } from '../hooks/useCurrentTextColor';
const ContactInfo = () => {
  const { textColor } = useTextColor();
  return (
    <div className="flex flex-col gap-2  w-[50%]">
      <h3
        className={`heading2 mb-3 min-w-max ${useCurrentTextColor(textColor)}`}
      >
        Contact Info
      </h3>
      <div className="divider min-w-max">
        <span className="font-bold">Email: </span>
        <a href={`mailto:'${contact.email}`}>{contact.email}</a>
      </div>
      <div className="divider min-w-max">
        <span className="font-bold">LinkedIn: </span>
        <a href={`${contact.linkedin}`}>My Profile</a>
      </div>
      <div className="divider min-w-max">
        <span className="font-bold">Telephone: </span>
        <a href="tel:6986615856">{contact.telephone}</a>
      </div>
      <div className="divider min-w-max">
        <span className="font-bold">Open for Work: </span>
        <span>{contact.availableToWork}</span>
      </div>
      <div className="self-start mt-8 flex gap-2">
        <a
          href={resume}
          target="_blank"
          className={`${useCurrentBgColor(
            textColor
          )} rounded-full px-4 py-2 text-[#FDF5E8] font-bold min-w-max`}
        >
          Download CV
        </a>
        <Link
          to="/contact"
          className={`${useCurrentBgColor(
            textColor
          )} rounded-full px-4 py-2 text-[#FDF5E8] font-bold min-w-max`}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
