import Image from 'next/image';
import React from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';

type HeroProps = {
  
};

const HeroCard:React.FC<any> = ({
  image='',
  discount,
  name,
  text,
  price,
  btnCol,
  hoverState,
}) => {
  
  //console.log(name, text, price)
  return (
    <div
    className='
    hero-card
    flex items-center justify-center
    relative
    rounded-md overflow-hidden
    flex-1
    max-h-72
    lg:max-h-96 w-full
    '
    >
      <div
      className='
      flex
      #aspect-video w-full relative h-full
      aspect-square
      '
      /* style={{
        display: 'block',
        width: '100%',
        position: 'relative',
        //maxWidth: '200px',
        aspectRatio: '8/4',
        height: '300px',
        margin: '0 auto'
      }} */
      >
        <Image
        src={image}
        //width={400}
        //height={400}
        alt='hero-image'
        className="
        object-cover
        " 
        fill        
        />
      </div>

      {/* overlay */}
      <div
      className='
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      flex flex-col gap-3
      text-white
      bg-black bg-opacity-40
      p-4 rounded-md
      #max-h-52 whitespace-nowrap
      md:top-10 md:right-10 md:-translate-x-0 md:-translate-y-0
      '
      style={{
        width: 'fit-content',
      }}
      >
        <p
        className='
        flex items-center gap-6
        '
        >
          <span
          className='
          text-green-400 font-bold
          '
          >
            {discount}% تخفیف-
          </span>
          <span
          className='
          text-sm
          '
          >
            پیشنهاده ویژه
          </span>
        </p>

        <h2
        className='
        text-xl
        md:text-3xl
        '
        >
          {name}
        </h2>
        <p>
          {text}
        </p>
        <p>
          از <span className='font-bold text-rose-500 text-2xl'>{price} تومان</span>
        </p>
        <button
        className={`
        ${btnCol}
        ${hoverState}
        flex gap-2 items-center
        py-2 px-3
        rounded-md
        transition-all
        self-start
        `}
        >
          <span>
          خرید کن 
          </span>
          <HiArrowLongLeft/>
        </button>
      </div>
    </div>
  )
}
export default HeroCard;