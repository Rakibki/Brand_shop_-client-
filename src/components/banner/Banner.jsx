import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../../assets/images/slide-1.jpg";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div className="relative w-full h-full" id="banner1">
            <div className="w-1/2 left-5 top-[30%] absolute">
              <h2 className="text-4xl mb-4 font-semibold">
                Discovery And Explore Digital
              </h2>
              <p className="text-[#a2a2a2] mb-5">
                Vehicula curae mi senectus sodales proin, ultricies gravida.
              </p>
              <div>
                <button className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative" id="banner2">
            <div className="w-1/2 left-5 top-[30%] absolute">
              <h2 className="text-4xl mb-4 font-semibold">
                Smart Watches New Collection
              </h2>
              <p className="text-[#a2a2a2] mb-5">
                Inceptos aptent eleifend metus. Porta montes nibh mollis{" "}
              </p>
              <div>
                <button className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative" id="banner3">
            <div className="w-1/2 left-5 top-[30%] absolute">
              <h2 className="text-4xl mb-4 font-semibold">
                Follow Keeping through Control{" "}
              </h2>
              <p className="text-[#a2a2a2] mb-5">
                Lorem ipsum dolor sit amet consectetur, adipiscing turpis{" "}
              </p>
              <div>
                <button className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
