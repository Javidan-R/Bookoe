import React, { FC, ReactNode } from 'react';
import Button from '../../../../Atoms/Button';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BestSellerBanner } from '../BestSellerBanner';
import circles from '../../../../assets/images/cirlces.svg';

const MainBanner: FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 pt-2'>
      {/* Left Area (75%) */}
      <div className='hidden md:block xl:block md:col-span-3 bg-gray-100 rounded-3xl p-10 relative md:h-[35rem] bg-[#edfdec]'>
        {/* First SVG - Top Right */}
        <svg
          width={350}
          height={350}
          viewBox="0 0 153 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 rounded-[14px] z-1"  // Adjusted z-index
        >
          <circle cx={120} cy={50} r={88} fill="#F5DCC8" />
        </svg>
        <img src={circles} alt="" className="w-[4rem] absolute top-10 left-10  transform rotate-90 " />

        {/* Main Content */}
        <div className='md:max-w-md p-14 absolute z-10 w-full md:w-[70%] lg:w-[60%] xl:w-[75%]'>
          <h3 className='text-violet-600 mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>BACK TO SCHOOL</h3>
          <h2 className='mt-4 mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Special 50% Off</h2>
          <h3 className='text-2xl mb-6 mt-6 md:text-3xl lg:text-4xl xl:text-5xl'>for our student community</h3>
          <p className='mb-3 mt-1 text-sm text-base md:text-lg lg:text-xl xl:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className='flex flex-col md:flex-row justify-center md:justify-start gap-6'>
            <ButtonLink to={"/"} color='violet-500'>Get the deal</ButtonLink>
            <ButtonLink to={"/"} color='gray-300'>See other promos</ButtonLink>
          </div>
        </div>

        {/* Second SVG - Bottom Center */}
        <svg
          width={300}
          height={300}
          viewBox="-30 0 203 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:w-[20rem]"
        >
          <circle cx={70} cy={118} r={98} fill="#F5DCC8" />
        </svg>

        {/* Circles Image - Bottom Center */}
        <img src={circles} alt="" className="w-[5rem] absolute bottom-20 left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Right Area (25%) */}
      <div className='col-span-1'>
        <Swiper
          style={{ borderRadius: '14px' }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundColor: 'gray', borderRadius: '14px' }}>
            <BestSellerBanner />
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

interface ButtonLinkProps {
  to: string;
  color: string;
  children: ReactNode;
}

const ButtonLink: FC<ButtonLinkProps> = ({ to, color, children }) => {
  return (
    <Button className={`w-44 h-12 p-4 text-white bg-${color} rounded-2xl flex justify-between items-center`}>
      <Link to={to}>{children}</Link>
      <BsArrowRight />
    </Button>
  );
};

export default MainBanner;
