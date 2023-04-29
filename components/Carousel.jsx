/* eslint-disable import/no-unresolved */

'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

const Carousel = ({ carouselPict }) => {
  console.log('wkwkwpict', carouselPict);
  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        navigation
        speed={800}
        slidesPerView={1}
        loop
        className="w-full"
      >
        {carouselPict.map((cpic) => (
          <SwiperSlide className="">
            <img className="w-full h-full object-cover" src={cpic} alt="get-started" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
