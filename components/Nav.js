// icons
import {
  HiHome,
  HiUser,
  HiCalculator,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  {
    name: 'projects',
    path: '/projects',
    icon: <HiCalculator />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      aria-label='Main navigation'
      className='fixed inset-x-0 bottom-0 z-50 flex justify-center xl:inset-y-0 xl:left-auto xl:right-[2%] xl:w-16 xl:items-center'
    >
      <div
        className='flex min-h-[68px] w-full max-w-lg items-center justify-around border-t border-white/10 bg-primary/95 px-2 pb-[env(safe-area-inset-bottom)] pt-1 text-2xl backdrop-blur-xl xl:min-h-0 xl:w-16 xl:max-w-md xl:flex-col xl:justify-center xl:gap-y-10 xl:border-0 xl:bg-white/10 xl:px-0 xl:py-8 xl:text-xl xl:rounded-full'
      >
        {navData.map((link) => {
          return (
            <Link
              aria-label={link.name}
              aria-current={link.path === pathname ? 'page' : undefined}
              className={`${link.path === pathname ? 'text-accent' : 'text-white/75'} group relative flex min-h-12 min-w-16 flex-col items-center justify-center gap-1 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:min-h-0 xl:min-w-0 xl:flex-row`}
              href={link.path}
              key={link.path}
            >
              <span aria-hidden='true' className='flex items-center justify-center'>
                {link.icon}
              </span>
              <span className='text-[10px] font-semibold uppercase leading-none tracking-wider xl:hidden'>
                {link.name}
              </span>
              <div className='absolute right-full top-1/2 hidden -translate-y-1/2 pr-3 xl:group-hover:flex'>
                <div className='rounded-sm bg-white px-2 py-1.5 text-[12px] font-semibold leading-none capitalize text-primary'>
                  {link.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
