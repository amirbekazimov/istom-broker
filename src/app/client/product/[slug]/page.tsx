"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductsList from "@/components/common/ProductsList";
import {
  ProductDetailImages,
  ProductDetailInfo,
  ProductFeatues,
} from "@/components/client";
import { GetData, GetDataToken } from "@/services.jsx/data";

const breadcrumbs = [
  { name: "Каталог", link: "" },
  { name: "Стоматотологические материалы", link: "" },
];

export default function ProductDetails({ params }: any) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    GetData(`api/v1/product/products/${params.slug}/`).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <section className="pt-6 ">
      <div className="container mb-16">
        <Breadcrumb className="font-aeonic">
          <BreadcrumbList className="text-[12px] md:text-[14px] text-[#A7A7B2] font-normal">
            {breadcrumbs.map((item) => (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href={item.link}>{item.name}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ))}
            <BreadcrumbItem>
              <BreadcrumbPage>{data?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="product mt-5 md:mt-8 md:min-h-[500px] flex flex-col lg:flex-row  items-start gap-8">
          <ProductDetailImages images={data?.images} />
          <ProductDetailInfo productData={data} />
        </div>
        <div className="mt-10">
          <ProductFeatues item={data?.description} />
        </div>
      </div>
      <div className="pb-[70px]">
        <div className="container">
          <ProductsList title={"Похожие товары"} adsBanner />
        </div>
      </div>
    </section>
  );
}
