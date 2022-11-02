import React, { useRef, useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import PageContainer from '../components/PageContainer';
import {
  useCurrentBgColor,
  useCurrentTextColor,
} from '../hooks/useCurrentTextColor';
import { useTextColor } from '../hooks/useTextColor';

const WORDS_ALLOWED = 5;

const Contact = () => {
  const { textColor } = useTextColor();
  const [wordsTyped, setWordsTyped] = useState('');
  const ref = useRef(null);
  const handleMessage = (e: any) => {
    setWordsTyped(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  return (
    <PageContainer>
      <section className="flex flex-col items-center w-[100%]">
        <header className="self-start flex flex-col gap-2 heading1 text-[#43364A] dark:text-[#FDF5E8] mb-10">
          <h3>Contact </h3>
          <BiMenuAltLeft color={textColor} />
        </header>
        <h3 className={`${useCurrentTextColor(textColor)} heading3 mb-10`}>
          Send Me an Email
        </h3>
        <form
          action=""
          className="relative flex flex-col gap-4 w-[100%] max-w-[1000px]"
        >
          <div className="flex flex-col md:flex-row gap-2 ">
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
              ref={ref}
              onChange={handleMessage}
              className="relative px-4 text-[#43364A] dark:text-[#FDF5E8] bg-[#FEFBFF]
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
            className={`${
              wordsTyped.length > WORDS_ALLOWED
                ? 'bg-red-900 text-white pointer-events-none opacity-80'
                : ''
            } px-12 py-2 ${useCurrentBgColor(
              textColor
            )} rounded-full text-[#43364A] dark:text-[#FDF5E8] max-w-[200px] self-center text-2xl`}
          >
            Submit
          </button>
          <span
            className={`${
              wordsTyped.length > WORDS_ALLOWED ? 'text-red-500' : ''
            } absolute bottom-[65px] text-[#43364A] dark:text-[#FDF5E8] left-[10px]`}
          >
            {wordsTyped.length}{' '}
            <span className="text-[#43364A] dark:text-[#FDF5E8]">/100</span>
          </span>
        </form>
      </section>
    </PageContainer>
  );
};

export default Contact;
