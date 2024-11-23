"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { VscMenu } from "react-icons/vsc";
import Logo from "@/assets/images/logoistomshop.svg";
import CatalogIcon from "@/assets/icons/catalog-icon.svg";
import SearchIcon from "@/assets/icons/search.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import CartIcon from "@/assets/icons/cart-icon.svg";
import PhoneIcon from "@/assets/icons/phone-icon.svg";
import { AuthModal } from "./AuthModal";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="w-full bg-white  p-4">
                <div className="container hidden md:block">
                    <div className="flex items-center space-x-4 text-[14px] font-bold">
                        <Link href="/shop">Магазин</Link>
                        <Link href="/payment">Оплата и доставка</Link>
                        <Link href="/about">О нас</Link>
                        <Link href="/contacts">Контакты</Link>
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                        <Link href="/" className="max-w-[160px] w-full block">
                            <Image
                                src={Logo}
                                alt="Istom Logo"
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <div className="catalog">
                            <Link href="/client/catalog">
                                <Button
                                    className={`text-[16px] px-6 font-bold hover:brightness-[0.95] h-[50px] rounded-[12px]`}
                                >
                                    <Image
                                        src={CatalogIcon}
                                        alt="catalog icon"
                                        className="object-contain"
                                        priority
                                    />
                                    Каталог
                                </Button>
                            </Link>
                        </div>
                        <div className="search relative flex-1">
                            <input
                                type="text"
                                placeholder="Найти"
                                className="border border-[#D1D1D1] h-[50px] rounded-[12px] px-6 py-2 w-full"
                            />
                            <Image
                                src={SearchIcon}
                                alt="search icon"
                                width={25}
                                height={25}
                                priority
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="flex space-x-4 text-[14px]">
                                <Link
                                    href="/favorite"
                                    className="flex flex-col space-y-1 font-normal items-center justify-center"
                                >
                                    <Image
                                        src={FavoriteIcon}
                                        alt="favorite icon"
                                        priority
                                        width={25}
                                        height={25}
                                    />
                                    <span>Избранное</span>
                                </Link>
                                <Link
                                    href="/client/cart"
                                    className="flex flex-col space-y-1 font-normal items-center justify-center "
                                >
                                    <Image
                                        src={CartIcon}
                                        alt="cart icon"
                                        priority
                                        width={25}
                                        height={25}
                                    />
                                    <span>Корзина</span>
                                </Link>
                            </div>
                            <AuthModal />
                        </div>
                    </div>
                </div>
                <div className="block md:hidden ">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <VscMenu className="text-2xl" />
                            <div className="">
                                <Link
                                    href="/"
                                    className="max-w-[110px] w-full block"
                                >
                                    <Image
                                        src={Logo}
                                        alt="Istom Logo"
                                        className="object-contain"
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Link href="/" className="">
                                <Image
                                    src={PhoneIcon}
                                    alt="Istom Logo"
                                    className="object-contain"
                                    priority
                                    width={25}
                                    height={25}
                                />
                            </Link>
                            <Link href="/" className="">
                                <Image
                                    src={SearchIcon}
                                    alt="Istom Logo"
                                    className="object-contain"
                                    priority
                                    width={25}
                                    height={25}
                                />
                            </Link>
                            <AuthModal />
                            <Link href="/" className="">
                                <Image
                                    src={CartIcon}
                                    alt="Istom Logo"
                                    className="object-contain"
                                    priority
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
