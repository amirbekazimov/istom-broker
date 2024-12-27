"use client";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React, { useState } from "react";

interface ImagesProp {
  images: {
    image: string;
  }[];
}

const ProductDetailImages: React.FC<ImagesProp> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="lg:flex-1 h-full bg-slate-100 min-h-[340px]">
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[370px] md:h-[500px] w-full "
      >
        {images?.map((image: any, ind: any) => (
          <SwiperSlide
            key={ind}
            className="border h-full w-full m-0 rounded-[10px]"
          >
            <Image
              src={image?.image}
              alt="product name"
              className="w-full object-contain"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
        {images?.map((image: any, ind: any) => (
          <SwiperSlide
            key={ind}
            className="border p-2 min-h-[60px] cursor-pointer rounded-md"
          >
            <Image
              src={image?.image}
              alt="product name"
              className="w-full object-contain"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductDetailImages;
