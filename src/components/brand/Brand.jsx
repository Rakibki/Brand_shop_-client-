
import "./style.css";
import brand1 from "../../assets/images/brands/1.png"
import brand2 from "../../assets/images/brands/2.png"
import brand3 from "../../assets/images/brands/3.png"
import brand4 from "../../assets/images/brands/4.png"
import brand5 from "../../assets/images/brands/5.png"
import brand6 from "../../assets/images/brands/6.png"
import brand7 from "../../assets/images/brands/7.png"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Brand = () => {
  return (
    <div className="px-4 md:px-16 my-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="p-3 md:p-6 lg:p-8 border-2"><img src={brand1} alt="" /></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="p-3 md:p-6 lg:p-8 border-2"><img src={brand2} alt="" /></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="p-8 border-2"><img src={brand3} alt="" /></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="p-3 md:p-6 lg:p-8 border-2"><img src={brand4} alt="" /></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="p-3 md:p-6 lg:p-8 border-2"><img src={brand5} alt="" /></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="p-3 md:p-6 lg:p-8 border-2"><img src={brand6} alt="" /></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="p-3 md:p-6 lg:p-8 border-2"><img src={brand7} alt="" /></div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Brand
