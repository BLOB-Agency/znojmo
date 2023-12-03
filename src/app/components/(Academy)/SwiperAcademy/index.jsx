"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
export default function SwiperAcademy() {
  const academy = [
    {
      picture: "academy.jpg", // Ensure these are different if they are different images
      name: "Academy",
    },
    {
      picture: "academy.jpg",
      name: "Academy",
    },
    {
      picture: "academy.jpg",
      name: "Academy",
    },
  ];

  return (
    <Swiper
      className="w-full h-[300px] md:h-[300px] cursor-grab  "
      spaceBetween={"24px"}
      slidesPerView={1.2}
      pagination={{ clickable: true }}
      controller={true}
      centeredSlides={true}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      effect="coverflow"
      loop={true}
      breakpoints={{
        // when window width is >= 640px

        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {academy.map((item, index) => (
        <SwiperSlide key={index} className="w-[80%] ">
          <div className="relative h-full  overflow-hidden ">
            <Image
              src={`/images/${item.picture}`}
              alt={item.name}
              fill
              sizes="100%"
              className="object-cover object-center"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
