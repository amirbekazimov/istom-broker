import { Consultation, HomeCarousel, OurPartner } from "@/components/client";
import ProductsList from "@/components/common/ProductsList";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="py-6 container">
      <div className=" items-center space-x-6 hidden md:flex">
        <Button className="text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
          Распродажа
        </Button> 
        <Button className="text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] text-black hover:bg-[#F4F4F4]">
          Экспресс-доставка
        </Button>
        <Button className="text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px]">
          Акции
        </Button>
      </div>
      <HomeCarousel />
      <div className="mt-16">
        <ProductsList title="Наши новинки" />
      </div>
      <OurPartner />
      <div className="mt-16">
        <ProductsList title="Наши акции" />
      </div>
      <Consultation />
    </section>
  );
}
