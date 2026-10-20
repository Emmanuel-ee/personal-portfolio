// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'NASA Project',
          category: 'Software project',
          path: '/Nasa.jpg',
          url: 'https://github.com/Emmanuel-ee/Nasa-Project',
        },
        {
          title: 'Self-calibrating Interface',
          category: 'Interactive product',
          path: '/Interface01.jpg',
          url: 'https://emmanuel-ee.github.io/self-calibrating/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Self-calibrating Interface 02',
          category: 'Interactive product',
          path: '/Interface02.png',
          url: 'https://emmanuel-ee.github.io/self-calibrating-02/',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[260px] sm:h-[420px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid h-full grid-cols-1 gap-4 sm:grid-cols-2'>
              {slide.images.map((image, index) => {
                return (
                  <a
                    className='group relative flex min-h-0 flex-col overflow-hidden border border-white/10 bg-secondary'
                    href={image.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={image.title}
                  >
                    <div className='relative min-h-0 flex-1 overflow-hidden'>
                      <Image
                        src={image.path}
                        fill
                        sizes='(min-width: 640px) 42vw, 90vw'
                        alt={`${image.title} preview`}
                        className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                      />
                    </div>
                    <div className='flex items-center justify-between gap-4 px-4 py-3'>
                      <div>
                        <h3 className='text-sm font-semibold text-white'>{image.title}</h3>
                        <p className='mt-1 text-xs text-white/50'>{image.category}</p>
                      </div>
                      <BsArrowRight className='shrink-0 text-xl text-accent transition-transform group-hover:translate-x-1' aria-hidden='true' />
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
