import { Button } from '@mantine/core';
import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { HiBars3 } from 'react-icons/hi2';

type CategoriesBtnProps = {
  
};

const CategoriesBtn:React.FC<CategoriesBtnProps> = ({
  open,
  close,
}) => {
  
  return (
    <button 
    className="
    flex items-center justify-between gap-3
    bg-sky-400 
    hover:bg-sky-500 
    text-white 
    font-bold 
    py-2 px-4 rounded"
    onMouseEnter={open} 
    onMouseLeave={close}
    >
      <HiBars3/>
      <span
      className='
      text-md
      '
      >
        دسته بندیها
      </span>

      <HiChevronDown
      color={'lightGray'}
      size={24}
      />
    </button>

 
  )
}
export default CategoriesBtn;