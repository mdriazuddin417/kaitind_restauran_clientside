import React from "react";

import { Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={2.7}
      autoplay={{ autoplay: true }}
      pagination={{ clickable: true }}
      className="my-10"
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/rvh4B8V/pxfuel-com-1.jpg"
          alt=""
          className="h-[300px] cursor-pointer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/k8tmKxk/pxfuel-com-2.jpg"
          alt=""
          className="h-[300px] cursor-pointer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/GcFVhsD/pxfuel-com-3.jpg"
          alt=""
          className="h-[300px] cursor-pointer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/1vdP4nV/raw-organic-orange-kumquats-bowl.jpg"
          alt=""
          className="h-[300px] cursor-pointer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/Sdk30Pg/pxfuel-com-4.jpg"
          alt=""
          className="h-[300px] cursor-pointer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/0ZWnmxq/pxfuel-com.jpg"
          alt=""
          className="h-[300px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/T42KJHn/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view.jpg"
          alt=""
          className="h-[300px] cursor-pointer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/1vdP4nV/raw-organic-orange-kumquats-bowl.jpg"
          alt=""
          className="h-[300px] cursor-pointer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/0ZWnmxq/pxfuel-com.jpg"
          alt=""
          className="h-[300px]"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
