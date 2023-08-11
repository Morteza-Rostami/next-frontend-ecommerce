import Image from 'next/image';
import React from 'react';

type CatBannerOneProps = {
  
};

const CatBannerOne:React.FC<any> = ({
  image,
  text,
  subText,
  btnTail,
}: any) => {
  
  return (
    <div
    className='
    relative
    aspect-square object-cover
    w-full h-56 rounded-md overflow-hidden
    '
    >
      <Image
      className='
      object-cover
      '
      src={image}
      alt={text}
      fill
      />
      {/* overlay */}
      <div
      className='
      absolute top-10 right-10
      flex flex-col gap-2
      text-white 
      bg-slate-700
      p-3 rounded-md bg-opacity-70
      '
      >
        <h2
        className='
        text-2xl
        '
        >
          {text}
        </h2>
        <p
        className='
        text-sm font-semibold text-rose-200
        '
        >
          {subText}
        </p>
        <button
        className={`
        ${btnTail}
        py-2 px-3 rounded-full
        mt-3
        `}
        >
          خرید کن
        </button>
      </div>
    </div>
  )
}
export default CatBannerOne;