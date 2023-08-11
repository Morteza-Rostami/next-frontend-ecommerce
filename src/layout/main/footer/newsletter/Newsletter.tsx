import Image from 'next/image';
import React from 'react';
import { HiEnvelope } from 'react-icons/hi2';

type NewsletterProps = {
  
};

const Newsletter:React.FC<any> = () => {
  
  return (
    <div
    className='
    flex flex-col gap-16
    container mx-auto
    md:flex-row
    px-4
    py-20
    '
    >
      {/* form section*/}
      <div
      className='
      flex flex-col items-center justify-center gap-8
      flex-1
      #py-6
      '
      >
        <div
        className='
        self-start
        text-white text-right
        '
        >
          <p>
          با اولین خرید 20% تخفیف بگیر
          </p>
          <h2
          className='
          text-3xl mb-4
          '
          >
          به ایمیل نامه ما بپیوند
          </h2>
          <p
          className='
          text-sm max-w-xs text-slate-300
          '
          >
          به نوشته پایگاه صنعت غذای ایران، «سلیمانی با تأسیس کاله حال و هوای تازه‌ای به صنعت
          </p>
        </div>

        {/* form */}
        <form
        className='
        flex items-center grow-0
        flex-1 w-full
      
        bg-gray-100
        rounded-md
        focus-within:bg-gray-200
        '
        >
        <button
        type='submit'
        className='
        h-full
        #w-full
        p-2
        pr-4
        '
        >
          <HiEnvelope
          color={'gray'}
          size={24}
          />
        </button>
        <input 
        className='
        p-3
        rounded-sm
        w-full
        bg-transparent
        border-none
        outline-none
        #focus:ring-blue-500
        '
        type="text" 
        name="search" 
        placeholder=' ایمیلت رو بنویس ...'
        />
        
        <button
        className='
        bg-blue-700
        ml-4 p-2 px-4 rounded-md 
        text-white
        transition-all
        hover:bg-blue-500
        '
        >
          ارسال
        </button>
        </form>
      </div>

      {/* banner */}
      <div
      className='
      flex-1
      '
      >
        <div
        className='
        relative h-full w-full
        '
        style={{
          aspectRatio: '10/4'
        }}
        >
          <Image
          className='
          object-contain
          '
          src={'https://freepngimg.com/thumb/gift/32216-9-present-clipart.png'}
          alt={'newsletter'}
          fill
          />
        </div>
      </div>
    </div>
  )
}
export default Newsletter;