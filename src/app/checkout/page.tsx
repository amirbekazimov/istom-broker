import CustomBreadcrumb from "@/components/common/CustomBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Checkout = () => {
  return (
    <div className="py-6 container min-h-[250px] md:min-h-[450px]">
      <CustomBreadcrumb
        items={[
          { name: "Главная", link: "/home" },
          { name: "Корзина", link: "/cart" },
          { name: "Оформление заказа", link: "/checkout" },
        ]}
      />
      <h1 className="text-[25px] md:text-[30px] font-bold font-cygre mt-4 mb-5 md:mb-10">
        Оформление заказа
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-7 md:gap-28">
        <div className="form flex-1">
          <form>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="name"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  ФИО<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Введите ваше ФИО"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="email"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Электронная почта<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Введите ваш E-mail"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="email"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Телефон<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="email"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Город<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Ваш город"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <Label
                  htmlFor="email"
                  className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                >
                  Улица<span className="text-[#FFB224]">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Улица"
                  className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                />
              </div>
              <div className="col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <Label
                    htmlFor="email"
                    className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                  >
                    Дом<span className="text-[#FFB224]">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder=""
                    className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor="email"
                    className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
                  >
                    Квартира<span className="text-[#FFB224]">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder=""
                    className="w-full font-aeonic h-[62px] md:h-[70px] rounded-[3px] text-base bg-[#F8F8F8] border-none placeholder:text-[#A7A7B2]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <Label
                htmlFor="email"
                className="text-[#84818A] font-normal font-aeonic text-[13px] md:text-[15px]"
              >
                Комментарий к заказу
              </Label>
              <Textarea
                rows={5}
                className="bg-[#F8F8F8] p-4 border-none font-aeonic rounded-[3px] text-base placeholder:text-[#A7A7B2]"
                placeholder="Оставьте ваш коментарий"
              />
            </div>
          </form>
        </div>
        <div>
          <Card className="w-full md:w-[450px] mx-auto border-none bg-[#F6F6F6]">
            <CardContent className="pt-8 font-cygre">
              <h2 className="text-[25px] font-bold">Ваш заказ</h2>
              <table className="w-full border-collapse">
                <thead className="font-aeonic text-[#A7A7B2]">
                  <tr className="border-b text-xs md:text-sm">
                    <th className="text-left py-4 md:py-6 font-normal w-[40%] ">
                      НАИМЕНОВАНИЕ ТОВАР
                    </th>
                    <th className="text-center py-4 md:py-6 w-[20%]"></th>
                    <th className="text-right py-4 md:py-6 font-normal w-[25%]">
                      ЦЕНА
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-sm">
                    <td className="text-left py-4 md:py-6 font-normal text-sm md:text-base w-auto">
                      Наконечник &quot;Kayo&quot; угубленный
                    </td>
                    <td className="text-center py-4 md:py-6 text-sm md:text-base">
                      x2
                    </td>
                    <td className="text-center py-4 md:py-6 font-bold text-[18px] md:text-[20px]">
                      36 400 ₽
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-bold text-base md:text-[20px] uppercase">
                  Итого:
                </span>
                <span className="font-bold text-[18px] md:text-[25px]">
                  36 400 ₽
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                className="w-full text-xs md:text-sm h-[70] md:h-[80px] bg-black hover:bg-black/90 md:rounded-xl font-aeonic font-bold"
                size="lg"
              >
                Оформить заказ
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
