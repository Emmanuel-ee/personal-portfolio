import '../styles/globals.css';

// components
import Layout from '../components/Layout';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Layout>
      <AnimatePresence mode='wait' initial={false}>
        <motion.main
          key={router.route}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: shouldReduceMotion ? 0.01 : 0.16,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          exit={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : -3,
            transition: {
              duration: shouldReduceMotion ? 0.01 : 0.1,
              ease: 'easeIn',
            },
          }}
          className='min-h-full'
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
