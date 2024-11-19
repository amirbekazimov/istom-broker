"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ProductCard } from "../common";
import { GetData } from "@/services.jsx/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductsList = ({ title }: { title: string }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GetData("api/v1/product/products/?is_discount=true").then((res) => {
            setProducts(res?.results);
        });
    }, []);
    return (
        <section>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
                <h2 className="text-[24px] md:text-[32px] font-bold">
                    {title}
                </h2>
                <div className="flex items-center flex-wrap gap-3">
                    <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px]">
                        Хит
                    </Button>
                    <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
                        Новинка
                    </Button>
                    <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
                        Акция
                    </Button>
                    <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
                        Советуем
                    </Button>
                </div>
            </div>
            <div className="mt-10 md:mt-14 relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={4} // Default for larger screens
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".custom-prev-carousel",
                        nextEl: ".custom-next-carousel",
                    }}
                    breakpoints={{
                        // When the screen is >= 320px (small devices)
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        // When the screen is >= 640px (tablet)
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // When the screen is >= 768px (small laptops)
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        // When the screen is >= 1024px (desktop)
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    className="h-full"
                >
                    {products?.map((product: any, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductsList;
