"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import TrashIcon from "@/assets/icons/trash-icon.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import { useDispatch } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    removeProduct,
} from "@/store/cartSlice/cartSlice";
import { Product } from "@/types";
import Link from "next/link";

const CartItem = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();

    return (
        <div className="lg:h-[170px] border mt-3 rounded-[5px] flex flex-col md:flex-row justify-between items-start md:items-center p-8 gap-3">
            <div className="flex gap-4">
                <Link
                    href={`/client/product/${product.id}`}
                    className="border w-[110px] h-[110px] rounded-[10px]"
                >
                    <Image
                        className="w-full h-full object-cover rounded-[10px]"
                        src={product?.images && product?.images[0]?.image}
                        alt={product.name}
                        width={110}
                        height={110}
                    />
                </Link>
                <div className="">
                    <span className="text-[10px] inline-block leading-[25px] text-white  px-2 h-[25px] rounded-[5px] bg-[#FF6565] hover:bg-[#FF6565] tracking-[2px] font-bold">
                        ХИТ
                    </span>
                    <h2 className="text-[18px] font-normal mt-2">
                        {product.name}
                    </h2>
                </div>
            </div>
            <div className="h-[43px] min-w-[100px] rounded-[5px] bg-[#F4F4F4] flex justify-between items-center">
                <Button
                    onClick={() =>
                        dispatch(
                            decreaseQuantity({
                                id: product.id,
                                size: product.size,
                            })
                        )
                    }
                    variant={"ghost"}
                    className="text-[20px] text-[#B2B2B2]"
                >
                    -
                </Button>
                <span className="text-[20px] font-bold">
                    {product.quantity}
                </span>
                <Button
                    onClick={() =>
                        dispatch(
                            increaseQuantity({
                                id: product.id,
                                size: product.size,
                            })
                        )
                    }
                    variant={"ghost"}
                    className="text-[20px] text-[#B2B2B2]"
                >
                    +
                </Button>
            </div>
            <div className="flex items-center gap-2">
                <h4 className="text-[18px] font-bold">
                    {product.price} ₽ / шт.
                </h4>
                <span className="line-through text-[#818181] text-[12px]">
                    9 750 ₽ / шт.
                </span>
                <Button
                    variant={"ghost"}
                    onClick={() =>
                        dispatch(
                            removeProduct({
                                id: product.id,
                                size: product.size,
                            })
                        )
                    }
                >
                    <Image src={TrashIcon} alt="delete" />
                </Button>
                <Image src={FavoriteIcon} alt="favorite" />
            </div>
        </div>
    );
};

export default CartItem;
