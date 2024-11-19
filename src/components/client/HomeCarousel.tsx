"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";

import Cooperation from "@/assets/icons/cooperation-icon.svg";
import Delivery from "@/assets/icons/delivery-icon.svg";
import Quality from "@/assets/icons/quality.svg";
import CarouselImage from "@/assets/images/Slider.png";
import Banner2 from "@/assets/images/home-banner2.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_IMG, GetData } from "@/services.jsx/data";

const HomeCarousel = () => {
    const [carouselData, setCarouselData] = useState([]);
    useEffect(() => {
        GetData("api/v1/conf/site/banners/").then((res) => {
            setCarouselData(res);
        });
    }, []);
    return (
        <>
            <div className="my-7 grid grid-cols-12 space-x-4">
                <div className="col-span-12 lg:col-span-9">
                    <div className="bg-slate-50 rounded-[20px] h-[255px] md:h-[400px] overflow-hidden relative">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView={1}
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
                            className=" h-full"
                        >
                            {carouselData?.map((item: any, index) => (
                                <SwiperSlide key={index} className="h-full">
                                    <Image
                                        src={item.image}
                                        alt={`Partner ${index + 1}`}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                        width={500}
                                        height={500}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="text-white">
                            <button className="custom-prev-carousel flex items-center justify-center w-[30px] h-[30px] absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-xl bg-yellow rounded-[8px] hover:brightness-[0.95]">
                                <FiChevronLeft />
                            </button>
                            <button className="custom-next-carousel flex items-center justify-center w-[30px] h-[30px] absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-xl bg-yellow rounded-[8px] hover:brightness-[0.95]">
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className="pt-10 flex-col gap-6 flex  md:flex-row justify-between items-start ">
                        <div className="grid grid-cols-12 max-w-[300px]">
                            <div className="col-span-3">
                                <div className="w-[44px] h-[44px] bg-[#F3F3F3] rounded-[7px] flex justify-center items-center">
                                    <Image
                                        src={Cooperation}
                                        alt="cooperation"
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h3 className="text-[16px] font-bold">
                                    Сотрудничество
                                </h3>
                                <p className="text-[#000000CC] text-[14px] mt-2 leading-normal">
                                    Приглашаем к сотрудничеству партнёров по
                                    всему миру
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 max-w-[300px]">
                            <div className="col-span-3">
                                <div className="w-[44px] h-[44px] bg-[#F3F3F3] rounded-[7px] flex justify-center items-center">
                                    <Image
                                        src={Delivery}
                                        alt="cooperation"
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h3 className="text-[16px] font-bold">
                                    Быстрая доставка
                                </h3>
                                <p className="text-[#000000CC] text-[14px] mt-2 leading-normal">
                                    Отправляем заказы в течение 1-2 рабочих
                                    дней, бесплатная доставка от 2000 ₽
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 max-w-[300px]">
                            <div className="col-span-3">
                                <div className="w-[44px] h-[44px] bg-[#F3F3F3] rounded-[7px] flex justify-center items-center">
                                    <Image
                                        src={Quality}
                                        alt="cooperation"
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h3 className="text-[16px] font-bold">
                                    Качество
                                </h3>
                                <p className="text-[#000000CC] text-[14px] mt-2 leading-normal">
                                    Высокое качество печати и ультратонкая
                                    эластичная пленка
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 hidden lg:block">
                    <div className="bg-slate-50 rounded-[20px] h-[400px] overflow-hidden">
                        <Image
                            src={Banner2}
                            alt="Banner"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                    </div>
                    <div className="pt-10">
                        <p className="text-[14px] font-bold mb-2">
                            Обеспечьте свою практику лучшими инструментами от
                            ведущих производителей
                        </p>
                        <Button className="text-[14px] max-w-[145px] w-full font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px]">
                            В каталог
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCarousel;

// {
//   "username":"admin",
//   "password":"1"
//   }
