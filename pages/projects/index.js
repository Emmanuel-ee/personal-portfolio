import WorkSlider, { featuredProjects, repositories } from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <main className='min-h-full bg-primary/30 px-5 pb-32 pt-28 sm:px-10 sm:pt-32 xl:px-16'>
      <Circles />
      <div className='container relative z-10 mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-8 flex flex-col gap-6 border-b border-white/15 pb-7 lg:flex-row lg:items-end lg:justify-between'
        >
          <div className='max-w-2xl'>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent'>Selected work</p>
            <h1 className='mb-3 text-4xl font-semibold leading-tight text-white sm:text-5xl'>Projects</h1>
            <p>
              A selection across software, web development, and interactive products. For more
              engineering work, visit my GitHub archive.
            </p>
          </div>
          <a
            href='https://github.com/Emmanuel-ee'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-11 shrink-0 items-center gap-2 border border-white/25 px-4 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
          >
            Browse GitHub <span aria-hidden='true'>↗</span>
          </a>
        </motion.div>

        <nav aria-label='Jump to a featured project' className='mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm'>
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className='inline-flex items-center gap-2 text-white/65 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
              <span className='font-mono text-xs text-accent'>0{index + 1}</span>
              {project.title}
            </a>
          ))}
        </nav>

        <motion.div
          variants={fadeIn('up', 0.35)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <WorkSlider projects={featuredProjects} />
        </motion.div>

        <section aria-labelledby='repository-archive-heading' className='mt-12 border-t border-white/15 pt-8'>
          <div className='mb-5 flex flex-wrap items-end justify-between gap-3'>
            <div>
              <p className='mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
                Full archive
              </p>
              <h2 id='repository-archive-heading' className='text-2xl font-semibold text-white sm:text-3xl'>
                Public repositories
              </h2>
            </div>
            <p className='text-sm text-white/50'>{repositories.length} repositories</p>
          </div>
          <ul className='grid gap-2 sm:grid-cols-2 xl:grid-cols-3'>
            {repositories.map((repository) => (
              <li key={repository.name}>
                <a
                  href={`https://github.com/Emmanuel-ee/${repository.name}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex min-h-14 items-center justify-between gap-3 border border-white/10 bg-secondary/60 px-4 py-3 transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
                >
                  <span className='break-all text-sm font-medium text-white'>{repository.name}</span>
                  <span className='shrink-0 text-right text-xs text-white/45'>
                    {repository.fork ? 'Fork' : repository.language || 'Repository'}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Work;
