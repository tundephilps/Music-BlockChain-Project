import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation } from "swiper/modules";

import SwiperCore from "swiper";
SwiperCore.use([Navigation]);

// import required modules
import { Pagination } from "swiper/modules";
import CardMusic2 from "./CardMusic2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Swipe() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <button className=" swiper-button-prev   bg-white -ml-2 lg:-ml-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <button className=" swiper-button-next   bg-white -ml-2 lg:-ml-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
            <FaArrowRight />
          </button>
        </div>
        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
          style={{
            "--swiper-navigation-color": "red",
            "--swiper-navigation-size": "150px",
          }}
          //navigation={true}
        >
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardMusic2 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
