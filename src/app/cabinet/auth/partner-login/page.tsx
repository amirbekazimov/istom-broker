'use client';
import React from 'react';
import bgImage from '@/assets/images/Form-partner.png';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EyeOffIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { login } from '@/services.jsx/auth';

const Login = () => {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login('login', 'password')
      .then(() => router.push('/cabinet/partner'))
      .catch(console.error);
  };
  return (
    <div className='py-6 container min-h-[250px] md:min-h-[450px]'>
      <div
        style={{ backgroundImage: `url(${bgImage.src})` }}
        className='h-[470px] bg-no-repeat bg-cover bg-center rounded-[10px]'
      >
        <div className='p-8 text-white font-aeonic'>
          <h1 className='text-[25px] md:text-[25px] font-bold font-cygre'>
            Войти как клиент
          </h1>
          <div className='flex items-center text-[15px]'>
            <p>Нет аккаунта?</p>
            <Link href='' className='text-[#FFB224] ml-2'>
              Создать аккаунт
            </Link>
          </div>
          <form action='' className='max-w-[430px] mt-4' onSubmit={handleLogin}>
            <div className='space-y-1'>
              <Label
                htmlFor='name'
                className='font-normal font-aeonic text-[13px] md:text-[15px] text-[#5B5B5B]'
              >
                Имя
              </Label>
              <Input
                id='name'
                placeholder='Введите ваше имя'
                className='w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#222428]  placeholder:text-[#5B5B5B]'
              />
            </div>
            <div className='space-y-1 mt-2 relative'>
              <Label
                htmlFor='name'
                className='font-normal font-aeonic text-[13px] md:text-[15px] text-[#5B5B5B]'
              >
                Пароль
              </Label>
              <Input
                id='name'
                placeholder='Введите ваше имя'
                className='w-full text-[15px] px-5 font-aeonic h-[57px] md:h-[63px] focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 rounded-[3px] border-0 text-base bg-[#222428]  placeholder:text-[#5B5B5B]'
              />
              <EyeOffIcon
                className=' absolute right-5 top-1/2 cursor-pointer'
                size={22}
              />
            </div>
            <Button
              type='submit'
              className='bg-[#FFB224] hover:bg-black rounded-[3px] mt-5 h-[65px] w-full'
            >
              Войти
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
