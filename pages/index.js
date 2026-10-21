import Link from 'next/link';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';
import WorkSlider from '../components/WorkSlider';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-primary'>
      <Header />
      <main className='container relative z-10 mx-auto px-5 pb-32 pt-28 sm:px-10 xl:px-16 xl:pt-32'>
        <section className='border-b border-white/15 pb-8 sm:pb-10'>
          <div className='max-w-5xl'>
            <motion.p
              variants={fadeIn('down', 0.1)}
              initial='hidden'
              animate='show'
              className='mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent'
            >
              Selected work · Product engineering
            </motion.p>
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              className='mb-5 max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-6xl xl:text-7xl'
            >
              Software, products, and systems made for real-world use.
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              className='mb-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg'
            >
              A cross-disciplinary portfolio spanning software development, interactive
              experiences, cloud systems, data, and applied AI, from early concepts through
              dependable delivery.
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
                View all projects <HiArrowUpRight aria-hidden='true' />
              </Link>
              <Link
                href='/contact'
                className='inline-flex h-12 items-center gap-2 border border-white/20 px-5 text-sm text-white transition-colors hover:border-accent hover:text-accent'
              >
                Discuss a project <HiArrowRight aria-hidden='true' />
              </Link>
            </motion.div>
          </div>
        </section>

        <section aria-labelledby='selected-work-heading' className='pt-8 sm:pt-10'>
          <div className='mb-5 flex flex-wrap items-end justify-between gap-3'>
            <div>
              <p className='mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45'>
                Across disciplines
              </p>
              <h2 id='selected-work-heading' className='text-2xl font-semibold text-white sm:text-3xl'>
                Selected work
              </h2>
            </div>
            <Link
              href='/projects'
              className='inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
              Explore the archive <HiArrowUpRight aria-hidden='true' />
            </Link>
          </div>
          <motion.div
            variants={fadeIn('up', 0.15)}
            initial='hidden'
            animate='show'
            className='w-full'
          >
            <WorkSlider />
          </motion.div>
        </section>

        <section aria-labelledby='practice-heading' className='mt-10 border-t border-white/15 pt-6'>
          <h2 id='practice-heading' className='mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45'>
            Practice areas
          </h2>
          <ul className='grid gap-3 text-sm text-white/80 sm:grid-cols-2 xl:grid-cols-4'>
            <li>Software &amp; web development</li>
            <li>Product &amp; interface design</li>
            <li>Cloud &amp; solution architecture</li>
            <li>Data, research &amp; applied AI</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
