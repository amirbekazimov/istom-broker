"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Partner1 from "@/assets/images/partner-1.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { GetData } from "@/services.jsx/data";

const OurPartner = () => {
    const [partners, setPartners] = useState([]);
    useEffect(() => {
        GetData("api/v1/conf/site/partners/").then((res) => {
            setPartners(res);
            console.log(res);
        });
    }, []);
    return (
        <section>
            <h2 className="text-[24px] md:text-[32px] font-bold">
                Наши партнеры
            </h2>
            <div className="mt-12 relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.5}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {partners?.map((item: any, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={item.image}
                                alt={`Partner ${index + 1}`}
                                className="object-contain w-full"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className=" md:block">
                    <button className="custom-next flex items-center justify-center w-[30px] h-[30px] absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 text-xl bg-[#F3F3F3] rounded-[8px] hover:bg-gray-300">
                        <FiChevronLeft />
                    </button>
                    <button className="custom-next flex items-center justify-center w-[30px] h-[30px] absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 text-xl bg-[#F3F3F3] rounded-[8px] hover:bg-gray-300">
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurPartner;
