import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <div className='w-full h-[250px] md:h-[350px] lg:h-[500px] relative overflow-hidden'>
          <img src="https://i.ibb.co.com/hFNdhrsW/beautiful-young-woman-playing-with-her-little-dog-park-outdoors-lifestyle-portrait.jpg" className='object-cover w-full h-full' alt="" />
          <p className='md:text-3xl lg:text-5xl font-bold lg:leading-20 text-[#8B5E3C] absolute top-4 left-10 md:top-10 md:left-16 lg:top-20 lg:left-20'>Find Your Furry Friend Today!</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='w-full h-[250px] md:h-[350px] lg:h-[500px] '>
          <img src="https://i.ibb.co.com/HDhMCgKF/krista-mangulsone-9gz3wf-Hr65-U-unsplash.jpg" className='object-cover w-full h-full relative' alt="" />
          <p className='absolute  lg:right-20 right-14 md:right-16 lg:bottom-10 bottom-6 md:text-3xl lg:text-5xl lg:leading-16 text-white text-bold'>Adopt, Don’t Shop <br /> Give a Pet a Home.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-300px lg:w-full md:h-[350px] h-[250px] lg:h-[500px] '>
          <img src="https://i.ibb.co.com/JjShWqdL/pexels-helenalopes-1378849.jpg" className='object-cover w-full h-full' alt="" />
          <p className='absolute lg:left-20 left-8 md:left-16 lg:top-10  md:text-3xl lg:text-5xl lg:leading-16  text-white text-bold'>Because Every Pet <br />Deserves Love and Care.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-300px lg:w-full md:h-[350px] h-[250px] lg:h-[500px] '>
          <img src="https://i.ibb.co.com/Tx17XNw7/depositphotos-206475234-stock-photo-bowl-food-cat-dog-accessories.webp" className='object-cover w-full h-full' alt="" />
          <p className='absolute lg:right-20 right-8 md:right-16 lg:top-24 bottom-6 md:text-3xl lg:text-5xl lg:leading-16 text-white  text-bold'>CARE PRODUCTS</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;