// fonts
import { Sora } from '@next/font/google';
import Head from 'next/head';

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
        <title>Emmanuel Cyprian | Software Engineer</title>
        <meta
          name='description'
          content='Emmanuel Cyprian - Software Engineer building AI-powered products, machine learning systems, and immersive 3D web experiences.'
        />
      </Head>
      <TopLeftImg />
      <Nav />
      {children}
      <AIChatAssistant />
    </div>
  );
};

export default Layout;
