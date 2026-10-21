import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';

export const projects = [
  {
    id: 'nasa-project',
    title: 'NASA Project',
    category: 'Software project',
    path: '/Nasa.jpg',
    url: 'https://nasa-project-wxjm.onrender.com/launch',
  },
  {
    id: 'self-calibrating-interface',
    title: 'Self-calibrating Interface',
    category: 'Interactive product',
    path: '/Interface01.jpg',
    url: 'https://emmanuel-ee.github.io/self-calibrating/',
  },
  {
    id: 'self-calibrating-interface-02',
    title: 'Self-calibrating Interface 02',
    category: 'Interactive product',
    path: '/Interface02.png',
    url: 'https://emmanuel-ee.github.io/self-calibrating-02/',
  },
];

const WorkSlider = () => {
  return (
    <section aria-label='Selected projects' className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
      {projects.map((project, index) => (
        <article id={project.id} key={project.id} className='scroll-mt-8'>
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${project.title}, opens in a new tab`}
            className='group block h-full border border-white/10 bg-secondary transition-colors hover:border-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
          >
            <div className='relative aspect-[4/3] overflow-hidden bg-primary'>
              <Image
                src={project.path}
                fill
                sizes='(min-width: 1280px) 32vw, (min-width: 640px) 48vw, 92vw'
                alt={`${project.title} preview`}
                className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
              />
            </div>
            <div className='flex min-h-24 items-center justify-between gap-4 px-4 py-4'>
              <div>
                <p className='mb-1 text-xs font-mono text-accent'>0{index + 1} / {project.category}</p>
                <h2 className='text-base font-semibold text-white'>{project.title}</h2>
              </div>
              <HiArrowUpRight
                className='shrink-0 text-xl text-white/60 transition-colors group-hover:text-accent'
                aria-hidden='true'
              />
            </div>
          </a>
        </article>
      ))}
    </section>
  );
};

export default WorkSlider;
