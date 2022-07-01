import React from "react";
import slide from "../../assets/images/bg.jpg";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

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
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3.5}
      navigation
      autoplay={{ autoplay: true }}
      pagination={{ clickable: true }}
      className="my-10"
    >
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px] cursor-pointer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px] cursor-pointer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px] cursor-pointer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px] cursor-pointer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px] cursor-pointer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px] cursor-pointer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px] cursor-pointer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" className="h-[300px]" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
