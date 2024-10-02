import { Swiper, SwiperSlide } from "swiper/react";
import css from "./Swiper.module.css";

import "swiper/css";

const SwiperModule = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={css.slide}>
          <h1>Умная колонка</h1>
          <h2>СКИДКА 30%при покупке второго товара</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <>
          <div></div>
        </>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default SwiperModule;
