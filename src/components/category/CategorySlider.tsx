"use client";
import { TCategory } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";
export default function CategorySlider({ items }: { items: TCategory[] }) {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {items?.map((item) => (
        <SwiperSlide key={item._id}>
          <CategoryCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
