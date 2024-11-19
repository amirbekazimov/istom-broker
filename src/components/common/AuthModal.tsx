import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { useEffect, useState } from "react";
import { PostData } from "@/services.jsx/data";

export function AuthModal() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const HandleSignIn = () => {
        const data = {
            username: username,
            password: password,
        };
        PostData("api/v1/account/signin/", data)
            .then((res) => {
                localStorage.setItem("token", res?.access);

                setIsOpen(false);
            })
            .catch(() => {
                setErr(true);
                setTimeout(() => {
                    setErr(false);
                    setUsername("");
                    setPassword("");
                }, 2000);
            });
    };

    const checkTokenExpiration = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = JSON.parse(atob(token.split(".")[1]));
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                localStorage.removeItem("token");
                setIsOpen(false);
            }
        } else {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        checkTokenExpiration();
        const intervalId = setInterval(checkTokenExpiration, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    className={`ms-8 text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px]`}
                >
                    Войти
                </Button>
            </DialogTrigger>
            <DialogContent
                className={`sm:max-w-[570px] ${
                    err ? "bg-[#FF6565]" : "bg-[#F4F4F4]"
                }`}
            >
                <DialogHeader className="relative">
                    <DialogTitle className="text-[36px] font-normal">
                        {err ? "Что-то пошло не так" : "Вход в личный кабинет"}
                    </DialogTitle>

                    <DialogDescription>
                        <div className="mt-4">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="text-[14px] md:text-[18px] text-[#00000080]"
                                >
                                    Ваше имя:{" "}
                                    <span className="text-[#FF6565]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    className="w-full h-[57px] mt-2 border border-[#00000080] px-3 rounded-[5px]"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                    className="text-[14px] md:text-[18px] text-[#00000080]"
                                >
                                    Пароль{" "}
                                    <span className="text-[#FF6565]">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full h-[57px] border mt-2 border-[#00000080] px-3 rounded-[5px]"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div className="my-3 flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        className="border-[#C5C5C5] bg-[#F0F1F2 w-[33px] h-[33px]"
                                        id="terms"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-[#00000080] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Запоминить меня
                                    </label>
                                </div>
                                <Link
                                    href="/"
                                    className="text-[#7288D7] text-[14px] font-semibold"
                                >
                                    Забыли пароль?
                                </Link>
                            </div>

                            <Button
                                onClick={HandleSignIn}
                                className="text-[14px] md:text-[18px] mt-3 w-full font-normal hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]"
                            >
                                Войти
                            </Button>
                            <Button className="text-[14px] bg-[#FFECD4] text-yellow hover:bg-[#FFECD4] md:text-[18px] mt-3 w-full font-bold hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]">
                                Регистрация
                            </Button>
                            <p className="text-[10px] md:text-[14px] mt-2">
                                Продолжая, вы соглашаетесь с{" "}
                                <Link href="/" className="text-[#7288D7]">
                                    политикой конфиденциальности
                                </Link>
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
