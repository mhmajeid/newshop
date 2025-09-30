"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

const Slider = () => {
  return (
    <>
      <Swiper className="slider-intro">
        <SwiperSlide>
          <div className="item h-[100%] relative">
            <Image src="./slider/hero.jpg" height={500} width={10000} alt="Image 1" objectFit="cover" />
          </div>
        </SwiperSlide>  
      </Swiper>
    </>
  )
}

export default Slider
