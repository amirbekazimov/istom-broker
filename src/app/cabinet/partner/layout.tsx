import { Heart } from 'lucide-react';
import Link from 'next/link';
import { GoHeartFill } from 'react-icons/go';

import { GiPieChart } from 'react-icons/gi';
import { IoLogInOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa6';
import { BsBoxFill } from 'react-icons/bs';
import { BsFillFileCheckFill } from 'react-icons/bs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-[400px] container py-10 flex gap-12 items-start'>
      <div className='w-[110px] text-white space-y-4'>
        <div className='bg-[#111318] py-6 px-3 font-aeonic rounded-full space-y-4'>
          <Link
            href='/cabinet/partner/statistics'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#434549] mb-2 rounded-full flex items-center justify-center'>
              <GiPieChart size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>
              Статистика
            </span>
          </Link>
          <Link
            href='/cabinet/partner/product-history'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#434549] mb-2 rounded-full flex items-center justify-center'>
              <BsFillFileCheckFill size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>
              История заказов
            </span>
          </Link>
          <Link
            href='/cabinet/client'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#434549] mb-2 rounded-full flex items-center justify-center'>
              <BsBoxFill size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>
              Добавить товар
            </span>
          </Link>
        </div>
        <div className='bg-[#FFB224] py-6 px-3 font-aeonic rounded-full space-y-4'>
          <Link
            href='/cabinet/client/profile'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#FFC55B] mb-2 rounded-full flex items-center justify-center'>
              <FaUser size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>Профиль</span>
          </Link>
          <Link
            href='/cabinet/client'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#FFC55B] mb-2 rounded-full flex items-center justify-center'>
              <IoLogInOutline size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>Выйти</span>
          </Link>
        </div>
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  );
}
