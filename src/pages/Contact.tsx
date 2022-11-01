import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import PageContainer from '../components/PageContainer';
import {
  useCurrentBgColor,
  useCurrentTextColor,
} from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';
const Contact = () => {
  const { textColor } = useTextColor();
  return (
    <PageContainer>
      <section className="flex flex-col justify-center items-center border w-[100%]">
        <header className="self-start flex flex-col gap-2 heading1 text-[#43364A] dark:text-[#FDF5E8]">
          <h3>Contact Me</h3>
          <BiMenuAltLeft color={textColor} />
        </header>
        <h3 className={`${useCurrentTextColor(textColor)} heading3`}>
          Send Me an Email
        </h3>
        <form action="" className="flex flex-col gap-4 w-[100%] max-w-[1000px]">
          <div className="flex gap-2 ">
            <div className="flex flex-col gap-2 w-[100%]">
              <label
                className="text-[#43364A] dark:text-[#FDF5E8] ml-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="px-4 text-[#43364A] dark:text-[#FDF5E8] 
                bg-[#FEFBFF] dark:bg-[#272527] rounded-full shadow-md
                h-[40px]"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2 w-[100%]">
              <label
                className="text-[#43364A] dark:text-[#FDF5E8] ml-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="px-4 text-[#43364A] dark:text-[#FDF5E8] 
                bg-[#FEFBFF] dark:bg-[#272527] rounded-full shadow-md
                h-[40px]"
                type="email"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-[#43364A] dark:text-[#FDF5E8] ml-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="px-4 text-[#43364A] dark:text-[#FDF5E8] 
              bg-[#FEFBFF] dark:bg-[#272527] rounded-full shadow-md
              h-[40px]"
              type="text"
              id="subject"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-[#43364A] dark:text-[#FDF5E8] ml-2"
              htmlFor="messaeg"
            >
              Message
            </label>
            <textarea
              className="px-4 text-[#43364A] dark:text-[#FDF5E8] bg-[#FEFBFF]
               dark:bg-[#272527] rounded-lg shadow-md
               "
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`px-12 py-2 ${useCurrentBgColor(
              textColor
            )} rounded-full text-[#43364A] dark:text-[#FDF5E8] max-w-[200px] self-center text-2xl`}
          >
            Submit
          </button>
        </form>
      </section>
    </PageContainer>
  );
};

export default Contact;
