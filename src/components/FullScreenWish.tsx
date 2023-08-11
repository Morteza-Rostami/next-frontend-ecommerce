import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiArrowsPointingOut } from 'react-icons/hi2';

type FullScreenWishProps = {
  
};

const FullScreenWish:React.FC<FullScreenWishProps> = () => {
  
  return (
    <div
    className='
    absolute top-5 left-5
    flex flex-col gap-2 items-center
    '
    >
      <button
      className='
      border border-gray-200 rounded-full p-2
      shadow
      transition-all
      bg-transparent
      hover:bg-sky-300
      '
      >
        <HiArrowsPointingOut
        size={24}
        color={'gray'}
        />
      </button>
      <button
      className='
      border border-gray-200 rounded-full p-2
      shadow
      transition-all
      bg-transparent
      hover:bg-sky-300
      '
      >
        <HiOutlineHeart
        size={24}
        color={'gray'}
        />
      </button>
    </div>
  )
}
export default FullScreenWish;