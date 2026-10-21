import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { fadeIn } from '../../variants';

const getYearsOfExperience = () => {
  const startDate = new Date(2020, 2, 1);
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();

  if (
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() &&
      today.getDate() < startDate.getDate())
  ) {
    years -= 1;
  }

  return years;
};

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'AI & Machine Learning',
        stack: ['Python', 'Applied AI', 'ML pipelines', 'AI-powered interfaces', 'Intelligent automation'],
      },
      {
        title: 'Software Engineering',
        stack: ['JavaScript', 'React', 'Next.js', 'HTML', 'CSS', 'WordPress', 'APIs'],
      },
      {
        title: 'Consulting & Architecture',
        stack: ['AI & software consulting', 'Technical discovery', 'Solution architecture', 'Cloud systems', 'Product delivery'],
      },
      {
        title: 'Product & Design',
        stack: ['Figma', 'Framer', 'Adobe XD', 'Photoshop'],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer - Office for National Statistics (ONS)',
        stage: '2020 - Present',
      },
      {
        title: 'Full stack Developer - Toptal',
        stage: 'Mar 2020 - Present',
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
    title: 'education',
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

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className='relative min-h-full overflow-hidden bg-primary/30 px-4 pb-32 pt-28 sm:px-8 sm:pt-32 xl:px-0 xl:py-32'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,241,105,0.09),transparent_42%)]'
      />
      <div className='container relative mx-auto max-w-6xl'>
        <section className='grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>
          <div className='order-2 lg:order-1'>
            <motion.p
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              animate='show'
              className='mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent lg:justify-start'
            >
              <span className='h-px w-8 bg-accent' aria-hidden='true' />
              AI &amp; machine learning engineer · Consultant
            </motion.p>
            <motion.h1
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              className='mx-auto mb-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:mx-0 xl:text-7xl'
            >
              I engineer practical{' '}
              <span className='text-accent'>AI and machine learning solutions.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              animate='show'
              className='mx-auto mb-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg lg:mx-0'
            >
              I&apos;m Emmanuel, a software engineer at the Office for National
              Statistics. I help teams explore where AI can make a difference,
              then build and integrate machine-learning capabilities into
              reliable software. I offer technical discovery and consulting
              alongside hands-on engineering across Python, data pipelines,
              full-stack applications, APIs, and cloud architecture.
            </motion.p>
            <motion.div
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              className='flex flex-wrap justify-center gap-3 lg:justify-start'
            >
              <Link
                href='/projects'
                className='inline-flex min-h-12 items-center gap-3 bg-accent px-5 font-semibold text-primary transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
              >
                Explore my work <HiArrowUpRight aria-hidden='true' />
              </Link>
              <Link
                href='/contact'
                className='inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 font-medium text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              >
                Send me a message <HiArrowRight aria-hidden='true' />
              </Link>
              <a
                href='https://calendar.app.google/DZNvXZdjJ7vQ5paF8'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-12 items-center gap-3 border border-accent/40 px-5 font-medium text-accent transition-colors hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              >
                Book a free 30-minute call <HiArrowUpRight aria-hidden='true' />
              </a>
            </motion.div>
          </div>

          <motion.figure
            variants={fadeIn('left', 0.25)}
            initial='hidden'
            animate='show'
            className='relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none'
          >
            <div className='absolute -right-3 -top-3 h-24 w-24 border-r border-t border-accent/60 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32' aria-hidden='true' />
            <div className='relative aspect-[4/4.5] overflow-hidden border border-white/10 bg-secondary'>
              <Image
                src='/profile-picture.png'
                alt='Emmanuel Cyprian Ememe'
                fill
                priority
                sizes='(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 90vw'
                className='object-cover'
              />
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7'>
                <figcaption className='border-l-2 border-accent pl-4'>
                  <p className='text-base font-semibold text-white'>
                    Emmanuel Cyprian Ememe
                  </p>
                  <p className='mt-1 text-sm text-white/60'>
                    AI engineering · machine learning · consulting
                  </p>
                </figcaption>
              </div>
            </div>
            <div className='absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-accent/60 sm:-bottom-5 sm:-left-5 sm:h-24 sm:w-24' aria-hidden='true' />
          </motion.figure>
        </section>

        <motion.section
          variants={fadeIn('up', 0.45)}
          initial='hidden'
          animate='show'
          aria-label='Experience at a glance'
          className='mt-16 grid grid-cols-1 border-y border-white/15 sm:grid-cols-3'
        >
          {[
            { value: getYearsOfExperience(), label: 'Years of experience' },
            { value: 30, label: 'Satisfied clients' },
            { value: 50, label: 'Finished projects' },
          ].map((stat, statIndex) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center gap-3 py-5 sm:py-6 ${statIndex > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}
            >
              <span className='text-3xl font-semibold tracking-tight text-accent sm:text-4xl'>
                <CountUp start={0} end={stat.value} duration={4} />+
              </span>
              <span className='max-w-[110px] text-xs uppercase leading-relaxed tracking-[0.12em] text-white/55'>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.section>

        <section className='mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent'>
              The person behind the work
            </p>
            <h2 className='mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl'>
              AI that solves the right problem.
            </h2>
            <p className='max-w-lg text-sm leading-7 text-white/60 sm:text-base'>
              I combine software engineering with AI and machine learning
              practice to help teams move from an opportunity or early idea to
              a considered technical approach. Through consulting and hands-on
              delivery, I focus on building useful, maintainable solutions
              grounded in real user and business needs.
            </p>
          </div>

          <div className='border border-white/10 bg-primary/40 p-5 sm:p-8'>
            <div
              role='tablist'
              aria-label='About information'
              className='mb-7 flex flex-wrap gap-x-6 gap-y-2 border-b border-white/10'
            >
              {aboutData.map((item, itemIndex) => (
                <button
                  type='button'
                  role='tab'
                  id={`about-tab-${itemIndex}`}
                  aria-selected={index === itemIndex}
                  aria-controls='about-panel'
                  key={item.title}
                  className={`relative min-h-12 text-sm capitalize transition-colors after:absolute after:-bottom-px after:left-0 after:h-0.5 after:transition-all hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${index === itemIndex ? 'text-accent after:w-full after:bg-accent' : 'text-white/55 after:w-0 after:bg-accent'}`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div
              id='about-panel'
              role='tabpanel'
              tabIndex={0}
              aria-labelledby={`about-tab-${index}`}
              className='space-y-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
              {aboutData[index].info.map((item) => (
                <div
                  key={item.title}
                  className='flex flex-col gap-3 border-b border-white/10 pb-5 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between'
                >
                  <div>
                    <h3 className='font-medium text-white'>{item.title}</h3>
                    {item.stage && (
                      <p className='mt-1 text-sm text-white/45'>{item.stage}</p>
                    )}
                  </div>
                  {item.stack && (
                    <div
                      className='flex flex-wrap gap-2 sm:max-w-[65%] sm:justify-end'
                      aria-label={`${item.title} skills and technologies`}
                    >
                      {item.stack.map((skill) => (
                        <span
                          key={skill}
                          className='border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/65 transition-colors hover:border-accent/60 hover:text-accent'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
