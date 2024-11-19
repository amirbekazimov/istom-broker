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
import { useRouter } from "next/router";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import ProductImage from "@/assets/images/image.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdOutlineStar } from "react-icons/md";
import { Heart } from "lucide-react";
import ProductsList from "@/components/common/ProductsList";
import { Subscribe } from "@/components/common";
import { ProductFeatues } from "@/components/client";
import { useDispatch } from "react-redux";
import { Product, addProduct } from "@/store/cartSlice/cartSlice";
import { GetData, GetDataToken } from "@/services.jsx/data";
const product = {
    id: 1,
    name: "ТОР Кламп № В5",
    image: ProductImage,
    price: 16500,
    size: "M",
};

export default function ProductDetails({ params }: any) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [data, setData] = useState<any>(null);

    const details = [
        { label: "Категория", value: "Цинковые бинты" },
        { label: "Страна", value: data?.country },
        { label: "Степень растяжимости", value: "Низкая" },
        { label: "Цвет", value: data?.color },
    ];
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useDispatch();

    useEffect(() => {
        GetDataToken(`api/v1/product/products/${params.slug}/`).then((res) => {
            setData(res);
        });
    }, []);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity === 1) return;
        setQuantity((prev) => prev - 1);
    };

    const handleAddToCart = () => {
        if (data) {
            const productToAdd: Product = {
                ...data,
                quantity: quantity,
                size: selectedSize,
                totalPrice: data.price * quantity,
            };
            dispatch(addProduct(productToAdd));
            setSelectedSize("");
            setQuantity(1);
        }
    };

    return (
        <section className="pt-6 ">
            <div className="container mb-16">
                <Breadcrumb>
                    <BreadcrumbList className="text-[12px] md:text-[14px] ">
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/client/home">Главная</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/client/catalog">Каталог</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/client/catalog">
                                    Хирургические инструменты
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-bold">
                                {data?.name}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="product mt-5 md:mt-8 min-h-[500px] grid grid-cols-1 lg:grid-cols-8 items-start gap-8">
                    <div className="lg:col-span-3">
                        <Swiper
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 h-[370px] md:h-[500px] w-full "
                        >
                            {data?.images?.map((image: any) => (
                                <SwiperSlide className="border h-full w-full m-0 rounded-[10px]">
                                    <Image
                                        src={image.image}
                                        alt="product name"
                                        className="w-full object-contain"
                                        fill
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={6}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-3"
                        >
                            {data?.images?.map((image: any) => (
                                <SwiperSlide className="border p-2 min-h-[60px] cursor-pointer rounded-md">
                                    <Image
                                        src={image.image}
                                        alt="product name"
                                        className="w-full object-contain"
                                        fill
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="block lg:hidden">
                            <h2 className="text-[24px] font-bold mt-4">
                                ТОР Кламп № В5
                            </h2>
                            <div className=" rounded-[10px]  relative">
                                <div className="flex items-center  text-[#85CA40] text-[12px] mt-2">
                                    <span className="w-2 h-2 rounded-full bg-[#85CA40] mr-2"></span>
                                    <span>В наличии</span>
                                </div>

                                <div className="flex items-center  mt-2 space-x-1">
                                    <Button
                                        onClick={decreaseQuantity}
                                        className="w-[40px] h-[40px] border rounded text-xl font-semibold text-gray-700 bg-[#fff] hover:bg-[#fff]"
                                    >
                                        -
                                    </Button>
                                    <input
                                        type="text"
                                        readOnly
                                        value={quantity}
                                        className="w-[65px] h-[40px] text-center border rounded font-semibold text-gray-700"
                                    />
                                    <Button
                                        onClick={increaseQuantity}
                                        className="w-[40px] h-[40px] border rounded text-xl font-semibold text-gray-700 bg-[#fff] hover:bg-[#fff]"
                                    >
                                        +
                                    </Button>
                                </div>
                                <div className="flex mt-4 items-center gap-2">
                                    <div className="text-2xl font-bold text-gray-900">
                                        {product.price} ₽{" "}
                                        <span className="text-lg font-normal text-gray-500">
                                            / шт.
                                        </span>
                                    </div>
                                    <button className="text-yellow  transition">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="mt-3 flex flex-col space-y-2">
                                    <Button
                                        onClick={handleAddToCart}
                                        className=" py-2 px-4 h-[47px] text-white rounded-lg font-normal transition"
                                    >
                                        В корзину
                                    </Button>
                                    <Button className=" py-2 text-[11px] text-wrap px-4 h-[47px] rounded-lg bg-[#F0F1F3] text-black font-normal transition">
                                        Наличие подтверждается после оформления
                                        заказа
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 text-[14px]">
                                <span className="px-5 py-2 border rounded-[4px]">
                                    100 х 100 мм (D 100)
                                </span>
                                <span className="px-5 py-2 border rounded-[4px]">
                                    150 х 100 мм
                                </span>
                                <span className="px-5 py-2 border rounded-[4px]">
                                    200 х 150 мм
                                </span>
                                <span className="px-5 py-2 border rounded-[4px]">
                                    200 х 200 мм (D200)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 hidden lg:block">
                        <Button className="text-[10px] hover:brightness-[0.95] px-2 h-[25px] rounded-[5px] bg-[#A56FFD] hover:bg-[#A56FFD] tracking-[2px] font-bold">
                            СОВЕТУЕМ
                        </Button>
                        <h2 className="text-[24px] font-bold mt-4">
                            {data?.name}
                        </h2>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-1">
                                <MdOutlineStar className="text-yellow text-lg" />
                                <span className="text-[14px]">
                                    {data?.average_rating}
                                </span>
                            </div>
                            <span className="text-[14px]">1 отзыв</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-5 py-2 border rounded-[4px]">
                                Фирма: {data?.firm}
                            </span>
                            <span className="px-5 py-2 border rounded-[4px]">
                                Страна: {data?.country}
                            </span>
                            <span className="px-5 py-2 border rounded-[4px]">
                                Артикул: {data?.vendor_code}
                            </span>
                            <span className="px-5 py-2 border rounded-[4px]">
                                Категория: Стоматологическое инструменты
                            </span>
                        </div>

                        <div className="space-y-4 mt-5">
                            {details.map((detail, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between"
                                >
                                    <span className="text-gray-800">
                                        {detail.label}
                                    </span>
                                    <div className="flex-grow mx-4 border-t border-dashed border-gray-300"></div>
                                    <span className="text-gray-900 font-medium">
                                        {detail.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block py-4 px-5 col-span-2 rounded-[10px] bg-[#F0F1F3] relative">
                        <div className="text-2xl font-bold text-gray-900">
                            {data?.price} ₽{" "}
                            <span className="text-lg font-normal text-gray-500">
                                / шт.
                            </span>
                        </div>
                        <div className="flex items-center  text-[#85CA40] text-[12px] mt-2">
                            <span className="w-2 h-2 rounded-full bg-[#85CA40] mr-2"></span>
                            <span>В наличии</span>
                        </div>

                        <div className="flex items-center  mt-2 space-x-1">
                            <Button
                                onClick={decreaseQuantity}
                                className="w-[40px] h-[40px] border rounded text-xl font-semibold text-gray-700 bg-[#fff] hover:bg-[#fff]"
                            >
                                -
                            </Button>
                            <input
                                type="text"
                                readOnly
                                value={quantity}
                                className="w-[65px] h-[40px] text-center border rounded font-semibold text-gray-700"
                            />
                            <Button
                                onClick={increaseQuantity}
                                className="w-[40px] h-[40px] border rounded text-xl font-semibold text-gray-700 bg-[#fff] hover:bg-[#fff]"
                            >
                                +
                            </Button>
                        </div>

                        <div className="flex items-center justify-between mt-2 space-x-2">
                            <Button
                                onClick={handleAddToCart}
                                className="flex-1 py-2 px-4 h-[47px] text-white rounded-lg font-semibold transition"
                            >
                                В корзину
                            </Button>
                            <button className="text-yellow  transition">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <ProductFeatues item={data?.description} />
                </div>
            </div>
            <div className="bg-[#F8F8F8] py-[50px] lg:py-[100px]">
                <div className="container">
                    <ProductsList title={"Наши акции"} />
                </div>
            </div>
            <Subscribe />
        </section>
    );
}
