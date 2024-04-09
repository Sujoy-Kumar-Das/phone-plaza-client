"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingCard from "../card/TrendingCard";
export default function AllProductSwiper({ items }) {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {items?.map((item) => (
        <SwiperSlide key={item._id}>
          <TrendingCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
