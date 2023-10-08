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
import { BestSellerBanner } from './BestSellerBanner';


// import { BestSellerBanner } from './BestSellerBanner';

const MainBanner: FC = () => {
    return (
        <div className='w-full h-96 flex xl:flex-row md:flex-row sm:flex-col justify-center  gap-4 '>
            <div className='xl:w-3/4 w-full bg-gray-100  rounded-2xl p-10   '>
                <div className='w-96'>
                    <h3 className='text-violet-600 mb-4'>BACK TO SCHOLL</h3>
                    <h2 className='mt-4 mb-4 text-3xl'>Special 50% Off</h2>
                    <h3 className='text-2xl mb-6 mt-6'>for our student community</h3>
                    <p className='mb-3  mt-1 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    <div className='flex jusify-center gap-6 '>
                        <Button className='w-44 h-12 p-4 text-white    bg-violet-500 rounded-2xl flex justify-between items-center'>
                            <Link to={"/"}>Get the deal</Link>
                            <BsArrowRight />
                        </Button>
                        <Button className='w-44 h-12 p-4   bg-gray-300 text-violet-600 rounded-2xl flex  items-center'>
                            <Link to={"/"}>See other promos</Link>
                        </Button>


                    </div>
                </div>
            </div>
            <div className='w-1/4 bg-gray-500  rounded-2xl'>
                {/* <BestSellerBanner /> */}
                <Swiper style={{ borderRadius:'14px'}}
                   
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper " 
                >
                    <SwiperSlide style={{backgroundColor:'gray' , borderRadius:'14px'}} >
                        <BestSellerBanner />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
};

export default MainBanner;