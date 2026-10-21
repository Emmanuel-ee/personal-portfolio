import React, { useState } from 'react';
import Image from 'next/image';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
           // eslint-disable-next-line react/jsx-key
        icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaPython />, <FaReact />, <SiNextdotjs />, <SiFramer />, <FaWordpress />, ],
      },
      {
        title: 'UI/UX Design',
        // eslint-disable-next-line react/jsx-key
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full stack Developer - Toptal',
        stage: 'Mar 2020 - Date',
      },
      {
        title: 'Solutions Architect - HypercoreIt',
        stage: 'Mar 2020 - Sep 2022',
      },
      {
        title: 'Project Manager - N.N.P.C',
        stage: 'Mar 2019 - Nov 2019',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Bsc. Mechanical Engineering',
        stage: '2017',
      },
      {
        title: 'Boot camp Fullstack-Development',
        stage: '2020',
      },
      {
        title: 'Msc Engineering Management',
        stage: '2021',
      },
      {
        title: 'Msc. Business Administration',
        stage: '2022',
      },

    ],
  },
];

import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <main className='min-h-full bg-primary/30 px-4 pb-32 pt-28 text-center sm:px-8 sm:pt-32 xl:px-0 xl:py-32 xl:text-left'>
      <Circles />
      <div className='container mx-auto flex min-h-full flex-col items-center gap-x-6 gap-y-8 xl:flex-row'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            5 years ago, I began freelancing as a developer. Since then, I&apos;ve
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* awards */}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex h-auto min-h-[360px] w-full flex-col xl:h-[480px] xl:max-w-[48%]'
        >
          <div role='tablist' aria-label='About information' className='mx-auto mb-4 flex gap-x-4 sm:gap-x-8 xl:mx-0'>
            {aboutData.map((item, itemIndex) => {
              return (
                <button
                  type='button'
                  role='tab'
                  id={`about-tab-${itemIndex}`}
                  aria-selected={index === itemIndex}
                  aria-controls='about-panel'
                  key={itemIndex}
                  className={`relative min-h-11 px-1 text-sm capitalize after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:text-lg ${index === itemIndex ? 'text-accent after:w-full after:bg-accent' : 'text-white/70 after:w-8 after:bg-white/70'}`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div id='about-panel' role='tabpanel' aria-labelledby={`about-tab-${index}`} className='flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex w-full max-w-full flex-col items-center gap-x-2 text-white/60 md:flex-row md:justify-center xl:justify-start'
                >
                  {/* title */}
                  <div className='mb-2 font-light md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                   {/* eslint-disable-next-line react/jsx-key */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <Image
            src={'/profile-picture.png'}
            width={100}
            height={60}
            className='w-40 h-40 rounded-full'
            alt='Profile Picture'
          />
        </motion.div>
      </div>
    </main>
  );
};

export default About;
