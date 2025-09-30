"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import { Pagination } from 'swiper/modules';
import { Star } from "lucide-react";

const Deals = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className='deals-section mt-[64px] container mx-auto'>
      <h2 className="text-[33px] lg:text-[48px] text-center font-bold mb-4">Deals Of The Day</h2>
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
              <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/01.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
              <div className="flex items-center justify-center mb-[8px] gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
              <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card text-center bg-[#F7F5F0]'>
              <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/02.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
              <div className="flex items-center justify-center mb-[8px] gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
              <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card text-center bg-[#F7F5F0]'>
              <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/03.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
              <div className="flex items-center justify-center mb-[8px] gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
              <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card text-center bg-[#F7F5F0]'>
              <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/04.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
              <div className="flex items-center justify-center mb-[8px] gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
              <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card text-center bg-[#F7F5F0]'>
              <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/02.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
              <div className="flex items-center justify-center mb-[8px] gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
              <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card text-center bg-[#F7F5F0]'>
              <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/03.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
              <div className="flex items-center justify-center mb-[8px] gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
              <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card text-center bg-[#F7F5F0]'>
              <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/04.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
              <div className="flex items-center justify-center mb-[8px] gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
              <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden mx-[110px]">
        <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
          <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/01.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
          <div className="flex items-center justify-center mb-[8px] gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                />
              </button>
            ))}
          </div>
          <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
          <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
        </div>
        <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
          <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/02.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
          <div className="flex items-center justify-center mb-[8px] gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                />
              </button>
            ))}
          </div>
          <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
          <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
        </div>
        <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
          <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/03.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
          <div className="flex items-center justify-center mb-[8px] gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                />
              </button>
            ))}
          </div>
          <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
          <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
        </div>
        <div className='card text-center bg-[#F7F5F0] mb-[24px]'>
          <a href="" className='image-link h-[360px] block overflow-hidden mb-[12px]'><img src="/images/04.png" alt="Deal 1" className='mb-4 w-full h-full object-cover hover:scale-105 transition-transform duration-200' /></a>
          <div className="flex items-center justify-center mb-[8px] gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-4 h-4 ${value <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                />
              </button>
            ))}
          </div>
          <h3 className='text-lg font-semibold text-[18px] mb-[8px] hover:text-red-600 transition-colors duration-200'><a href="">Slim Fit Half Turtleneck Pullover</a></h3>
          <p className='text-black text-[18px] mb-[12px]'>$99.99 <span className='text-gray-500 text-[18px] line-through text-sm'>$149.99</span></p>
        </div>
      </div>
    </div>
  )
}

export default Deals
