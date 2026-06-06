// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
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
