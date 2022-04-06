import React, { useState } from "react";
import { Block, useTheme } from "vcc-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { CarData } from "../types/CarTypes";
import CarInfoCard from "./CarInfoCard/CarInfoCard";
import useMediaQuery from "../utilities/useMediaQuery";
import CarouselNavigation from "./CarouselNavigation";

interface Props {
  data: CarData[],
}

const CarInfoCarousel = (props: Props) => {
  const { data } = props;
  const [swiperRef, setSwiperRef] = useState<SwiperCore>();
  const [curentIndex, setCurrentIndex] = useState<number>(0);
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.untilL);

  const maxIndex = data.length - 4;

  const slideNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  return (
    <Block extend={{ "--swiper-theme-color": "black" }}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView='auto'
        pagination={isMobile && {
          clickable: true,
        }}
        modules={[Pagination]}
        onActiveIndexChange={e => setCurrentIndex(e.activeIndex)}
      >
        {data.map((elem) => (
          <SwiperSlide key={elem.id} style={{ width: isMobile ? "80%" : "25%", paddingBottom: 32 }}>
            <CarInfoCard data={elem} />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isMobile && (
        <CarouselNavigation
          slideNext={slideNext}
          slidePrev={slidePrev}
          disablePrev={curentIndex <= 0}
          disableNext={curentIndex >= maxIndex}
        />
      )}
    </Block>

  );
};

export default CarInfoCarousel;