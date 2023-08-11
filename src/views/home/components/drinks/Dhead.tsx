import React from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';

type FheadProps = {
  
};

const Dhead:React.FC<DheadProps> = () => {
  
  return (
    <div
    className='
    flex items-center justify-between
    w-full
    '
    >
      <div>
      <h2
      className='
      text-xl
      '
      >
        میوه و سبزی جات
      </h2>
      <p
      className='
      text-gray-500 text-sm
      '
      >
        تازه ترین محصولات در اینجا
      </p>
      </div>
      <button
      className='
      flex items-center justify-between gap-3
      border border-gray-300 rounded-full
      p-2
      px-4
      transition-all
      hover:bg-gray-200
      '
      >
        <span>
          بیشتر
        </span>
        <HiArrowLongLeft/>
      </button>
    </div>
  )
}
export default Dhead;