"use client";
import { TProductItem } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";
export default function AllProductSwiper({ items }: { items: TProductItem[] }) {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
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
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
