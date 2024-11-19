"use client";
import { CartItem } from "@/components/client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EmptyCartIcon from "@/assets/images/empty-cart.svg";
import Image from "next/image";
import ProductsList from "@/components/common/ProductsList";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { PostData, PostDataToken } from "@/services.jsx/data";

export default function Cart() {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

    // Create JSON object for order_products_list
    const orderProductsList = cart.map((item) => ({
        product_id: item.id, // Assuming `id` is the product identifier
        quantity: item.quantity, // Assuming `quantity` is available in the item
        total: item.price * item.quantity, // Assuming `price` is available in the item
    }));

    // Final JSON data structure
    const jsonData = {
        order_products_list: orderProductsList,
    };

    const handleOrder = () => {
        PostDataToken("api/v1/product/order-products/create/", jsonData)
            .then((res) => res)
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
    };

    return (
        <section className="py-6">
            <div className="container min-h-[450px] md:min-h-[600px]">
                <Breadcrumb className="my-5">
                    <BreadcrumbList className="text-[14px]">
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/client/home">Главная</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Корзина</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex gap-14 h-full">
                    <div className="flex-1">
                        <h1 className="text-[32px] font-bold">Корзина</h1>
                        {cart.length > 0 ? (
                            cart.map((item,ind) => (
                                <CartItem key={ind} product={item} />
                            ))
                        ) : (
                            <div className="h-[300px] md:h-[400px] text-center flex flex-col gap-1 justify-center items-center">
                                <Image
                                    src={EmptyCartIcon}
                                    alt="Empty cart"
                                    className="w-[80px] md:w-[180px] h-[80px] md:h-[180]"
                                />
                                <h3 className="text-[18px] md:text-[32px] text-[#D0D0D0]">
                                    Ваша корзина пуста
                                </h3>
                                <p className="text-[14px] md:text-[18px]">
                                    <Link
                                        href="/client/catalog"
                                        className="text-[#0077FF]"
                                    >
                                        Нажмите здесь
                                    </Link>
                                    , чтобы продолжить покупки
                                </p>
                            </div>
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div className="w-[360px] border px-4 py-3">
                            <span className="text-[12px] text-[#818181]">
                                1 товар на общую сумму
                            </span>
                            <h3 className="text-[24px] font-bold mb-3">
                                {totalPrice} ₽
                            </h3>
                            <Button
                                variant={"outline"}
                                className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[4px] w-full"
                            >
                                Введите промокод
                            </Button>
                            <Button
                                onClick={handleOrder}
                                className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[8px] w-full mt-3"
                            >
                                Оформить заказ
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {cart.length < 1 && (
                <div className="bg-[#F8F8F8] py-[50px] lg:py-[100px]">
                    <div className="container">
                        <ProductsList title={"Наши акции"} />
                    </div>
                </div>
            )}
        </section>
    );
}
