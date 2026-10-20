// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 flex w-full items-center px-5 sm:px-10 xl:h-[90px] xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex justify-end items-center py-8'>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
