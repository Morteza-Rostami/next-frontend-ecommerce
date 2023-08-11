import { Button } from '@mantine/core';
import React from 'react';
import { HiChevronDown } from 'react-icons/hi';

type LocBtnProps = {
  
};

const LocBtn:React.FC<LocBtnProps> = () => {
  
  return (
    <button
    className='
    hidden
    justify-between gap-10 items-center
    lg:flex
    bg-transparent hover:bg-gray-100 text-gray-500 
    font-semibold 
    py-2 px-4 border border-gray-100 
    #hover:border-transparent 
    rounded-md
    '
    >
      <div
      className='
      text-right
      '
      >
        <p
        className='
        text-xs font-thin
        '
        >
          منطقه شما
        </p>
        <p
        className='
        text-xs font-semibold
        '
        >
          تهران
        </p>
      </div>
      <HiChevronDown
      color={'lightGray'}
      size={24}
      />
    </button>
  )
}
export default LocBtn;