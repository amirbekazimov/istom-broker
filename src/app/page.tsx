"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import Banner from "@/assets/images/login-banner.png";
import LogoSingle from "@/assets/images/logo-single.svg";
import { useEffect, useState } from "react";

export default function Home() {
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("role");
        if (user) {
            setUserRole(user);
        }
    }, [userRole]);
    return (
        <section className="pt-10 pb-12 md:pb-20 border-t">
            <div className="relative flex justify-center items-center h-[360px] md:h-[650px] md:mx-4">
                <Image
                    src={Banner}
                    alt="Login banner"
                    className="absolute w-full h-full -z-[1] object-cover md:rounded-2xl"
                />
                <div className="z-[99] px-3 text-center">
                    <h1 className="text-white text-[23px] lg:text-[46px] font-bold">
                        Войдите в личный кабинет как:
                    </h1>
                    <div className="flex justify-center items-center space-x-5 mt-2">
                        {userRole == "Партнер" ? (
                            <ButtonLink
                                href="/cabinet/partner/product-history"
                                label="Вход партнеру"
                            />
                        ) : (
                            <Button disabled className="max-w-[180px] w-full lg:max-w-[310px] text-[11px] lg:text-[18px] font-normal hover:brightness-[0.95] px-6 h-[33px] md:h-[50px] rounded-[5px] md:rounded-[12px]">Вход партнеру</Button>
                        )}
                        <ButtonLink href="/client/home" label="Вход клиенту" />
                    </div>
                    <Image
                        src={LogoSingle}
                        alt="Logo single"
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[60px] md:w-[120px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

function ButtonLink({ href, label }: { href: string; label: string }) {
    return (
        <Button
            asChild
            className="max-w-[180px] w-full lg:max-w-[310px] text-[11px] lg:text-[18px] font-normal hover:brightness-[0.95] px-6 h-[33px] md:h-[50px] rounded-[5px] md:rounded-[12px]"
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
}
