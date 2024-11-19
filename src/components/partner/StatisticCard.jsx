import Image from "next/image";
import React from "react";
import ImageProduct from "@/assets/images/image.png";
import { ApexChart } from ".";

const StatisticCard = ({ count }) => {
    return (
        <div
            className={` p-5 ${
                count == "1"
                    ? "border-b border-r"
                    : count == "2"
                    ? "border-b"
                    : count == "3"
                    ? "border-r"
                    : ""
            }`}
        >
            <div className="flex gap-3">
                <div className="min-w-[75px] h-[75px] md:min-w-[118px] md:h-[118px] border rounded-[10px]">
                    <Image
                        src={ImageProduct}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="">
                    <p className="text-[12px] md:text-[14px] font-normal mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ducimus, amet? Статистика за месяц-дневной
                    </p>
                    <p className="text-[14px] font-bold">
                        Статус:
                        <span className="font-normal ms-2">Оплачено</span>
                    </p>
                    <p className="text-[14px] font-bold">
                        Стоимость:
                        <span className="font-normal ms-2">17 рублей.</span>
                    </p>
                </div>
            </div>
            <div className="space-y-1 mt-3">
                <p className="text-[12px] md:text-[14px] font-normal mt-2">
                    Статистика за месяц-дневной эквивалент продаж
                </p>
            </div>
            <ApexChart />
        </div>
    );
};

export default StatisticCard;
