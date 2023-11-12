import React, { FC } from 'react';
import Button from '../../../../Atoms/Button';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BestSellerBanner } from '../BestSellerBanner';

const MainBanner: FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-12'>
      <div className=' w-full bg-gray-100 rounded-2xl p-10'>
        <div className='w-full md:w-96'>
          <h3 className='text-violet-600 mb-4'>BACK TO SCHOOL</h3>
          <h2 className='mt-4 mb-4 text-3xl'>Special 50% Off</h2>
          <h3 className='text-2xl mb-6 mt-6'>for our student community</h3>
          <p className='mb-3 mt-1 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className='flex justify-center md:justify-start gap-6'>
            <Button className='w-44 h-12 p-4 text-white bg-violet-500 rounded-2xl flex justify-between items-center'>
              <Link to={"/"}>Get the deal</Link>
              <BsArrowRight />
            </Button>
            <Button className='w-44 h-12 p-4 bg-gray-300 text-violet-600 rounded-2xl flex items-center'>
              <Link to={"/"}>See other promos</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='w-full  mt-6 md:mt-0'>
        <Swiper
          style={{ borderRadius: '14px' }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundColor: 'gray', borderRadius: '14px' }} >
            <BestSellerBanner />
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default MainBanner;
