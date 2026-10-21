// fonts
import { Sora } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi2';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';
import TopLeftImg from '../components/TopLeftImg';
import AIChatAssistant from '../components/AIChatAssistant';

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <title>Emmanuel Cyprian Ememe | AI &amp; Machine Learning Software Engineer</title>
        <meta
          name='description'
          content='Emmanuel Cyprian Ememe is an AI and machine learning software engineer and consultant, building practical AI solutions, ML pipelines, and full-stack software.'
        />
      </Head>
      <TopLeftImg />
      <Link
        href='/'
        aria-label="Return to Emmanuel's home page"
        className='fixed left-4 top-4 z-[60] inline-flex min-h-11 items-center gap-2 text-white transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:left-8 sm:top-6'
      >
        <HiHome className='text-lg text-accent' aria-hidden='true' />
        <span className='text-xs font-semibold uppercase tracking-[0.12em] sm:hidden'>Home</span>
        <span className='hidden text-sm font-semibold sm:inline'>Emmanuel</span>
      </Link>
      <Nav />
      {children}
      <AIChatAssistant />
    </div>
  );
};

export default Layout;
