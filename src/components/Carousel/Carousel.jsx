import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import catalogData from '/src/catalog.json'; 
import css from './Carousel.module.css'


const CarouselComponent = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    setCatalog(catalogData);
  }, []);

  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6, 
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.wrapperTitle}>Каталог</h1>
      <div className={css.sliderContainer}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={true}
        >
          {catalog.map((item) => (
            <>
              <div key={item.id} className={css.containerCard}>
                <a href=""></a>
                <div className={css.container}>
                  <a href="#">
                    <img
                      src={item.img}
                      alt={item.text}
                      className={css.sliderImage}
                    />
                  </a>
                </div>
                <a href="#">
                  <p className={css.text}>{item.text}</p>
                </a>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
