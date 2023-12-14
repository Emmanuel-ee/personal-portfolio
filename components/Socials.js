import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiBehanceLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </a>
      <a href='https://github.com/Emmanuel-ee' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </a>
      <a href='https://www.linkedin.com/in/emmanuel-ememe-b649a8176/' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </a>
      <a href='' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
        <RiBehanceLine />
      </a>
    </div>
  );
};

export default Socials;
