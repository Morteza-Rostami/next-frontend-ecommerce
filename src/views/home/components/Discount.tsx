import Link from 'next/link';
import React from 'react';

type DiscountProps = {
  
};

const Discount:React.FC<DiscountProps> = () => {
  
  return (
    <Link
    className='
    flex flex-col items-center justify-center gap-3
    w-full
    bg-rose-100
    p-4
    rounded-md

    md:flex-row
    '
    href={''}
    >
      <p
      className='
      text-rose-600
      '
      >
        تخفیف ویژه برای<span className='font-bold underline'>&nbsp; اولین خرید &nbsp;</span>شما.
      </p>
      <span
      className='
      border border-dashed border-rose-600
      rounded-full
      p-1
      text-rose-600 text-center font-bold
      '
      >
        FSDDF768FAH
      </span>
      <p
      className='
      text-gray-400 text-sm
      '
      >
        کد تخفیف را در مرحله نهایی استفاده کنید!
      </p>
    </Link>
  )
}
export default Discount;