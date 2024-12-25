"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../common";
import { GetData } from "@/services.jsx/data";
import { Button } from "../ui/button";

const ProductsList = ({
  title,
  adsBanner,
}: {
  title: string;
  adsBanner?: boolean;
}) => {
  const [products, setProducts] = useState([{ name: "" }]);
  useEffect(() => {
    GetData("api/v1/product/products/?is_discount=true").then((res) => {
      setProducts(res?.results);
    });
  }, []);
  return (
    <section>
      <div className="mt-10 md:mt-14 relative">
        <h2 className="text-[19px] md:text-[30px] font-bold md:mb-6 mb-3 font-cygre">
          {title}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full  gap-2 md:gap-4">
          {products?.map((product: any, index) => (
            <ProductCard product={product} key={index} />
          ))}
          {adsBanner && (
            <div className="bg-[#FFB224] h-full rounded-[10px] p-4">
              <h2 className="text-[35px] font-bold text-white leading-[45px]">
                НОВОГОДНИЕ СКИДКИ!
              </h2>
              <Button className="capitalize mt-3 bg-[#FFFFFF] font-bold rounded-full h-[54px] w-[192px] text-[#FFB224] ">
                CkИДКИ ДО 60%
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
