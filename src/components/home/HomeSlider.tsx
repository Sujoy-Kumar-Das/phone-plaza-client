"use client";
import { IHomeSliderItem } from "@/types/homeSliderItem";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSliderCard from "./HomeSliderCard";

export default function HomeSlider({ data }: { data: IHomeSliderItem[] }) {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.map((item) => (
        <SwiperSlide key={item._id}>
          <HomeSliderCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
