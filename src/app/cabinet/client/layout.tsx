import { Heart } from 'lucide-react';
import Link from 'next/link';
import { GoHeartFill } from 'react-icons/go';

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
            href='/cabinet/client'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#434549] mb-2 rounded-full flex items-center justify-center'>
              <GoHeartFill size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>
              Избранные товары
            </span>
          </Link>
          <Link
            href='/cabinet/client/product-history'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#434549] mb-2 rounded-full flex items-center justify-center'>
              <GoHeartFill size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>
              История заказов
            </span>
          </Link>
        </div>
        <div className='bg-[#FFB224] py-6 px-3 font-aeonic rounded-full space-y-4'>
          <Link
            href='/cabinet/client/profile'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#FFC55B] mb-2 rounded-full flex items-center justify-center'>
              <GoHeartFill size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>Профиль</span>
          </Link>
          <Link
            href='/cabinet/client'
            className='flex justify-center items-center w-full flex-col text-center'
          >
            <div className='w-[50px] h-[50px] bg-[#FFC55B] mb-2 rounded-full flex items-center justify-center'>
              <GoHeartFill size={25} />
            </div>
            <span className='font-normal text-sm leading-tight ,'>Выйти</span>
          </Link>
        </div>
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  );
}
