"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { Pagination } from 'swiper/modules';

const CustomerReviews = () => {
  return (
    <div className='customer-reviews-section bg-[#F5DFBD] py-[44px] mt-[80px]'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
          
          <div className='image hidden md:block'>
            <img src="./images/review.png" alt="Customer Reviews" className='w-full h-full object-cover' />
          </div>
          <div className='mx-[47px] md:mx-auto'>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='item'>
                  <img className='mb-[1rem]' src="./icons/quote-up.svg" alt="" />
                  <p className='text-[24px]'>I never thought shopping online could be this enjoyable.  it's organized, and every click feels purposeful. Finally, an ecommerce experience that feels as good as it looks!</p>
                  <img className='mt-[1rem] float-right' src="./icons/quote-down.svg" alt="" />
                  <div className='clear-both'></div>
                  <div className="flex items-center gap-1">
                    <figure><img src="./images/customer.png" alt="Customer" /></figure>
                    <figcaption className='text-[20px]'>Fatma Hamid <br /><span className='text-gray-500 text-[16px]'>CEO</span></figcaption>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item'>
                  <img className='mb-[1rem]' src="./icons/quote-up.svg" alt="" />
                  <p className='text-[24px]'>I never thought shopping online could be this enjoyable.  it's organized, and every click feels purposeful. Finally, an ecommerce experience that feels as good as it looks!</p>
                  <img className='mt-[1rem] float-right' src="./icons/quote-down.svg" alt="" />
                  <div className='clear-both'></div>
                  <div className="flex items-center gap-1">
                    <figure><img src="./images/customer.png" alt="Customer" /></figure>
                    <figcaption className='text-[20px]'>Fatma Hamid <br /><span className='text-gray-500 text-[16px]'>CEO</span></figcaption>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item'>
                  <img className='mb-[1rem]' src="./icons/quote-up.svg" alt="" />
                  <p className='text-[24px]'>I never thought shopping online could be this enjoyable.  it's organized, and every click feels purposeful. Finally, an ecommerce experience that feels as good as it looks!</p>
                  <img className='mt-[1rem] float-right' src="./icons/quote-down.svg" alt="" />
                  <div className='clear-both'></div>
                  <div className="flex items-center gap-1">
                    <figure><img src="./images/customer.png" alt="Customer" /></figure>
                    <figcaption className='text-[20px]'>Fatma Hamid <br /><span className='text-gray-500 text-[16px]'>CEO</span></figcaption>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item'>
                  <img className='mb-[1rem]' src="./icons/quote-up.svg" alt="" />
                  <p className='text-[24px]'>I never thought shopping online could be this enjoyable.  it's organized, and every click feels purposeful. Finally, an ecommerce experience that feels as good as it looks!</p>
                  <img className='mt-[1rem] float-right' src="./icons/quote-down.svg" alt="" />
                  <div className='clear-both'></div>
                  <div className="flex items-center gap-1">
                    <figure><img src="./images/customer.png" alt="Customer" /></figure>
                    <figcaption className='text-[20px]'>Fatma Hamid <br /><span className='text-gray-500 text-[16px]'>CEO</span></figcaption>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
