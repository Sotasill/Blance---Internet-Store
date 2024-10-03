import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const SliderCatalog = () => {
    return (
      <>
        <h1>Каталог</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={3}
          slidesPerView={4}
          mousewheel={true}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ height: "315px" }}
        >
          <SwiperSlide>
            <div>
              <a href="">
                <img src="/Catalog/Mask group-1.jpg" alt="" />
                <p>Смартфоны</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          ...
        </Swiper>
      </>
    );
};

export default SliderCatalog;
