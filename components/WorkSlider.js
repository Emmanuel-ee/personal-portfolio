import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';

export const featuredProjects = [
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

export const repositories = [
  { name: 'personal-portfolio', language: 'JavaScript' },
  { name: 'Nasa-Project', language: 'JavaScript' },
  { name: 'Trillo', language: 'SCSS' },
  { name: 'Nexter', language: 'CSS' },
  { name: 'Natours', language: 'CSS' },
  { name: 'ML-Data-Science', language: 'Jupyter Notebook' },
  { name: 'coventrycelebkids', language: 'JavaScript' },
  { name: 'coventrycelebkidsinstructors', language: 'JavaScript' },
  { name: 'cci' },
  { name: 'Reality', language: 'JavaScript' },
  { name: 'software-engineer-community', fork: true },
  { name: 'c-.net-app' },
  { name: 'self-calibrating', language: 'JavaScript' },
  { name: 'c', language: 'C' },
  { name: 'cicd-react', language: 'JavaScript' },
  { name: 'drawing-pad', language: 'JavaScript' },
  { name: 'self-calibrating-02', language: 'JavaScript' },
  { name: 'fast-api', language: 'Python' },
  { name: 'nest-prisma' },
  { name: 'Typescript-express-server', language: 'TypeScript' },
  { name: 'C-template', language: 'C++' },
  { name: 'Web-sockets-graphql', language: 'JavaScript' },
  { name: 'graphql', language: 'JavaScript' },
  { name: 'AWS-SES-EC2-CDK-TYPESCRIPT', language: 'TypeScript' },
  { name: 'AWS-SNS-SOLUTION', language: 'TypeScript' },
  { name: 'web-mapping-application-Geoserver' },
  { name: 'JAVA-REACT-SPRINGBOOT', language: 'Java' },
  { name: 'Test', language: 'TypeScript' },
  { name: 'myCompany', language: 'CSS' },
  { name: 'My-portfolio', language: 'JavaScript' },
  { name: 'terraform-exercise' },
  { name: 'Docker-node-mongodb', language: 'JavaScript' },
  { name: 'space-finder-frontend', language: 'TypeScript' },
  { name: 'space-finder-backend', language: 'TypeScript' },
  { name: 'cdk-jest-test', language: 'TypeScript' },
  { name: 'Developer', language: 'JavaScript' },
  { name: 'web-dev' },
  { name: 'Keeper-App-Motoko-Backend-ICP', language: 'JavaScript' },
  { name: 'Defi-ICP', language: 'JavaScript' },
  { name: 'icp-examples', fork: true },
  { name: 'Keeper-App', language: 'JavaScript' },
  { name: 'Secrets---Authentication_and_Security', language: 'EJS' },
  { name: 'RESTapi-Sample', language: 'JavaScript' },
  { name: 'aws-cdk-testing-examples', fork: true },
  { name: 'Blog', language: 'JavaScript' },
  { name: 'todo-list--serverSide-ejs', language: 'JavaScript' },
  { name: 'mongoose', language: 'JavaScript' },
  { name: 'mongoDbDriver-Node', language: 'JavaScript' },
  { name: 'Task-Manager', language: 'JavaScript' },
  { name: 'node', language: 'JavaScript' },
  { name: 'Knowledge', language: 'JavaScript' },
  { name: 'Study', language: 'JavaScript' },
  { name: 'openvault', fork: true },
];

const WorkSlider = ({ projects = featuredProjects }) => {
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
