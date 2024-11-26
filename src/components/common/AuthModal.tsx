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
import { GetDataToken, PostData } from "@/services.jsx/data";
import Image from "next/image";
import UserIcon from "@/assets/icons/user-icon.svg";
import { useRouter } from "next/navigation";

export function AuthModal() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [fathername, setFathername] = useState("");
    const [number, setNumber] = useState("");
    const [err, setErr] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [login, setLogin] = useState(true);
    const [userType, setUserType] = useState("Клиент");
    const router = useRouter();

    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("role");
        if (user) {
            setUserRole(user);
        }
    }, [userRole]);

    const HandleSignIn = () => {
        const data = {
            username: username,
            password: password,
        };
        PostData("api/v1/account/signin/", data)
            .then((res) => {
                localStorage.setItem("token", res?.access);
                if (localStorage.getItem("token")) {
                    GetDataToken("api/v1/account/user/").then((res) => {
                        localStorage.setItem("role", res?.groups[0]?.name);
                    });
                }
                setIsOpen(false);
            })
            .then(() => {
                window.location.reload();
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
    const HandleSignUp = () => {
        const data = {
            username: username,
            password: password,
            email: email,
            first_name: firstname,
            last_name: lastname,
            father_name: fathername,
            phone: number,
            role: userType,
        };
        PostData("api/v1/account/signup/", data)
            .then((res) => {
                setLogin(true);
            })
            .catch(() => {
                setErr(true);
                setTimeout(() => {
                    setErr(false);
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
            {userRole != "" ? (
                <>
                    <Button
                        onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}
                        className={`ms-8 text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] hidden md:block`}
                    >
                        Выход
                    </Button>
                    <Link
                        href={"/cabinet/partner/statistics"}
                        className="block md:hidden"
                    >
                        <Image
                            src={UserIcon}
                            alt="Istom Logo"
                            className="object-contain"
                            priority
                            width={22}
                            height={22}
                        />
                    </Link>
                </>
            ) : (
                <>
                    <div className="hidden md:block">
                        <DialogTrigger asChild>
                            <Button
                                className={`ms-8 text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px]`}
                            >
                                Войти
                            </Button>
                        </DialogTrigger>
                    </div>
                    <div className="block md:hidden">
                        <DialogTrigger asChild>
                            <Image
                                src={UserIcon}
                                alt="Istom Logo"
                                className="object-contain"
                                priority
                                width={22}
                                height={22}
                            />
                        </DialogTrigger>
                    </div>
                </>
            )}

            <DialogContent
                className={`sm:max-w-[570px] ${
                    err ? "bg-[#FF6565]" : "bg-[#F4F4F4]"
                }`}
            >
                {login ? (
                    <DialogHeader className="relative">
                        <DialogTitle className="text-[36px] font-normal">
                            {err
                                ? "Что-то пошло не так"
                                : "Вход в личный кабинет"}
                        </DialogTitle>

                        <DialogDescription>
                            <div className="mt-4">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="text-[14px] md:text-[18px] text-[#00000080]"
                                    >
                                        Ваше имя:{" "}
                                        <span className="text-[#FF6565]">
                                            *
                                        </span>
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
                                        <span className="text-[#FF6565]">
                                            *
                                        </span>
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
                                <Button
                                    onClick={() => setLogin(false)}
                                    className="text-[14px] bg-[#FFECD4] text-yellow hover:bg-[#FFECD4] md:text-[18px] mt-3 w-full font-bold hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]"
                                >
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
                ) : (
                    <DialogHeader className="relative">
                        <DialogTitle className="text-[36px] font-normal">
                            {err ? "Что-то пошло не так" : "Зарегистрироваться"}
                        </DialogTitle>

                        <DialogDescription>
                            <div className="mt-4 h-[500px] overflow-y-scroll hide-scrollbar">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="text-[14px] md:text-[18px] text-[#00000080]"
                                    >
                                        Ваше имя:{" "}
                                        <span className="text-[#FF6565]">
                                            *
                                        </span>
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
                                        Электронная почта{" "}
                                        <span className="text-[#FF6565]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="password"
                                        id="password"
                                        className="w-full h-[57px] border mt-2 border-[#00000080] px-3 rounded-[5px]"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="password"
                                        className="text-[14px] md:text-[18px] text-[#00000080]"
                                    >
                                        Пароль{" "}
                                        <span className="text-[#FF6565]">
                                            *
                                        </span>
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
                                <div className="mt-4">
                                    <p className="text-[14px] md:text-[18px] text-[#00000080]">
                                        Выберите тип пользователя:{" "}
                                        <span className="text-[#FF6565]">
                                            *
                                        </span>
                                    </p>
                                    <div className="flex space-x-4 mt-2">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="userType"
                                                value="partner"
                                                checked={userType == "Партнер"}
                                                onChange={(e) =>
                                                    setUserType("Партнер")
                                                }
                                                className="mr-2"
                                            />
                                            Партнер
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="userType"
                                                value="client"
                                                checked={userType == "Клиент"}
                                                onChange={(e) =>
                                                    setUserType("Клиент")
                                                }
                                                className="mr-2"
                                            />
                                            Клиент
                                        </label>
                                    </div>
                                </div>
                                {userType === "Партнер" && (
                                    <>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="password"
                                                className="text-[14px] md:text-[18px] text-[#00000080]"
                                            >
                                                Имя{" "}
                                                <span className="text-[#FF6565]">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="firstname"
                                                id="firstname"
                                                className="w-full h-[57px] border mt-2 border-[#00000080] px-3 rounded-[5px]"
                                                value={firstname}
                                                onChange={(e) =>
                                                    setFirstname(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="password"
                                                className="text-[14px] md:text-[18px] text-[#00000080]"
                                            >
                                                Фамилия{" "}
                                                <span className="text-[#FF6565]">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                                className="w-full h-[57px] border mt-2 border-[#00000080] px-3 rounded-[5px]"
                                                value={lastname}
                                                onChange={(e) =>
                                                    setLastname(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="password"
                                                className="text-[14px] md:text-[18px] text-[#00000080]"
                                            >
                                                Номер телефона{" "}
                                                <span className="text-[#FF6565]">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="number"
                                                id="number"
                                                className="w-full h-[57px] border mt-2 border-[#00000080] px-3 rounded-[5px]"
                                                value={number}
                                                onChange={(e) =>
                                                    setNumber(e.target.value)
                                                }
                                            />
                                        </div>
                                    </>
                                )}

                                {/* <div className="my-3 flex items-center justify-between">
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
                                </div> */}
                                <Button
                                    onClick={HandleSignUp}
                                    className="text-[14px] md:text-[18px] mt-3 w-full font-normal hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]"
                                >
                                    Регистрация
                                </Button>
                                <Button
                                    onClick={() => setLogin(true)}
                                    className="text-[14px] bg-[#FFECD4] text-yellow hover:bg-[#FFECD4] md:text-[18px] mt-3 w-full font-bold hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]"
                                >
                                    Войти
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
                )}
            </DialogContent>
        </Dialog>
    );
}
