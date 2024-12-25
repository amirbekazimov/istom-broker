import { HomeCarousel, HomeCategory } from "@/components/client";
import ProductsList from "@/components/common/ProductsList";
import bgImage from "@/assets/images/dark-card-bg.png";
import DeliveryIcon from "@/assets/images/Delivery.svg";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-6 container">
      <HomeCarousel />
      <div className="mt-16">
        <ProductsList title="Специальные предложения!" />
      </div>
      <div className="mt-16">
        <HomeCategory />
      </div>
      {/* <div className="mt-16">
        <ProductsList title="Рекомендуем для вас" adsBanner />
      </div> */}
      <div className="mt-16 grid grid-cols-3 gap-6 ">
        <div className=" bg-[#111318] h-[260px] rounded-[10px] flex justify-center text-center relative">
          <div className="absolute w-full top-0 left-0 overflow-hidden h-[50%]">
            <Image
              src={bgImage}
              alt="bg-image"
              className="w-full  object-contain -translate-y-[150px]"
            />
          </div>
          <Image
            src={DeliveryIcon}
            alt="bg-image"
            className="  -top-[80px] object-contain absolute"
          />
          <div className="max-w-[300px] w-full mt-auto py-8">
            <h3 className="text-[18px] md:text-[25px] font-bold font-cygre text-white">
              Качество
            </h3>
            <p className="text-[#A7A8AA] font-aeonic leading-tight">
              Высокое качество печати и ультратонкая эластичная пленка
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
