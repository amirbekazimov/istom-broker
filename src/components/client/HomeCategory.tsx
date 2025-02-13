import React from "react";
import CategoryBg from "@/assets/images/Category-bgImage.png";
import Image from "next/image";

const HomeCategory = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-[#F6F6F6] h-[126px] md:h-[233px] md:rounded-[10px] flex relative overflow-hidden">
        <div className="absolute right-0 t-0 w-[85%] md:w-full h-full">
          <Image
            src={CategoryBg}
            alt="bg-image"
            className="object-contain w-full"
          />
        </div>
        <div className="p-2 md:p-4 mt-auto">
          <h4 className="text-[14px] break-all md:text-[20px] font-extrabold font-cygre leading-[15px] md:leading-[26px] relative">
            Стоматотологические материалы
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
