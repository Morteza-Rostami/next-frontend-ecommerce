import Image from 'next/image';
import React from 'react';

type BannerTwoProps = {
  
};

const BannerTwo:React.FC<any> = ({
  image,
  btnCol,
  btnHovCol,
}) => {
  
  return (
    <div
    className='
    relative 
    #aspect-square 
    h-full w-full
    rounded-md overflow-hidden
    '
    style={{
      aspectRatio: '10/5'
    }}
    >
      <Image
      className='
      object-cover
      '
      src={image}
      alt='banner'
      fill
      />

      {/* overlay */}
      <div
      className='
      flex flex-col gap-1
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      
      bg-slate-700 bg-opacity-70
      p-2 rounded-md
      text-white 
      whitespace-nowrap
      md:top-5 md:right-5 md:-translate-x-0 md:-translate-y-0
      '
      >
        <p
        className='
        text-rose-300 text-sm font-semibold
        '
        >
          تخفیف ویژه هفتگی
        </p>
        <h2
        className='
        font-bold text-lg
        '
        >
          انواع کنسروها
        </h2>
        <p
        className='
        text-xs font-thin
        '
        >
          بهترین قیمتها در اینجا
        </p>
        <button
        className={`
        ${btnCol}
        ${btnHovCol}
        p-2
        px-4
        rounded-md
        text-white 
        transition-all
        mt-2
        `}
        >
          خرید کن
        </button>
      </div>
    </div>
  )
}
export default BannerTwo;