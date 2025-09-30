"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import { Pagination } from 'swiper/modules';
import { Cat, Star } from "lucide-react";

const Categorys = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className='bg-[#F7F5F0] py-[44px] mt-[80px]'>
      <div className='categorys-section container mx-auto'>
        <h2 className="text-[33px] lg:text-[48px] text-center font-bold mb-4">SHOP BY CATEGORY</h2>
        <div className="hidden md:block">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat01.png" alt="cat01 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Men Clothes</a></h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat02.png" alt="cat02 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Women Clothes</a></h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat03.png" alt="cat03 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Sneakers Shoes</a></h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat04.png" alt="cat04 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Luxury Watches</a></h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat01.png" alt="cat01 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Men Clothes</a></h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat02.png" alt="cat02 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Women Clothes</a></h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat03.png" alt="cat03 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Sneakers Shoes</a></h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card text-center bg-[#F7F5F0]'>
                <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat04.png" alt="cat04 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
                <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Luxury Watches</a></h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:hidden mx-[110px]">
          <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
            <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat01.png" alt="cat01 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
            <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Men Clothes</a></h3>
          </div>
          <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
            <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat02.png" alt="cat01 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
            <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Men Clothes</a></h3>
          </div>
          <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
            <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat03.png" alt="cat01 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
            <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Men Clothes</a></h3>
          </div>
          <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
            <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="./images/cat04.png" alt="cat01 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
            <h3 className='text-lg font-semibold text-[24px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Men Clothes</a></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categorys
