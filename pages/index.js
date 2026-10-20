import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-primary'>
      <Header />
      <main className='container relative z-10 mx-auto px-5 pb-28 pt-28 sm:px-10 xl:px-16 xl:pb-16 xl:pt-36'>
        <div className='grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-20'>
          <div>
            <motion.p
              variants={fadeIn('down', 0.1)}
              initial='hidden'
              animate='show'
              className='mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent'
            >
              Software · Product · Systems
            </motion.p>
          <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              className='mb-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl xl:text-7xl'
            >
              I make useful things for a living.
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              className='mb-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg'
            >
              I&apos;m Emmanuel Cyprian, a software engineer and builder working across digital
              products, cloud systems, data, and applied AI. I bring ideas from first sketch to
              dependable release.
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              className='flex flex-wrap items-center gap-3'
            >
              <Link
                href='/projects'
                className='inline-flex h-12 items-center gap-3 bg-accent px-5 font-semibold text-primary transition-colors hover:bg-white'
              >
                Explore my work <HiArrowUpRight aria-hidden='true' />
              </Link>
              <Link
                href='/about'
                className='inline-flex h-12 items-center gap-2 border border-white/20 px-5 text-sm text-white transition-colors hover:border-accent hover:text-accent'
              >
                More about me <HiArrowDownRight aria-hidden='true' />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.35)}
            initial='hidden'
            animate='show'
            className='relative mx-auto w-full max-w-[440px] xl:mr-0'
          >
            <div className='absolute -left-4 -top-4 h-full w-full border border-accent/50 sm:-left-5 sm:-top-5' />
            <div className='relative aspect-[4/5] overflow-hidden bg-secondary'>
              <Image
                src='/profile-picture.png'
                alt='Emmanuel Cyprian'
                fill
                priority
                sizes='(min-width: 1280px) 440px, (min-width: 640px) 70vw, 88vw'
                className='object-cover'
              />
            </div>
            <p className='mt-4 text-xs font-medium uppercase tracking-[0.16em] text-white/50'>
              Emmanuel Cyprian <span className='px-2 text-accent'>/</span> Engineer &amp; builder
            </p>
          </motion.div>
        </div>

        <section aria-labelledby='practice-heading' className='mt-16 border-t border-white/15 pt-6 xl:mt-20'>
          <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
            <h2 id='practice-heading' className='text-xs font-semibold uppercase tracking-[0.18em] text-white/45'>
              A broad practice
            </h2>
            <ul className='grid gap-3 text-sm text-white/80 sm:grid-cols-2 sm:gap-x-12 xl:grid-cols-4'>
              <li>Software &amp; web development</li>
              <li>Product &amp; interface design</li>
              <li>Cloud &amp; solution architecture</li>
              <li>Data, research &amp; applied AI</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
