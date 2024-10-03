import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from './SLiderComponent.module.css'

const SliderComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={true}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        height: "260px",
        backgroundColor: "#0C0C0C",
        marginBottom: "40px",
      }}
    >
      <SwiperSlide>
        <div className={styles.container}>
          <a href="#">
            <h3 className={styles.heading}>Умная колонка</h3>
            <span>СКИДКА 30%</span>
            <p className={styles.text}>при покупке второго товара</p>
            <img src="/public/img/Store/Catalog/jbl.png" alt="Slide 1" />
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.container}>
          <a href="#">
            <h3 className={styles.heading}>Lorem, ipsum.</h3>
            <span>СКИДКА 30%</span>
            <p className={styles.text}>Lorem ipsum dolor sit.</p>
            <img
              src="/public/img/Store/Catalog/Blue-Headset-Background-PNG-Image.png"
              alt="Slide 1"
            />
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.container}>
          <a href="#">
            <h3 className={styles.heading}>Умная колонка</h3>
            <span>СКИДКА 30%</span>
            <p className={styles.text}>при покупке второго товара</p>
            <img src="/public/img/Store/Catalog/laptop.png" alt="Slide 1" />
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.container}>
          <a href="#">
            <h3 className={styles.heading}>Умная колонка</h3>
            <span>СКИДКА 30%</span>
            <p className={styles.text}>при покупке второго товара</p>
            <img src="/public/img/Store/Catalog/Apple-Watch-Background-PNG-Image.png" alt="Slide 1" />
          </a>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default SliderComponent
