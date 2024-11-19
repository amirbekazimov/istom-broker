import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Istom-logo.png";
import Telegram from "@/assets/icons/telegram.svg";
import Message from "@/assets/icons/message.svg";
import Whatsup from "@/assets/icons/whatsup.svg";
import Vk from "@/assets/icons/vk.svg";
import YouTube from "@/assets/icons/you-tube.svg";
import Phone from "@/assets/icons/phone-icon.svg";
import Link from "next/link";

const socials = [
  { name: "Telegram", icon: Telegram, link: "" },
  { name: "Message", icon: Message, link: "" },
  { name: "Whatsup", icon: Whatsup, link: "" },
  { name: "Vk", icon: Vk, link: "" },
  { name: "YouTube", icon: YouTube, link: "" },
];
const Footer: React.FC = () => {
  return (
    <footer className=" bg-[#F8F8F8] border-t ">
      <div className=" gap-[24px] justify-between flex-wrap container py-8 px-4 hidden md:flex">
        <div>
          <Image
            src={Logo}
            alt="Istom logo"
            className="object-contain"
            width={150}
            height={50}
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-base font-bold">Каталог</h3>
          <div className="mt-6">
            <ul className="text-[14px] space-y-3 text-[#00000099]">
              <li>
                <Link href="/" className="text-[#00000099]">
                  Все товары
                </Link>
              </li>
              <li>
                <Link href="/">Стоматологические материалы</Link>
              </li>
              <li>
                <Link href="/">Стоматологические инструменты</Link>
              </li>
              <li>
                <Link href="/">Хирургия</Link>
              </li>
              <li>
                <Link href="/">Инфузионные системы</Link>
              </li>
              <li>
                <Link href="/">Уход за стомой</Link>
              </li>
              <li>
                <Link href="/">Ортопедия</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold">Помощь</h3>
          <div className="mt-6">
            <ul className="text-[14px] space-y-3 text-[#00000099]">
              <li>
                <Link href="/">Связаться с нами</Link>
              </li>
              <li>
                <Link href="/">Вопрос-ответ</Link>
              </li>
              <li>
                <Link href="/">Доставка</Link>
              </li>
              <li>
                <Link href="/">Оплата</Link>
              </li>
              <li>
                <Link href="/">Возврат</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold">Личный кабинет</h3>
          <div className="mt-6">
            <ul className="text-[14px] space-y-3 text-[#00000099]">
              <li>
                <Link href="/">Войти</Link>
              </li>
              <li>
                <Link href="/">Зарегистрироваться</Link>
              </li>
              <li>
                <Link href="/">История заказов</Link>
              </li>
              <li>
                <Link href="/">Избранные товары</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold">Информация</h3>
          <div className="mt-6">
            <ul className="text-[14px] space-y-3 text-[#00000099]">
              <li>
                <Link href="/">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link href="/">Публичная оферта</Link>
              </li>
              <li>
                <Link href="/">О компании</Link>
              </li>
              <li>
                <Link href="/">Отзывы</Link>
              </li>
              <li>
                <Link href="/">Реквизиты</Link>
              </li>
              <li>
                <Link href="/">Документы</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold">Контакты</h3>
          <div className="mt-6 text-[14px]">
            <span className="text-[#00000080]">Режим работы:</span>
            <p>Пн-Пт: 10:00 - 18:00</p>

            <p className="text-[#00000080] mt-3">
              Город Москва, <br /> Люблинская улица, 61
            </p>
            <div className="flex  items-center space-x-4 mt-5">
              {socials.map((social) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    className="object-contain"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile block md:hidden px-8 py-4">
        <Image
          src={Logo}
          alt="Istom logo"
          className="object-contain"
          width={150}
          height={50}
          loading="lazy"
        />
        <div className="flex  items-center space-x-4 mt-5">
          {socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                className="object-contain"
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
        <div className="mt-4 font-bold text-base">
          <a href="tel:+79319544371" className="flex items-center space-x-3">
            <Image
              src={Phone}
              alt="Istom logo"
              className="object-contain"
              width={24}
              height={24}
              loading="lazy"
            />
            <span>+7 (931) 954 43 71</span>
          </a>
          <a href="tel:+79990377471" className="flex items-center space-x-3">
            <Image
              src={Phone}
              alt="Istom logo"
              className="object-contain"
              width={24}
              height={24}
              loading="lazy"
            />
            <span>+7 (999) 037 74 71</span>
          </a>
        </div>
        <div className="mt-4  text-[14px]">
          <span className="text-[#00000080]">Режим работы:</span>
          <p>Пн-Пт: 10:00 - 18:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
